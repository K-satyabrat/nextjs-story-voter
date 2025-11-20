import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="px-8 py-4 bg-quaternary text-primary">
      <ul className="flex gap-x-4 gap-y-8 flex-col 400:flex-row">
        <li>
          <Link
            href="/"
            className="text-lg font-semibold border-b border-primary px-4 py-2"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/stories"
            className="text-lg font-semibold border-b border-primary px-4 py-2"
          >
            Stories
          </Link>
        </li>
        <li>
          <Link
            href="/votedStories"
            className="text-lg font-semibold border-b border-primary px-4 py-2"
          >
            Voted Stories
          </Link>
        </li>
      </ul>
    </nav>
  );
}