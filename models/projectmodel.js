const mongoose = require('mongoose')

const projectschema = new mongoose.Schema({
    tittle : {
        required : true,
        type : String
    },
    language : {
        required : true,
        type : String
    },
    github : {
        required : true,
        type : String  
    },
    website : {
        required : true,
        type : String   
    },
    overview : {
        required : true,
        type : String 
    },
    profileimage:{
        required : true,
        type : String 
    },
    userid:{
        required : true,
        type : String 
    }
})


const projects = mongoose.model('projects',projectschema)

module.exports = projects