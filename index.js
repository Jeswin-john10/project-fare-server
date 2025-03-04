// import express
const express = require("express")


// import cors
const cors= require("cors")


// import router
const router = require("./router")

// create server
const pfserver = express()

// use cors
pfserver.use(cors())

// user router
pfserver.use(router)

//parse data
pfserver.use(express.json())

//user router
// pfserver.use(router)

// set port number
const PORT= 4000 || process.env.PORT

// listen
pfserver.listen(PORT, ()=>{
console.log(`server running succesfully on port no ${PORT}`);
})


pfserver.get('/',(req,res)=>{
    res.send('get request received')
})


// pfserver.post('/',(req,res)=>{
//     res.send('post request received')
// })

// pfserver.put('/',(req,res)=>{
//     res.send('put request received')
// })

// pfserver.delete('/',(req,res)=>{
//     res.send('delete request received')
// })