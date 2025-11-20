import { connectToDb } from "@/lib/db";

export async function GET() {
  const { db } = await connectToDb();
  const stories = await db.collection("my-stories").find({}).toArray();

  return new Response(JSON.stringify(stories), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
