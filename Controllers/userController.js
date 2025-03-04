// register
exports.register=(req,res)=>{
    console.log('inside register controller');
    //logic
const {username , password , email} = req.Body
 console.log(`${username} ${password} ${email}`);
 res.end()
 
}