import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-screen gap-3">
      <h2 className="text-2xl font-bold">404 - Page Not Found</h2>
      <Link href="/" className="px-3 py-1 border rounded">
        Go to Home
      </Link>
    </section>
  );
}
