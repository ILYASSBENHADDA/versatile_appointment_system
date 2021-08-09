import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Signup from '../screen/Signup';
import Signin from '../screen/Signin';
import Home from '../screen/Home';

import { UserContext } from "../components/UserContext"
import AppointmentList from '../screen/AppointmentList';


const Stack = createStackNavigator()

const Auth = () => {

     const {role, isAuth} = useContext(UserContext)

     return (
          <NavigationContainer>
               <Stack.Navigator
                    // screenOptions={{
                    //      header: () => null
                    // }}
               >
                    
                    <Stack.Screen
                         name='Screen_1'
                         component={Signin}
                         options={{
                              header: () => null
                         }}
                    />
                    
                    <Stack.Screen
                         name='Screen_2'
                         component={Signup}
                         options={{
                              header: () => null
                         }}
                    />

                    <Stack.Screen
                         name='Home'
                         component={Home}
                    />

                    <Stack.Screen
                         name='Appointment List'
                         component={AppointmentList}
                    />
                    

               </Stack.Navigator>
          </NavigationContainer>
     )
}

export default Auth
