import mongoose, { Schema } from "mongoose";

const bookmarkSchema = new Schema(
    {
        image_url: String,
        title: String,
        description: String,
        url: String
    },
    {
        timestamps: true
    }
);

const Bookmark = mongoose.models.Bookmark || mongoose.model("Bookmark", bookmarkSchema);

export default Bookmark;