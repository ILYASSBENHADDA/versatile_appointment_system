import React from 'react'
import { NativeBaseProvider } from 'native-base';
import Auth from './navigation/Auth';
import { UserProvider } from "./components/UserContext"



const App = () => {
     return (
          <NativeBaseProvider>
               <UserProvider>
                    <Auth />
               </UserProvider>
          </NativeBaseProvider>
     )
}

export default App
