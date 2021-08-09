import React, {useContext} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import NotFound from '../pages/404'
import Register from '../pages/admin/Register'
import Organisms from '../pages/admin/Organisms'
import Logout from '../pages/Logout'
import Appointment from '../pages/admin/Appointent'

// Protected Routes
import ProtectedAuthRouter from './ProtectedAuthRouter'
// import ProtectedTechRouter from './ProtectedTechRouter'
// import ProtectedEmpRouter from './ProtectedEmpRouter'

// User Context API
import { UserContext } from "../components/UserContext"
import Reservation from '../pages/customer/Reservation'

function Routes() {
     
     const {role, isAuth} = useContext(UserContext)

     
     return (
          <>
          <Router>
               <Switch>

                    {/* Global Routes */}
                    <Route exact path="/" component={Home}/>
                    <ProtectedAuthRouter path="/login" component={Login} isAuth={isAuth} />
                    <Route exact path="/logout" component={Logout}/>

                    {/* Admin Routes */}
                    <Route path="/add-organism" component={Organisms} isAuth={isAuth} role={role} />
                    <Route path="/register-user" component={Register} isAuth={isAuth} role={role} />
                    <Route path="/appointment-manadger" component={Appointment} isAuth={isAuth} role={role} />

                    {/* Customer Routes */}
                    <Route path="/reservations" component={Reservation} isAuth={isAuth} role={role} />
               
                    <Route exact path="/404" component={NotFound}/>
                    <Redirect to="/404" />
               </Switch>
          </Router>
          </>
     )
}

export default Routes