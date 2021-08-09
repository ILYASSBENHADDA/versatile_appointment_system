const jwt = require('jsonwebtoken');

exports.isLoggedIn =  (req, res, next) => {
     const token = req.cookies.admin_token || req.cookies.customer_token
     console.log(token)
     if (token) {
          jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
               if (err) throw err
               
               else {
                    next()
               }
          })
     }
     else {
          return res.status(400).json('you\'re not logged in')
     }

}


// Check user role & is auth or not
exports.checkUser = (req, res, next) => {
     const token = req.cookies.admin_token || req.cookies.customer_token
     if (token) {
          jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
               if (err) throw err
               else {
                    decodedToken.role === 'admin'
                         ? res.status(200).json({ role: 'Admin', isAuthenticated: true })
                         : res.status(200).json({ role: 'Customer', isAuthenticated: true })
               }
          })
     }
     else {
          res.status(200).json({ role: '', isAuthenticated: false})
     }
}