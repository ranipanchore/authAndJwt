import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const mongo_url = process.env.MONGO_URL


const connectDb = () =>{
    // console.log(mongo_url);
    const connection = mongoose.connect(mongo_url).then(()=>{
        console.log("Database connected successfully");
    }).catch((err)=>{
        console.log(err);
    })
}


export default connectDb;