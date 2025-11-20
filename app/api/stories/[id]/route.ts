
import { connectToDb } from "@/lib/db";
import { NextRequest } from "next/server";



export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const storyId = context.params.id;
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
