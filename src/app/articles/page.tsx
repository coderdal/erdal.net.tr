import React from "react";
import { formatDate, groupBy } from "@/helper";
import type { PostsFetchResult, DateGrouppedPosts } from "@/types";
import Link from "next/link";

async function fetchPosts(): Promise<PostsFetchResult> {
  const res = await fetch(process.env.API_URI + "/posts" || "");

  if (!res.ok) {
    return {posts: []};
  }

  return res.json();
}

export default async function Articles() {
  let {posts}: PostsFetchResult = await fetchPosts();

  // mutate data
  posts.forEach(post => {
    post.exactCreateTime = formatDate(post.createdAt, "DD/MM/YYYY");
    post.createdAt = formatDate(post.createdAt, "MMMM, YYYY");
    post.views = String(post.views).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });

  // group posts by MMMM/YYYY
  const grouppedPosts: DateGrouppedPosts = Object.entries(groupBy(posts, "createdAt"));

  return (
    <main className="mx-6">
      <h1 className="text-lg font-semibold mb-2 ml-1">Posts</h1>
      <ul className="flex flex-col gap-2">
      {
        grouppedPosts.map(group => (
          <React.Fragment key={group[0]}>
            <p className="ml-1.5 text-xs font-semibold text-gray-500 mt-2 -mb-1.5">{group[0]}</p>
            {
              group[1].map(post => (
                <li key={post._id} className="cursor-pointer bg-slate-50 px-2 py-1 rounded-md transition-all hover:opacity-95 hover:bg-slate-200 hover:text-gray-950 font-semibold">
                  <Link href={"articles/" + post.slug} className="flex items-center justify-between">
                    <span>{post.title}</span>
                    <span className="text-xs text-gray-500">{post.exactCreateTime}</span>
                  </Link>
                </li>
              ))
            }
          </React.Fragment>
        ))
      }
      </ul>
    </main>
  );
}
