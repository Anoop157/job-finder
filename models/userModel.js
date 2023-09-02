import mongoose from "mongoose";
import validator from "validator";

//schema
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true,'Name Is Require']
  },
  lastName:{
    type:String,
  },
  email:{
    type:String,
    required:[true,'Email is require'],
    unique:true,
    validate:validator.isEmail
  },
  password:{
    type:String,
    required:[true,'password is require'],
    minlength:[6,'password length should be greater than 6 character'],
  },
  location:{
    type:String,
    default:"india",
  },
},
{timestamps:true}
);

export default mongoose.model('User',userSchema)