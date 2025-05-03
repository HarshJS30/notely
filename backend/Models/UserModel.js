const mongoose=require('mongoose');
const bcyrpt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required: [true, "Your email is required"],
        unique:true
    },
    username: {
        type: String,
        required: [false, "Your username is required"],
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
})
UserSchema.pre("save",async function(){
    this.password=await bcyrpt.hash(this.password,12)
});
module.exports=mongoose.model("User",UserSchema)