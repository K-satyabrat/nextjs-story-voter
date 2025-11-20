"use client";

import Image from "next/image";
import { Story } from "../stories";
import Link from "next/link";
import { useState } from "react";

// const BASE_URL = "http://localhost:3000/api";
export default function StoriesList({
  stories,
  initialVotedStories,
}: {
  stories: Story[];
  initialVotedStories: Story[];
}) {
  const [votedStories, setVotedStories] = useState(initialVotedStories);

  async function voteStory(storyId: string) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/users/111/votedStories`,
      {
        method: "POST",
        body: JSON.stringify({ storyId }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const updatedVotedStories = await response.json();
    setVotedStories(updatedVotedStories);
  }

  function storyIsVoted(storyId: string) {
    return votedStories.some((votedStory) => votedStory.id === storyId);
  }

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
    <section className="grid gap-y-16 gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
      {stories.map((story) => (
        <Link href={"/stories/" + story.id} key={story.id}>
          <div className="flex gap-4 flex-col">
            <figure className="relative w-full aspect-[16/9]">
              <Image
                src={"/" + story.imageUrl}
                alt="story-image"
                fill
                className="object-contain"
              />
            </figure>
            <h2 className="text-xl font-bold">{story.name}</h2>

            {storyIsVoted(story.id) ? (
              <button
                className="p-2 border border-quaternary rounded-sm bg-quaternary text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  unVoteStory(story.id);
                }}
              >
                Unvote Story
              </button>
            ) : (
              <button
                className="p-2 border border-quaternary rounded-sm shadow-xl/20 shadow-quaternary"
                onClick={(e) => {
                  e.preventDefault();
                  voteStory(story.id);
                }}
              >
                Vote Story
              </button>
            )}
          </div>
        </Link>
      ))}
    </section>
  );
}
