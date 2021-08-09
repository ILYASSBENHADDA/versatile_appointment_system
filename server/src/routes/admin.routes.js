const express = require('express')
const { addOrganism, addActivity, addCity, getOrganism, getCity, getActivity, manageAppointment } = require('../controllers/admin.controller')
const router = express.Router()

// Admin
router.post('/add-organism', addOrganism)
router.get('/get-organism', getOrganism)

router.post('/add-activity', addActivity)
router.get('/get-activity', getActivity)

router.post('/add-city', addCity)
router.get('/get-city', getCity)

router.post('/manage-appointment', manageAppointment)




module.exports = router