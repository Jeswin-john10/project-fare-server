const jwt = require('jsonwebtoken')

const jwtmiddleware = (req,res,next)=>{
    console.log('inside the jwt middleware');
   const token = req.headers['Authorization'].split(' ')[1]
   console.log(token);
   try {
    const jwtresponse = jwt.verify(token,'secretkey')
    console.log(jwtresponse);
    req.payload = jwtresponse.userid
    next()
   } catch (error) {
    res.status(401).json(`authorization failed due to ${error}` )
   }
}

module.exports =jwtmiddleware