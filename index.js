//import dotenv
require('dotenv').config()

//import express
const express = require('express')

//import cors
const cors = require('cors')

//import Router
const router = require('./router')

//import connection
require('./connection')


//create server
const pfServer = express()

//user cors
pfServer.use(cors())

//parse data - Return middleware that only parses json data
pfServer.use(express.json())

//user route
pfServer.use(router)

//set port
const PORT = 4000 || process.env.PORT

//listen
pfServer.listen(PORT, ()=>{
    console.log(`Server is running successfully at PORT ${PORT}`);
})

//to check all the given codes are correct or not
//so we check all four methods get, post, put and delete

pfServer.get('/', (req, res)=>{
    // res.send(`Get Request Recieved`)
    res.send(`Get Request Received`)
} )

// pfServer.post('/', (req, res)=>{
//     res.send(`post Request Recieved`)
// })

// pfServer.put('/' ,(req, res)=>{
//     res.send(`Put Request is Recieved`)
// })

// pfServer.delete('/' ,(req, res)=>{
//     res.send(`Delete Request is Recieved`)
// })