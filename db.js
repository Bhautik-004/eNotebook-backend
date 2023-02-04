const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://bkc:bhautik004@bkdeveloping.x09co.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;