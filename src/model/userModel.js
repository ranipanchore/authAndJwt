import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    fullname:{type:String,required:true},
    mobile:{type:Number,required:true},
    

})

const userModel = mongoose.model("user save",userSchema);

// console.log(userModel);

export default userModel;