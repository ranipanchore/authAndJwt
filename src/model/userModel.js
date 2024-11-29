import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    fullname:{type:String,required:true},
    mobile:{type:Number,required:true},
    role:{type:String,default:'user',enum:['admin','user']}

})
console.log(userSchema);
const userModel = mongoose.model("user",userSchema);

console.log(userModel);

export default userModel;