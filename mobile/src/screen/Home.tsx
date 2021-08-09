import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, ScrollView, Pressable } from 'react-native'
import { globalStyles } from '../styles/global';
import api from '../api/api';


function Home({ navigation }) {
     const [organism, setOrganism] = useState([])

     useEffect(() => {
          api.get('get-organism')
          .then(resp => setOrganism(resp.data))
          .catch((error) => alert(error))
     }, [])
     
     const onPress = (idOrganism) => {
          navigation.navigate('Appointment List', {
               idOrganism: idOrganism
          })
     }
     
     return (
          <ScrollView>
          <View style={globalStyles.body}>

               {organism.map((item, key) => (
                    
                    <View key={key} style={globalStyles.card}>
                         <Pressable 
                         onPress={() => { onPress(item._id) }}
                         >
                         <Text style={globalStyles.titleText}>{item.name}</Text>
                         </Pressable>
                    </View>

               ))}
               
          </View>
          </ScrollView>
     )
}

export default Home