const User = require("../models/user");
const validator = require("validator");
const userController = {
register:async(req,res)=>{
    try{
       console.log(req.body);
       const {name, email, address, parent_user, children_user,refferal_bonus, refferal_code} = req.body;
       //Finding user's email.
       const validate = validator.isEmail(email);
       if(!validate){
           return res.status(400).json({msg:"Email is not valid"});
       }
       const user = await User.findOne({email});
       if(user){
           return res.status(400).json({msg:"Email already exists"});
       }

       const newUser = new User({
           name:name,
           email:email,
           address:address,
           parent_user:parent_user,
           children_user:children_user,
            refferal_bonus:refferal_bonus,
            refferal_code:refferal_code
       })
       await newUser.save();
       return res.status(201).json({msg:"Registerd Successfully"});
    }catch(err){
     return res.status(500).json({msg:err.message});
    }
},

// getUser
getUser:async(req,res)=>{
     try{
       console.log(req.body);
       const user = await User.find();
       if (!user) {
           return res.status(400).json({ msg: "user does not exist" });
       }
       res.status(200).json(user);
     }catch(err){
         return res.status(500).json({msg:err.message});
     }
},
}

module.exports = userController;