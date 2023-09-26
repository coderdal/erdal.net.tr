import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        slug: String,
        title: String,
        content: String
    }, 
    {
        timestamps: true
    }
);

const Topic = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Topic;