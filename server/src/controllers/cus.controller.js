const Reservation = require('../models/reservedAppointment')

const jwt = require('jsonwebtoken')


exports.getReservation = (req, res) => {
     Reservation.find()
     .populate('id_user id_appointment')
     .sort({"_id": -1})
     .then(data => {
          return res.json(data)
     })
}







exports.createTicket = (req, res) => {
     const { title, type, description, emergency } = req.body
     console.log(title, type, description, emergency)
     
     //Get Employee ID
     let id_employee
     const token = req.cookies.employee_token
     if (token) {
          jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
               if (err) throw err
               id_employee = decodedToken.id
          })
     } else {
          return res.json('NOOP')
     }
     
     new Ticket({
          id_employee: id_employee,
          title: title,
          type: type,
          description: description,
          emergency: emergency,
     }).save()
     .then(data => {
          res.json({data: data, message: "Good req"})
     })
}


exports.readTicket = (req, res) => {
     Ticket.find().populate('id_employee').sort({"_id": -1}).then(data => {
          return res.json(data)
     })
}


exports.deleteTicket = (req, res) => {
     const { id } = req.params
     Ticket.findByIdAndRemove(id, (err) => {
          if (err) throw err
          res.status(200).send('Data Deleted!')
     })
}