const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Activity Schema
let activitySchema = new Schema({
     activity_name: {type: String, default: ''}
},
{ 
     versionKey: false
})


module.exports = mongoose.model('Activity', activitySchema)