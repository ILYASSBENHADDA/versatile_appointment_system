const express = require('express')
const router = express.Router()
const { getReservation } = require('../controllers/cus.controller')


// Get reservations
router.get('/get-reservation', getReservation)



module.exports = router