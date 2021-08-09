const Organism = require('../models/organism')
const Activity = require('../models/activity')
const City = require('../models/city')
const Appointment = require('../models/appointment')


/*
     Add Organism
*/
exports.addOrganism = (req, res) => {
     const { name, director, description, address, id_activity, id_city } = req.body

     new Organism({
          name: name,
          director: director, 
          description: description, 
          address: address, 
          id_activity: id_activity, 
          id_city: id_city
     })
     .save()
     .then(data => {
          return res.json(data)
     })
}


/*
     Get Organism
*/
exports.getOrganism = (req, res) => {
     Organism.find()
     .populate('id_activity id_city')
     .then(data => {
          return res.json(data)
     })
}


/*
     Add Activity
*/
exports.addActivity = (req, res) => {
     const { activity_name } = req.body

     new Activity({
          activity_name
     })
     .save()
     .then(data => {
          return res.json(data)
     })
}


/*
     Get Activity
*/
exports.getActivity = (req, res) => {
     Activity.find()
     .then(data => {
          return res.json(data)
     })
}


/*
     Add City
*/
exports.addCity = (req, res) => {
     const { city_name } = req.body

     new City({
          city_name
     })
     .save()
     .then(data => {
          return res.json(data)
     })
}


/*
     Get City
*/
exports.getCity = (req, res) => {
     City.find()
     .then(data => {
          return res.json(data)
     })
}


/*
     Manage an Appointment
*/
exports.manageAppointment = (req, res) => {
     const { appointment_date, start_hour, end_hour, id_organism } = req.body
     
     // console.log(appointment_date, start_hour, end_hour, id_organism)
     
     let a = Number(start_hour)
     let b = Number(end_hour)
     
     while(a <= b) {

          new Appointment({
               appointment_date: appointment_date,
               hour_loop: a,
               id_organism: id_organism
          })
          .save()
          .then(data => {
               return res.json({
                    data: data, 
                    message: 'Appointment Manadged'
               })
          })

          a += 1 
     }

}