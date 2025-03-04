//import express
const express =require('express')

const userController=require('./Controllers/userController')


//instance router
const router = new express.Router()

//register
router.post('/register',userController.register)

// export
module.exports = router
