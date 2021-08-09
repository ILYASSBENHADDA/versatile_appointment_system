const mongoose = require('mongoose')
const Schema = mongoose.Schema

// ReservedAppointment Schema
let reservedAppointmentSchema = new Schema({
     id_user: {type: Schema.Types.ObjectId, ref: 'User'},
     id_appointment: {type: Schema.Types.ObjectId, ref: 'Appointment'},
     valid: {type: Boolean, default: null},
     respected: {type: String, default: ""},

},
{ 
     versionKey: false
})


module.exports = mongoose.model('ReservedAppointment', reservedAppointmentSchema)