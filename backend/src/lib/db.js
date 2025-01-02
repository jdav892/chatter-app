import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connection established: ${conn.connection.host}`)
    } catch (error) {
        console.err("MongoDB connection error:", error);
    }
};

