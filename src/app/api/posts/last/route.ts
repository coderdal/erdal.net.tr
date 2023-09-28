import { NextResponse } from "next/server";
import connectDB from "@/app/api/db";
import Post from "@/app/api/models/post";

export async function GET() {
    try {
        await connectDB();
        const posts = await Post.find().limit(10).sort({createdAt: -1});
        return NextResponse.json({posts}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: true, message: "Failed to fetch posts."}, {status: 500});
    }
}