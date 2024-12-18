import userModel from "../model/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


const secretKey = process.env.KEY

const userGet = async(req,res) =>{
try {
   const user = await userModel.find();
    // console.log(user);
    // authorized to access user data
    res.status(200).json({message:"User Get!",UserData:user});

} catch (error) {
    res.status(401).json({error:error.message});  
}
    
}
const userRegister = async(req,res)=>{
   try {
    const {email,password,fullname,mobile,role} = req.body;
    console.log({email,password,fullname,mobile,role});

    // password in hash code from bcrypt
    const saltMixture = await bcrypt.genSalt(10)
    const hashCodePassword = await bcrypt.hash(String(password),saltMixture);
    // console.log(hashCodePassword);

    const newUser = new userModel({email,password:hashCodePassword,fullname,mobile,role});
    await newUser.save();
    console.log(newUser)
    // 201: user created successfully request
    res.status(201).json({message:"user created successfully",newUser:newUser});

   } catch (error) {
    // 204 : indicative of a successful request
    res.status(204).json({message:"user did not create",error:error.message});
   }
}
const userLogin = async (req,res) =>{
    try {
        const {email,password} = req.body;
        // console.log(email)
        const user =await userModel.findOne({email});
        // console.log(user);

        // AUTHENTICATE to user with the login details match from database
        if(!user || !(await bcrypt.compare(String (password),user.password))){
            // 401 : unauthorize login
            res.status(401).json({message:"invalid credential"})
        }
        const payload = {_id: user._id , role:user.role};
        console.log(payload)
        // token generate from jwt (json web token) from method of jwt.sign to generate token
        const TOKEN = jwt.sign(payload,secretKey)
        // console.log(TOKEN)
        
        // 200: authorized login its all ok
        res.status(200).json({message:"user logged in successfully",TOKEN, loginUser:user})
    } catch (error) {
        
        res.status(400).json({error:error.message});
    }
}

export {userGet,userRegister,userLogin}