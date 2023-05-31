import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        unique:true,
        sparse: true 
    },
    useremail:{
        type: String,
        require: true,
        unique:true,
        sparse: true,
    },
    password:{
        type: String,
        require: true,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
},
{ timestamps: true}
);

export default mongoose.model("User", UserSchema);