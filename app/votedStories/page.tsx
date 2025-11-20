import VotedStoriesList from "./VotedStoriesList";

// const BASE_URL = "http://localhost:3000/api";
export default async function VotedStoriesPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/111/votedStories`);
  const votedStories = await response.json();

  

  return <VotedStoriesList initialUserVotedStories={votedStories} />;
}
