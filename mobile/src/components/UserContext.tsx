import React, { createContext, useState, useEffect } from 'react'
import api from '../api/api'

export const UserContext = createContext(null)


export function UserProvider({ children }) {

     const [isAuth, setIsAuth] = useState(false)
     const [role, setRole] = useState('')

     useEffect(()=> {
          api.get('').then((response) => {
               console.log(response.data)
               setIsAuth(response.data.isAuthenticated)
               setRole(response.data.role)
          })
          .catch(err => { console.log(err) })
     }, [])


     return (
          <>
               <UserContext.Provider value={{isAuth: isAuth, role: role}}>
                    {children}
               </UserContext.Provider>
          </>
     )
}