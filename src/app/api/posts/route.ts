import { NextResponse } from "next/server";
import connectDB from "@/app/api/db";
import Post from "@/app/api/models/post";
import { slugify } from "@/app/api/helper";

export async function POST(request: Request) {
    const { title, content } = await request.json();
    if (!title || !content || title.length < 3 || content.length < 3) {
        return NextResponse.json({error: true, message: "Missing or invalid params."}, {status: 400});
    }

    const slug = slugify(title);

    try {
        await connectDB();
        const new_post = await Post.create({slug, title, content});
        return NextResponse.json(new_post, {status: 201});
    } catch (error) {
        return NextResponse.json({error: true, message: "Failed to create post."}, {status: 500});
    }
}

export async function GET() {
    try {
        await connectDB();
        const posts = await Post.find().sort({createdAt: -1});
        return NextResponse.json({posts}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: true, message: "Failed to fetch posts."}, {status: 500});
    }
}