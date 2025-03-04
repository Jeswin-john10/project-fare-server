//import monggose
const mongoose = require('mongoose')


// connnection string
connectionString=process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log(`mongo db run successfully`);
    
}).catch((err)=>{
    console.log(`mongo db error due to ${err}`);
    
})