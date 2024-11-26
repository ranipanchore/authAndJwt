
// authorized user to access some end point to use

// Like: /get endpoint only admin can use to get all users details

import jwt from "jsonwebtoken"

const authorizedPoint = (req,res,next)=>{
//    console.log(process.env.KEY);
try {
    const clientToken = req.header("Auth");
    // console.log(clientToken);
    
    const verifiedToken = jwt.verify(clientToken,process.env.KEY);

    // console.log(req.user); //undefined than assign verified user in req.user
    req.user = verifiedToken;
    // console.log(req.user);
    next() 
} catch (error) {
    res.status(498).json({message:"invalid token"})
}

}
export default authorizedPoint