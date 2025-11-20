
import { connectToDb} from "@/lib/db";
import { log } from "console";
import { NextRequest } from "next/server";

// type votedStoriesType = Record<string, string[]>;

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const urlParams = await params;
  const userId = urlParams.id;

  const { db } = await connectToDb();
  const userVotes = await db
    .collection("user-voted-stories")
    .findOne({ userId });

  if (!userVotes) {
    return new Response(JSON.stringify([]), { status: 200 });
  }
  console.log("after one");

  const votedStoryIds = userVotes.voteStoryIds;
  console.log("votedStoryIds", votedStoryIds);

  const userVotedStories = await db
    .collection("my-stories")
    .find({ id: { $in: votedStoryIds } })
    .toArray();

  return new Response(JSON.stringify(userVotedStories), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

interface VoteBody {
  storyId: string;
}


export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { db } = await connectToDb();

  const urlParams = await params;
  const userId = urlParams.id;

  const body: VoteBody = await request.json();
  const storyId = body.storyId;

  const updatedVotedStoryIds = await db
    .collection("user-voted-stories")
    .findOneAndUpdate(
      { userId },
      { $addToSet: { voteStoryIds: storyId } },
      { upsert: true, returnDocument: "after" }
    );

  const userVotedStories = await db
    .collection("my-stories")
    .find({ id: { $in: updatedVotedStoryIds!.voteStoryIds } })
    .toArray();

  return new Response(JSON.stringify(userVotedStories), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}


interface VotedStoryCollection {
  userId: string;
  voteStoryIds: string[];
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { db } = await connectToDb();

  const urlParams = await params;
  const userId = urlParams.id;

  const body: VoteBody = await request.json();
  const storyId = body.storyId;

  const updatedVotedStoryIds = await db
    .collection<VotedStoryCollection>("user-voted-stories")
    .findOneAndUpdate(
      { userId },
      { $pull: { voteStoryIds: storyId } },
      { upsert: true, returnDocument: "after" }
    );

  const userVotedStories = await db
    .collection("my-stories")
    .find({ id: { $in: updatedVotedStoryIds!.voteStoryIds } })
    .toArray();

  return new Response(JSON.stringify(userVotedStories), {
    status: 202,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
