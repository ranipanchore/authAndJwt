
// authorized user to access some end point to use

// Like: /get endpoint only admin can use to get all users details

import jwt from "jsonwebtoken"
import dotenv from 'dotenv';
import userModel from "../model/userModel.js";

dotenv.config()

const authorizedPoint =async (req,res,next)=>{
//    console.log("hello");
try {
    const clientToken = req.header("Auth");
     console.log(clientToken);
    
    const verifiedToken = jwt.verify(clientToken,process.env.KEY);
    console.log(verifiedToken);
    // const user = await userModel.findOne({verifiedToken});

    // console.log(req.user); //undefined than assign verified user in req.user
    req.user = verifiedToken;
    console.log(req.user);
    console.log(req.user.id);
    next() 
} catch (error) {
    res.status(498).json({message:"invalid token"})
}

}
export default authorizedPoint