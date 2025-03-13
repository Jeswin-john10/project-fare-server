const users = require('../models/userModel')
 const jwt = require('jsonwebtoken')
//Register
exports.register = async (req, res)=>{
    console.log(`Inside Register Controller`);
    
    //logic
    const {username, email, password} = req.body
    console.log(username, email, password);

    try {
        //find existing users
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json(`User already Exists...!`)
        }else{
            const newUser = new users({
                username,
                email,
                password,
                profile : "",
                github : "",
                linkedin : ""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (error){
        res.status(401).json(error)
    }
}

//login
exports.login = async(req , res) =>{
    const {email , password} = req.body
    console.log(email ,password);
  try {
    const existinguser = await users.findOne({email , password})
    if(existinguser){
        const token = jwt.sign({userid : existinguser._id},"secretkey")
        res.status(200).json({existinguser , token})
    }else{
        res.status(406).json('incorrect email or password')
    }
  } catch (error) {
    res.status(401).json(error)
  }
}