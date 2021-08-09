import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from "../../components/UserContext"


function Sidebar() {

     const {role} = useContext(UserContext)

     return (
          <>
          <div id="sidebar-wrapper">
               <ul className="sidebar-nav">
                    <li className="sidebar-brand">
                         <Link to="/"> Appointement System </Link>
                    </li>
                    
                    {/* { role === 'Employee' ? 
                    <> */}
                    <li>
                         <Link to="/add-organism">Add Organism</Link> 
                    </li>
                    <li>
                         <Link to="/register-user">Register user</Link> 
                    </li>
                    <li>
                         <Link to="/appointment-manadger">Appointment Manadger</Link>
                    </li>
                    <li>
                         <Link to="/reservations">Reservation</Link>
                    </li>
               </ul>
          </div>
          </>
     )
}


export default Sidebar