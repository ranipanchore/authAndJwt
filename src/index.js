import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors"

dotenv.config()
connectDb();


// Configure CORS options
const corsOptions = {
  // origin: 'http://your-frontend-domain.com', // Replace with your frontend's URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Auth'], // Allowed headers
};

// initialized
const expressApp = express();
const port = process.env.PORT;

// important middleware
// Use CORS middleware
expressApp.use(cors(corsOptions));

expressApp.use(bodyParser.json());
expressApp.use("/user",userRoutes);


expressApp.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

