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

  return (
    <main className="mx-6">
      <article>
        <h1 className="text-2xl font-bold mb-2">{ post.title }</h1>
        <section dangerouslySetInnerHTML={{ __html: post.content }}></section>
      </article>
    </main>
  );
}
