import { NextResponse } from "next/server";
import connectDB from "@/app/api/db";
import Bookmark from "@/app/api/models/bookmark";

export async function DELETE(_: Request, {params} : {params: {id: string}}) {
    const { id } = params;

    if (!id || id.length <= 1) {
        return NextResponse.json({error: true, message: "Missing or invalid params."}, {status: 400});
    }

    try {
        await connectDB();
        const result = await Bookmark.findByIdAndDelete(id);

        if (result === null) {
            throw "Error";
        }

        return NextResponse.json({message: "Bookmark successfully deleted."}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: true, message: "Failed to delete bookmark."}, {status: 500});
    }
}

export async function PUT(request: Request, {params} : {params: {id: string}}) {
    const { id } = params;
    const { title, description, url, image_url } = await request.json();

    if (!id || id.length <= 1) {
        return NextResponse.json({error: true, message: "Missing or invalid params."}, {status: 400});
    }

    const updated_data = {
        ...(title && {title}),
        ...(description && {description}),
        ...(url && {url}),
        ...(image_url && {image_url})
    };

    try {
        await connectDB();
        const result = await Bookmark.findByIdAndUpdate(id, updated_data);

        if (result === null) {
            throw "Error";
        }

        return NextResponse.json({message: "Bookmark successfully updated."}, {status: 200});
    } catch (error) {
        return NextResponse.json({error: true, message: "Failed to update bookmark."}, {status: 500});
    }
}