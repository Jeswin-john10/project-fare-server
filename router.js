// import express
const express = require('express')

//import userController
const userController = require('./controllers/userController');

//instance router
const router = new express.Router()

//Register
router.post('/register', userController.register)

//login
router.post('/login',userController.login)

// Export
module.exports = router