import { stories } from "@/app/stories";
import { connectToDb } from "@/lib/db";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  const urlParams = await params;
  const storyId = urlParams.id;
  const { db } = await connectToDb();

  const story = await db.collection("my-stories").findOne({ id: storyId });

  // const story = stories.find((story) => story.id === storyId);
  if (!story) {
    return new Response("Story not found", { status: 404 });
  }

  return new Response(JSON.stringify(story), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
