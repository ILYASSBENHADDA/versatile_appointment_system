import React, {useState, useEffect} from "react"
import axios from 'axios'
import Nav from '../partials/Nav'
import Sidebar from "../partials/Sidebar"
import CreateOrganism from "../partials/CreateOrganism"

function Organisms() {
     const [organism, setOrganism] = useState([])
     
     useEffect(()=> {
          axios.get('http://localhost:4000/api/get-organism').then(response => {
               setOrganism(response.data)
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
                    <h1>Organisms list</h1>
                    {/* Create New Ticket */}
                    <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#createTicket"> Create New </button>
                    <CreateOrganism/>

                    <div className="row">     
                         <table className="table mt-4">
                              {/* Header Table */}
                              <thead className="thead-dark">
                              <tr>
                                   <th>Start Date</th>
                                   <th>Name</th>
                                   <th>Director</th>
                                   <th>Address</th>
                                   <th>Activity</th>
                                   <th>City</th>
                              </tr>
                              </thead>

                              {/* Body Table */}
                              <tbody>

                              {organism.map((val, key) => (
                                   <tr key={key}>
                                        <td>{val.start_date}</td>
                                        <th>{val.name}</th>
                                        <td>{val.director}</td>
                                        <td>{val.address}</td>
                                        <td>{val.id_activity.activity_name}</td>
                                        <td>{val.id_city.city_name}</td>
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

export default Organisms