import { stories } from "@/app/stories";

export async function GET() {
  return new Response(JSON.stringify(stories), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  });
}
