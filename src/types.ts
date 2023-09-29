interface Post {
    _id: string;
    slug: string;
    title: string;
    views: number | string;
    content: string;
    tags: Array<string>;
    createdAt: string;
    exactCreateTime: string;
    updatedAt: string;
    __v: number;
}

interface FetchResult {
    posts: Post[];
}

type DateGrouppedPosts = [string, Post[]][];

export type { Post, FetchResult, DateGrouppedPosts };