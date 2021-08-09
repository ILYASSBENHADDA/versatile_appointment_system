import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from '../partials/Sidebar'
import Nav from '../partials/Nav'

function Appointment() {

     const [appointmentInfo, setAppointmentInfo] = useState({
          appointment_date: '',
          start_hour: '',
          end_hour: '',
          id_organism: '',
     })

     const [message, setMessage] = useState('')
     const [organism, setOrganism] = useState([])

     useEffect(()=> {
          axios.get('http://localhost:4000/api/get-organism').then((response) => {
               setOrganism(response.data)
          })
          .catch(err => { console.log(err) })
     }, [])

     const manage = (e) => {
          e.preventDefault()
          axios.post('http://localhost:4000/api/manage-appointment', appointmentInfo).then((response) => {
               setMessage(response.data.message)
               console.log(response)
               // Reload page
               // setTimeout(()=> { window.location.reload() }, 1000)
          })
          .catch((err) => { console.log(err)})
     }

     // onChange
     const onChange = (e) => {
          setAppointmentInfo({...appointmentInfo, [e.target.name]: e.target.value})
     }

     return (
          <>
          <Nav/>
          <div id="wrapper">

          <Sidebar/>

          <div id="page-content-wrapper">
               <div className="container-fluid">
                    <div className="row justify-content-center">
                         <div className="col-lg-6">
                              <h1>Manage an appointment </h1>
               
                              {/* FORM */}
                              <form onSubmit={manage}>

                                   <div className="form-group">
                                        <label>Organism</label><br/>
                                        <select className="custom-select" name="id_organism" onChange={onChange}>
                                             <option>Organism...</option>

                                             {organism.map((item, key) => (
                                                  <>
                                                       <option value={item._id}>{item.name}</option>
                                                  </>
                                             ))}

                                        </select>
                                   </div> 

                                   <div className="form-group">
                                        <label>Appointment Date</label>
                                        <input type="date" className="form-control" name="appointment_date" onChange={onChange} />
                                   </div>

                                   <div className="form-group">
                                        <label>Start Hour</label>
                                        <select className="custom-select" name="start_hour" onChange={onChange}>
                                             <option>00:00...</option>
                                             <option value='9'>09:00</option>
                                             <option value='10'>10:00</option>
                                             <option value='11'>11:00</option>
                                             <option value='12'>12:00</option>
                                             <option value='13'>13:00</option>
                                             <option value='14'>14:00</option>
                                             <option value='15'>15:00</option>
                                             <option value='16'>16:00</option>
                                             <option value='17'>17:00</option>
                                             <option value='18'>18:00</option>
                                        </select>
                                   </div>

                                   <div className="form-group">
                                        <label>End Hour</label>
                                        <select className="custom-select" name="end_hour" onChange={onChange}>
                                             <option>00:00...</option>
                                             <option value='9'>09:00</option>
                                             <option value='10'>10:00</option>
                                             <option value='11'>11:00</option>
                                             <option value='12'>12:00</option>
                                             <option value='13'>13:00</option>
                                             <option value='14'>14:00</option>
                                             <option value='15'>15:00</option>
                                             <option value='16'>16:00</option>
                                             <option value='17'>17:00</option>
                                             <option value='18'>18:00</option>
                                        </select>
                                   </div>


                                   <button className="btn btn-primary">Manage</button>
                              </form>
                              {/* ALERT */}
                              {message !== '' ? <h4 className="alert alert-primary mt-4"> {message} </h4> : null }

                         </div>
                    </div>




               </div>
          </div>
          </div>
          </>
     )
}


export default Appointment