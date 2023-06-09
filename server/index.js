import express  from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/users.js"
import hotelRoute from "./routes/hotels.js"
import roomRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
dotenv.config();

const connect = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to DB!")
    } catch (error) {
        throw error;
    }
};


//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

app.use((err, req, res, next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went Wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


app.listen(8800, ()=>{
    connect()
    console.log("connected to backend!")
}); 