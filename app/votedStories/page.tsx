import VotedStoriesList from "./VotedStoriesList";

// const BASE_URL = "http://localhost:3000/api";
export const dynamic = "force-dynamic";

export default async function VotedStoriesPage() {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
  const response = await fetch(baseUrl + '/api/users/111/votedStories');
  const votedStories = await response.json();

  

  return <VotedStoriesList initialUserVotedStories={votedStories} />;
}
