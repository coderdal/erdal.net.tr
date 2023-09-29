import { NextResponse } from "next/server";
import connectDB from "@/app/api/db";
import Post from "@/app/api/models/post";

export async function DELETE(_: Request, {params} : {params: {id: string}}) {
    const { id } = params;

    if (!id || id.length <= 1) {
        return NextResponse.json({error: true, message: "Missing or invalid params."}, {status: 400});
    }

    try {
        await connectDB();
        const result = await Post.findByIdAndDelete(id);

        if (result === null) {
            throw "Error";
        }

        return NextResponse.json({message: "Post successfully deleted."}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: true, message: "Failed to delete post."}, {status: 500});
    }
}

export async function GET(_: Request, {params} : {params: {id: string}}) {
    const { id } = params;

    if (!id || id.length <= 1) {
        return NextResponse.json({error: true, message: "Missing or invalid params."}, {status: 400});
    }

    try {
        await connectDB();
        const post = await Post.find({slug: id}).limit(1);

        if (post === null || post.length <= 0) {
            throw "Error";
        }

        return NextResponse.json({post: post[0]}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: true, message: "Failed to fetch post."}, {status: 500});
    }
}

export async function PUT(request: Request, {params} : {params: {id: string}}) {
    const { id } = params;
    const { title, content, slug } = await request.json();

    if (!id || id.length <= 1) {
        return NextResponse.json({error: true, message: "Missing or invalid params."}, {status: 400});
    }

    const updated_data = {
        ...(title && {title}),
        ...(content && {content}),
        ...(slug && {slug})
    };

    try {
        await connectDB();
        const result = await Post.findByIdAndUpdate(id, updated_data);

        if (result === null) {
            throw "Error";
        }

        return NextResponse.json({message: "Post successfully updated."}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: true, message: "Failed to update post."}, {status: 500});
    }
}