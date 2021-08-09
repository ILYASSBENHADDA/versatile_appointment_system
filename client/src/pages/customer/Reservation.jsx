import React, {useState, useEffect} from "react"
import axios from 'axios'
import Nav from '../partials/Nav'
import Sidebar from "../partials/Sidebar"

function Reservation() {
     const [reservation, setReservation] = useState([])
     
     useEffect(()=> {
          axios.get('http://localhost:4000/api/get-reservation').then(response => {
               setReservation(response.data)
               console.log(response)
          })
     }, [])


     return (
          <>
          <Nav/>
          <div id="wrapper">

          <Sidebar/>

          <div id="page-content-wrapper">
               <div className="container-fluid">
                    <h1>Reservations list</h1>

                    <div className="row">     
                         <table className="table mt-4">
                              {/* Header Table */}
                              <thead className="thead-dark">
                              <tr>
                                   <th>Full Name</th>
                                   <th>Appoitment Time</th>
                                   <th>Confirm</th>
                              </tr>
                              </thead>

                              {/* Body Table */}
                              <tbody>
                              
                              {reservation.map((val, key) => (
                                   <tr key={key}>
                                        <td> {/* val.id_user.first_name + ' ' + val.id_user.first_name */} a</td>
                                        <th>{val.id_appointment.hour_loop}:00</th>
                                        <td>YES or NO</td>
                                   </tr>
                              ))}

                              </tbody>
                         </table>
                    </div>
               </div>
          </div>
          </div>
          </>
     )
}

export default Reservation