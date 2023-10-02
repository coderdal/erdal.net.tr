import React from "react";
import type { BookmarksFetchResult } from "@/types";
import Card from "@/components/Bookmarks/Card";

async function fetchBookmarks(): Promise<BookmarksFetchResult> {
  const res = await fetch(process.env.API_URI + "/bookmarks" || "");

  if (!res.ok) {
    return {bookmarks: []};
  }

  return res.json();
}

export default async function Articles() {
  let { bookmarks }: BookmarksFetchResult = await fetchBookmarks();

  return (
    <main className="mx-6">
      <h1 className="text-lg font-semibold mb-2 ml-1">Bookmarks</h1>
      <section className="flex flex-wrap gap-2 max-lg:justify-center">
      {
        bookmarks.map(bookmark => (
          <Card bookmark={bookmark} key={bookmark._id} />
        ))
      }
      </section>
    </main>
  );
}
