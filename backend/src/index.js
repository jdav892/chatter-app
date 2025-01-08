import express from "express";
import authRoutes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";
import dotenv from "dotenv"; 
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";  
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
   origin:"http://localhost:8080",
   credentials: true,
   })
);

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
   console.log(`Server is running on ${PORT}`);
   connectDB(); 
});