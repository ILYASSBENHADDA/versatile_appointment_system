const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/user')

// Create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id, role) => {
     return jwt.sign({ id, role }, process.env.JWT_SECRET, {
          expiresIn: maxAge
     })
}



/*
* Register Customer & Admin
*/
exports.register = (req, res) => {
     const { first_name, last_name, id_organism, role, email, phone, password } = req.body
     const HashPass = bcrypt.hashSync(password, 5)

     // Register Customer
     if (role === 'customer') {
          User.findOne({email: email}).then(data => {
               if(data) {
                    return res.json({message: 'Email already exist'})
               }
     
               new User({
                    first_name: first_name,
                    last_name: last_name,
                    id_organism: id_organism,
                    role: role,
                    email: email,
                    phone: phone,
                    password: HashPass
               })
               .save()
               .then(data => {
                    return res.json({data: data, message: "Customer created success"})
               })
               
          }).catch(function(err) {console.log(err)})
     }

     else if(role === 'admin') {
          new User({
               first_name: first_name,
               last_name: last_name,
               role: role,
               email: email, 
               password: HashPass
          }).save()
          .then(data => {
               res.json({data: data, message: "Admin created success"})
          })
     }

     else if(role === 'person') {
          new User({
               first_name: first_name,
               last_name: last_name,
               role: role,
               email: email,
               phone: phone,
               password: HashPass
          }).save()
          .then(data => {
               res.json({data: data, message: "Person created success"})
          })
     }

     else {
          return res.json({message: "Please choose the role."})
     }
     
     
}


/*
* Login
*/
exports.login = (req, res) => {
     const { email, password } = req.body

     // User.findOne({email: email}).then(admin => {
     //      if(!admin) {
     //           User.findOne({email: email}).then(customer => {
     //                if(!customer) {
     //                     return res.json({message: 'Email or password incorrect'})
     //                }

     //                if(!bcrypt.compareSync(password, customer.password)) {
     //                     return res.json({message: 'Email or password incorrect'})
     //                }

     //                // Setup Token in Cookie
     //                const role = customer.role
     //                const token = createToken(customer._id, role)
     //                return res.status(200).cookie('customer_token', token, {
     //                     httpOnly: true,
     //                     maxAge: maxAge * 1000
     //                }).json({message: 'You\'re LoggedIn as customer'})
     //           }).catch((err) => {console.log(err)})
     //      }

     //      if(!bcrypt.compareSync(password, admin.password)) {
     //           return res.json({message: 'Email or password incorrect'})
     //      }

     //      // Setup Token in Cookie
     //      const role = admin.role
     //      const token = createToken(admin._id, role)
     //      return res.status(200).cookie('admin_token', token, {
     //           httpOnly: true,
     //           maxAge: maxAge * 1000
     //      }).json({message: 'You\'re LoggedIn as Admin'})
     // }).catch((err) => {console.log(err)})
     User.findOne({email: email}).then(user => {
          if(!user) {
               return res.json({message: 'Email or password incorrect'})
          }

          else if(user.role === 'admin') {
               if(!bcrypt.compareSync(password, user.password)) {
                    return res.json({message: 'Email or password incorrect'})
               }
     
               // Setup Token in Cookie
               const role = user.role
               const token = createToken(user._id, role)
               return res.status(200).cookie('admin_token', token, {
                    httpOnly: true,
                    maxAge: maxAge * 1000
               }).json({message: 'You\'re LoggedIn as Admin'})
          }

          else if(user.role === 'customer') {
               if(!bcrypt.compareSync(password, user.password)) {
                    return res.json({message: 'Email or password incorrect'})
               }
     
               // Setup Token in Cookie
               const role = user.role
               const token = createToken(user._id, role)
               return res.status(200).cookie('customer_token', token, {
                    httpOnly: true,
                    maxAge: maxAge * 1000
               }).json({message: 'You\'re LoggedIn as Customer'})
          }

          else if(user.role === 'person') {
               if(!bcrypt.compareSync(password, user.password)) {
                    return res.json({message: 'Email or password incorrect', sign: 'no'})
               }
     
               // Setup Token in Cookie
               const role = user.role
               const token = createToken(user._id, role)
               return res.status(200).cookie('person_token', token, {
                    httpOnly: true,
                    maxAge: maxAge * 1000
               }).json({message: 'You\'re LoggedIn as Person', sign: 'ok'})
          }

          
     }).catch((err) => {console.log(err)})
}

/* 
* Logout
*/
exports.logout = (req, res) => {
     res.clearCookie('admin_token')
     res.clearCookie('technician_token')
     res.clearCookie('customer_token')

     // res.cookie('customer_token', '', { maxAge: 1 })
     // res.cookie('admin_token', '', { maxAge: 1 })
     // res.cookie('technician_token', '', { maxAge: 1 })
     res.redirect('/')
 }