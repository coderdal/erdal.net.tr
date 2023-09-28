import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("db connection");
    console.log(process.env.MONGODB_URI);
    
    await mongoose.connect(process.env.MONGODB_URI || "");
  } catch (error) {
    console.error("An error occurred while database connection", error);
  }
};

export default connectDB;