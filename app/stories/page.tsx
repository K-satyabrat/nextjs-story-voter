import StoriesList from "./StoriesList";

export const dynamic = "force-dynamic";

export default async function StoriesPage() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
  const response = await fetch(baseUrl + '/api/stories');
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  const stories = await response.json();

  const votedResponse = await fetch(
    baseUrl + '/api/users/111/votedStories',
    {
      cache: "no-cache",
    }
  );
  const votedStories = await votedResponse.json();

  return (
    <main>
      <h1 className="font-bold text-4xl p-1 text-white">Stories</h1>
      <StoriesList stories={stories} initialVotedStories={votedStories} />
    </main>
  );
}
