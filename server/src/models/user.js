const mongoose = require('mongoose')
const Schema = mongoose.Schema

// User Schema
let userSchema = new Schema({
     first_name: {type: String, default: ""},
     last_name: {type: String, default: ""},
     id_organism: {type: Schema.Types.ObjectId, ref: 'Organism'},
     role: {type: String, required: true},
     email: {type: String, default: ""},
     phone: {type: String},
     password: {type: String, required: true}
},
{ 
     versionKey: false
})


module.exports = mongoose.model('User', userSchema)