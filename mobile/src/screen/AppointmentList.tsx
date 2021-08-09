import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ScrollView, Pressable, Alert } from 'react-native'
import { globalStyles } from '../styles/global';
import api from '../api/api'

const AppointmentList = ({ navigation, route }) => {
     const [appointment, setAppointment] = useState([])
     const { idOrganism } = route.params

     useEffect(() => {
          api.post('get-appointment', { id_organism: idOrganism })
          .then(resp => setAppointment(resp.data.data))
          .catch((error) => alert(error))
     }, [])

     const onPress = (id, time) => {
          Alert.alert(
               "Confirmation your appointment",
               `At ${time}:00`,
               [
                 {
                   text: "Cancel",
                   onPress: () => console.log("Cancel Pressed"),
                   style: "cancel"
                 },
                 { 
                   text: "OK", 
                   onPress: () => {
                         api.post('reservation', { id_appointment: id })
                         .then(resp => navigation.navigate('Home'))
                         .catch((error) => alert(error))
                   }
                 }
               ]
          );
     }

     return (
          <ScrollView>
          <View style={globalStyles.body}>

               {appointment.map((item, key) => (
                    
                    <View key={key} style={globalStyles.card}>
                         <Pressable 
                         onPress={() => { onPress(item._id, item.hour_loop) }}
                         >
                         <Text style={globalStyles.titleText}>{item.hour_loop}:00</Text>
                         </Pressable>
                    </View>

               ))}


              {/* <FlatList 
               data={appointment}
               renderItem={({ item }) => (
                    <>
                    <View key={item.key} style={globalStyles.card}>
                         <Pressable 
                         onPress={() => { onPress(item._id, item.hour_loop) }}
                         >
                         <Text style={globalStyles.titleText}>{item.hour_loop}:00</Text>
                         </Pressable>
                    </View>
                    </>
               )}
               />  */}
               
          </View>
          </ScrollView>
     )
}

export default AppointmentList
