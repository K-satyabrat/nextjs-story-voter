"use client"

import { stories } from "@/app/stories";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function VotedStoriesPage() {
  const [voteId, setVoteId] = useState(["1", "2"]);

  const votedStories = voteId.map(
    (voteId) => stories.find((story) => story.id === voteId)!
  );
  return (
    <section>
      <h1>Voted Stories</h1>
      {votedStories.map((votedStory) => (
        <Link href={`/story/${votedStory.id}`} key={votedStory.id}>
          <figure>
            <Image
              src={"/" + votedStory.imageUrl}
              alt={votedStory.name}
              width={150}
              height={150}
            />
          </figure>
          <h3>{votedStory.name}</h3>
        </Link>
      ))}
    </section>
  );
}
