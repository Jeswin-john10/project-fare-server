const users = require('../models/userModel')

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

