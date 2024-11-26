import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:{type:String,unique:true,required:true},
    password:{type:String},
    fullname:{type:String},
    mobile:{type:String},
    

})

const userModel = mongoose.model("user save",userSchema);

// console.log(userModel);

export default userModel;