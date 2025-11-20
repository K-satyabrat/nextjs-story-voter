import StoriesList from "./StoriesList";

export default async function StoriesPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/stories`);
  if (!response.ok) throw new Error(`Request failed: ${response.status}`);
  const stories = await response.json();

  const votedResponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/users/111/votedStories`,
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
