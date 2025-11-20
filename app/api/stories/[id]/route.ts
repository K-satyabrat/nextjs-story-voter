
import { connectToDb } from "@/lib/db";
import { NextRequest } from "next/server";



export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id: storyId } = await context.params;
  const { db } = await connectToDb();

  const story = await db.collection("my-stories").findOne({ id: storyId });

  
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
