"use client";

import Image from "next/image";
import Link from "next/link";
import { Story } from "../stories";
import { useState } from "react";

// const BASE_URL = "http://localhost:3000/api";
export default function VotedStoriesList({
  initialUserVotedStories,
}: {
  initialUserVotedStories: Story[];
}) {
  const [votedStories, setVotedStories] = useState(
    initialUserVotedStories ?? []
  );

  async function unVoteStory(storyId: string) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/111/votedStories`,
      {
        method: "DELETE",
        body: JSON.stringify({ storyId }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const updatedVotedStories = await response.json();
    setVotedStories(updatedVotedStories);
  }
  
  return (
    <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {Array.isArray(votedStories) &&
        votedStories.map((votedStory) => (
          <Link href={"/stories/" + votedStory.id} key={votedStory.id}>
            <div className="flex gap-4 flex-col">
              <figure className="relative w-full aspect-[16/9]">
                <Image
                  src={"/" + votedStory.imageUrl}
                  alt={votedStory.name}
                  fill
                  className="object-contain"
                />
              </figure>
              <h3 className="text-xl font-bold">{votedStory.name}</h3>

              <button
                className="p-2 border border-quaternary rounded-sm bg-quaternary text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  unVoteStory(votedStory.id);
                }}
              >
                Unvote Story
              </button>
            </div>
          </Link>
        ))}
    </section>
  );
}
