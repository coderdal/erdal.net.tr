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

interface Bookmark {
    _id: string;
    image: string;
    title: string;
    description: string;
    image_url: string;
    url: string;
    createdAt: string;
    exactCreateTime: string;
    updatedAt: string;
    __v: number;
}

interface PostsFetchResult {
    posts: Post[];
}
interface PostFetchResult {
    post: Post | null;
}
interface BookmarksFetchResult {
    bookmarks: Bookmark[];
}

type DateGrouppedPosts = [string, Post[]][];

export type { Post, PostsFetchResult, DateGrouppedPosts, PostFetchResult, BookmarksFetchResult, Bookmark };