import React, { useState } from 'react'
import { ScrollView, Pressable } from 'react-native'
import {  
  Stack,
  Input,
  Button, 
  Center, 
  Text
   
} from 'native-base';
import api from '../api/api';


const Signup = ({ navigation }) => {

     const [email, setEmail] = useState('')
     const [password, setPassword] = useState('')

     const onSubmit = () => {
          api.post('login', {
               email: email,
               password: password
          })
          .then(resp => {
               if (resp.data.sign === 'ok') {
                    navigation.navigate('Home')
               } else {
                    alert(resp.data.message)
               }
          })
          .catch((error) => alert(error))
     }

     const onNav = () => {
          navigation.navigate('Screen_2')
     }

     return (
          <>
          <ScrollView>
          <Center flex={1}  style={{ marginTop: 180, marginBottom: 50}}>
               <Stack space={4} w="80%">
                    <Center>
                         {/* HEDING */}
                         <Text>SIGN IN.</Text>
                    </Center>

                    {/* START FORM */}
                    <Input 
                         placeholder='Email'
                         onChangeText={(val) => setEmail(val)}
                    />
                    <Input 
                         placeholder='Password'
                         onChangeText={(val) => setPassword(val)}
                    />
                    <Button onPress={()=>{onSubmit()}}>SIGN IN</Button>
                    {/* END FORM */}

                    <Pressable onPress={onNav}>
                         <Text>
                              You don't have account, Sign up
                         </Text>
                    </Pressable>
               </Stack>
          </Center>
          </ScrollView>
          </>
     )
}

export default Signup
