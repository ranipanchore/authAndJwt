import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";

import cors from "cors"

dotenv.config();
connectDb();
const corsOptions = {
    methods:['GET','POST','PUT','DELETE'], //ALLOWED HTTP METHODS
    allowedHeaders:['Content-Type', 'Auth'] //allow headers
}


// initialized
const expressApp = express();
const port = process.env.PORT;

// important middleware
expressApp.use(cors(corsOptions));
expressApp.use(bodyParser.json());
expressApp.use("/user",userRoutes);
expressApp.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

