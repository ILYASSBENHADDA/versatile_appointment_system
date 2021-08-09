const mongoose = require('mongoose')
const Schema = mongoose.Schema

// City Schema
let citySchema = new Schema({
     city_name: {type: String, default: ''}
},
{ 
     versionKey: false
})


module.exports = mongoose.model('City', citySchema)