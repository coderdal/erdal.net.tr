import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
    {
        slug: String,
        title: String,
        content: String,
        tags: Array,
        views: {
            type: Number,
            default: 0
        }
    }, 
    {
        timestamps: true
    }
);

const Topic = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Topic;