import { NextResponse } from "next/server";
import connectDB from "@/app/api/db";
import Bookmark from "@/app/api/models/bookmark";

export async function POST(request: Request) {
    const { title, description, url, image_url } = await request.json();

    if (!title || !image_url || !url || url.length < 3 || title.length < 3) {
        return NextResponse.json({error: true, message: "Missing or invalid params."}, {status: 400});
    }

    try {
        await connectDB();
        const new_bookmark = await Bookmark.create({title, image_url, description, url});
        return NextResponse.json(new_bookmark, {status: 201});
    } catch (error) {
        return NextResponse.json({error: true, message: "Failed to create bookmark."}, {status: 500});
    }
}

export async function GET() {
    try {
        await connectDB();
        const bookmarks = await Bookmark.find().sort({createdAt: -1});

        return NextResponse.json({bookmarks}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: true, message: "Failed to fetch bookmarks."}, {status: 500});
    }
}