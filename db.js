const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://bkc:<Cbk@73592>@bkdeveloping.x09co.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
