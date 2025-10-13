import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between  border-1 border-gray-200 p-2  ">
            <ul className="flex gap-3">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/stories">Stories</Link>
                </li>
                <li>
                    <Link href="/votedStories">Voted Stories</Link>
                </li>
            </ul>
        </nav>
    );
}