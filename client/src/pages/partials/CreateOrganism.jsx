import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CreateOrganism() {

     const [city, setCity] = useState([])
     const [activity, setActivity] = useState([])
     const [organismInfo, setOrganismInfo] = useState({
          name: '',
          director: '', 
          description: '',
          address: '',
          id_activity: '',
          start_date: '',
          id_city: ''
     })

     useEffect(()=> {
          axios.get('http://localhost:4000/api/get-city').then((response) => {
               setCity(response.data)
          })
          .catch(err => { console.log(err) })
     }, [])
     
     useEffect(()=> {
          axios.get('http://localhost:4000/api/get-activity').then((response) => {
               setActivity(response.data)
          })
          .catch(err => { console.log(err) })
     }, [])

     const addOrganism = () => {
          axios.post('http://localhost:4000/api/add-organism', organismInfo).then((response)=>{
               console.log(response+'Data Inserted!')
          })
          .catch((error) => { console.log(error)})
     }

     // onChange
     const onChange = (e) => {
          setOrganismInfo({...organismInfo, [e.target.name]: e.target.value})
     }

     return (
          <>
          <div className="modal fade" id="createTicket" tabIndex="-1">
               <div className="modal-dialog">
               <div className="modal-content">
                    {/* HEADER BOX */}
                    <div className="modal-header">
                         <h5 className="modal-title" id="exampleModalLabel">Add Organism</h5>
                         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                         </button>
                    </div>
                    {/* BODY BOX */}
                    <div className="modal-body">

                         <form onSubmit={addOrganism}>
                              <div className="form-group">
                                   <label htmlFor="registration_number">Organism Name</label>
                                   <input type="text" className="form-control" name="name" onChange={onChange}/>
                              </div>

                              <div className="form-group">
                                   <label htmlFor="registration_number">Director</label>
                                   <input type="text" className="form-control" name="director" onChange={onChange}/>
                              </div>

                              <div className="form-group">
                                   <label htmlFor="registration_number">Address</label>
                                   <input type="text" className="form-control" name="address" onChange={onChange}/>
                              </div>

                              <div className="form-group">
                                   <label>City</label>
                                   <select className="custom-select" name="id_city" onChange={onChange}>
                                        <option>city...</option>
                                        {city.map((item, key) => (
                                             <>
                                             <option value={item._id}>{item.city_name}</option>
                                             </>
                                        ))}
                                   </select>
                              </div>

                              <div className="form-group">
                                   <label htmlFor="mark">Description</label>
                                   <textarea className="form-control" name="description" onChange={onChange} rows="4"></textarea>
                              </div>


                              <div className="form-group">
                                   <label>Activity</label>
                                   <select className="custom-select" name="id_activity" onChange={onChange}>
                                        <option>activity...</option>
                                        {activity.map((item, key) => (
                                             <>
                                             <option value={item._id}>{item.activity_name}</option>
                                             </>
                                        ))}
                                   </select>
                              </div>

                         
                              <button type="submit" className="btn btn-primary">Add Organism</button>
                         </form>



                    </div>
                    {/* FOOTER BOX*/}
                    <div className="modal-footer">
                         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
               </div>
               </div>
          </div>
          </>
     )
}


export default CreateOrganism