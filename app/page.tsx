import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen gap-1">
      <Image
        src="/homePage.png"
        alt="Next.js Logo"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
      <Link href="/stories">
        <button className="absolute center  bg-transparent hover:bg-tertiary px-4 py-2 border rounded hover:scale-105 active:scale-95 transition-transform duration-200 hover:border-0 ">
          Go to stories
        </button>
      </Link>
    </div>
  );
}
