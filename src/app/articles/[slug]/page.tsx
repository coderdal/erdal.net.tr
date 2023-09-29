import { notFound } from "next/navigation";
import type { PostFetchResult, Post } from "@/types";

async function fetchPost(slug: string): Promise<PostFetchResult> {
  const res = await fetch(process.env.API_URI + "/posts/" + slug || "");

  if (!res.ok) {
    return {post: null};
  }

  return res.json();
}

export default async function Article({ params }: { params: { slug: string } }) {
  let {post}: PostFetchResult = await fetchPost(params.slug);

  if (post === null) {
    return notFound();
  }

  const details: Post = post[0];

  return (
    <main className="mx-6">
      <article>
        article details
        <pre>
          {JSON.stringify(details)}
        </pre>
      </article>
    </main>
  );
}
