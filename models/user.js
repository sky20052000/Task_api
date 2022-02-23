const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    address:{
        type:String,
        required:true
    },

    parent_user:{
        type:String,
        required:true
    },

   children_user:{
        type:String,
        required:true
    },

   refferal_bonus:{
        type:String,
        
    },

    refferl_code:{
        type:String,
       
    },
});

// creating collection

const User = new mongoose.model("User",userSchema);
module.exports = User;