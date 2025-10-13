import { stories } from "@/app/stories";
import Image from "next/image";
import NotFound from "@/app/not-found";

export default async function StoryDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const story = stories.find((story) => story.id === id);

  if (!story) {
    return <NotFound />;
  }

  return (
    <section>
      <h1>{story.name}</h1>
      <figure>
        <Image
          src={"/" + story.imageUrl}
          alt={story.name}
          width={150}
          height={150}
        />
        <figcaption>{story.name}</figcaption>
      </figure>
      <p>{story.description}</p>
    </section>
  );
}
