const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Appointement Schema
let appointementSchema = new Schema({
     appointment_date: {type: Date, default: Date.now},
     hour_loop: {type: Number, required: true}, 
     taked: {type: Boolean, default: false},
     id_organism: {type: Schema.Types.ObjectId, ref: 'Organism'}
},
{
     versionKey: false
})


module.exports = mongoose.model('Appointment', appointementSchema)