import NotFoundPage from "@/app/not-found";
import Image from "next/image";

export default async function StoryDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
  const response = await fetch(baseUrl + '/api/stories/' + id);
  const story = await response.json();

  if (!story) {
    return <NotFoundPage />;
  }

  return (
    <section className="px-8 py-6 flex flex-col gap-12">
      <h1 className="font-bold text-6xl text-white">{story.name}</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <figure className="relative w-full aspect-[16/9]">
          <Image
            src={"/" + story.imageUrl}
            alt={story.name}
            fill
            className="object-contain"
          />
        </figure>
        <p className="text-xl md:self-center">{story.description}</p>
      </div>
    </section>
  );
}
