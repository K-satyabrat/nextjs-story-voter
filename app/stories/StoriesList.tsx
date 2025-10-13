import Image from "next/image";
import { Story } from "../stories";
import Link from "next/link";

export function StoriesList({ stories }: { stories: Story[] }) {
  return (
    <section>
      {stories.map((story) => (
        <Link href={`/stories/${story.id}`} key={story.id}>
          {/* {"/stories/" + story.id}*/}
          <div>
            <Image
              src={"/" + story.imageUrl}
              alt={story.name}
              width={150}
              height={150}
            />
            <h2>{story.name}</h2>
            <p>{story.description}</p>
          </div>
        </Link>
      ))}
    </section>
  );
}
