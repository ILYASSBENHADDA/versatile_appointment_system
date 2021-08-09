const jwt = require('jsonwebtoken')
const Reservation = require("../models/reservedAppointment")
const Appointment = require("../models/appointment")

/*
     Reserve
*/
exports.reservation = (req, res, next) => {

     const { id_appointment } = req.body

     const token = req.cookies.person_token
     let id_user
     if (token) {
          jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
               if (err) throw err
               id_user = decodedToken.id
          })
     } else {
          return res.json('NOOP')
     }


     new Reservation({
          id_user: id_user,
          id_appointment: id_appointment
     })
     .save()
     .then(data => {

          Appointment.findByIdAndUpdate(id_appointment, {taked: true})
          .then(data => {
               return res.json({
                    data: data,
                    message: 'Appointment Reserved'
               })
          })

          // return res.json({
          //      data: data, 
          //      message: 'Appointment Reserved'
          // })
     })
     
     
}


/*
     Get appointment
*/
exports.getAppointment = (req, res) => {

     const { id_organism } = req.body

     Appointment.find({id_organism: id_organism, taked: false})
     .then(data => {
          return res.json({
               data: data,
          })
     })
     
     
}





















// exports.readTechnician = (req, res) => {
//      Technician.find()
//      .then(data => {
//           return res.json(data)
//      })
// }


// exports.confirmTicket = (req, res) => {
//      const { confirm, id } = req.body
//      console.log(confirm, id)

//      if (confirm === true) {
//           Ticket.findByIdAndUpdate(id, {status: true}).then(data => {
//                Assign.findOneAndUpdate({id_ticket: id}, {is_accepted: true}).then(() => {
//                     return res.json({message: "Ticket closed success"})
//                })
//           })
//      }

//      else if(confirm === false) {
//           Ticket.findByIdAndUpdate(id, {status: null}).then(data => {
//                Assign.findOneAndUpdate({id_ticket: id}, {is_accepted: false}).then(() => {
//                     return res.json({message: "Ticket refused"})
//                })
//           })
//      }     

// }