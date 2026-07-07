import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const res = await mongoose.connect(process.env.DATABASE_URL);
    console.log("connection successful");
  } catch (error) {
    console.error(error);
  }
};

