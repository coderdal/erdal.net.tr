import Link from "next/link";

export default function Loading() {
  return (
    <main className="mx-6">
        <h1 className="text-center text-7xl font-extrabold mt-36 animate-bounce">404</h1>
        <p className="text-center font-semibold mb-0 text-lg">We can&apos;t find the page you are looking for.</p>
        <p className="text-center">You&apos;re all alone here.</p>
        <div className="text-center">
          <Link href={"/"} className="bg-gray-700 text-gray-50 px-2 py-1 rounded-md transition-opacity hover:opacity-75">
            Take Me Home
          </Link>
        </div>
        <span className="sr-only">Not found</span>
    </main>
  );
}
