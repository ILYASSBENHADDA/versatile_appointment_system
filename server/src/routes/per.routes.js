const express = require('express')
const router = express.Router()
const { reservation, getAppointment } = require('../controllers/per.controller')


// Reservation action
router.post('/reservation', reservation)
router.post('/get-appointment', getAppointment)


module.exports = router