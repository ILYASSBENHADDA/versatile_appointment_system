const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Organism Schema
let organismSchema = new Schema({
     name: {type: String, default: ""},
     director: {type: String, default: ""}, 
     description: {type: String, default: ""},
     address: {type: String, default: ""},
     id_activity: {type: Schema.Types.ObjectId, ref: 'Activity'},
     start_date: { type: Date, required: true, default: Date.now },
     id_city: {type: Schema.Types.ObjectId, ref: 'City'}
},
{
     versionKey: false
})


module.exports = mongoose.model('Organism', organismSchema)