import Link from "next/link";
import React from "react";
import { formatDate } from "@/helper";
import type { FetchResult } from "@/types";

async function fetchPosts(): Promise<FetchResult> {
  const res = await fetch(process.env.API_URI + "/posts/last" || "");
 
  if (!res.ok) {
    return {posts: []};
  }
 
  return res.json();
}

const Introduction: React.FC = async () => {
  let {posts}: FetchResult = await fetchPosts();

  posts.forEach(post => {
    post.createdAt = formatDate(post.createdAt, "DD/MM/YYYY");
    post.views = String(post.views).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  });

  return (
    <section className="mt-6">
      <h1 className="font-semibold text-lg mb-2">Last Posts</h1>
      <table className="table-auto w-full text-left text-sm border-spacing-3">
        <thead>
          <tr>
            <th className="py-1">Date</th>
            <th className="py-1">Title</th>
            <th className="py-1">Views</th>
          </tr>
        </thead>
        <tbody>
          {
            posts.map(post => (
              <tr className="cursor-pointer hover:opacity-80 transition-opacity" key={post._id}>
                <td className="py-1"><Link href={`/articles/${post.slug}`} className="block">{ post.createdAt }</Link></td>
                <td className="py-1"><Link href={`/articles/${post.slug}`} className="block">{ post.title }</Link></td>
                <td className="py-1"><Link href={`/articles/${post.slug}`} className="block">{ post.views }</Link></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </section>
  );
};

export default Introduction;
