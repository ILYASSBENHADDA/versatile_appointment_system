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

     const [fname, setFname] = useState('')
     const [lname, setLname] = useState('')
     const [email, setEmail] = useState('')
     const [phone, setPhone] = useState('')
     const [password, setPassword] = useState('')

     const onSubmit = () => {
          api.post('register', {
               last_name: fname,
               first_name: lname,
               email: email,
               phone: phone,
               role: 'person',
               password: password
          })
          .then(resp => alert(resp.data.message))
          .catch((error) => alert(error))
     }

     const onNav = () => {
          navigation.navigate('Screen_1')
     }

     return (
          <>
          <ScrollView>
          <Center flex={1}  style={{ marginTop: 50, marginBottom: 50}}>
               <Stack space={4} w="80%">
                    <Center>
                         {/* HEDING */}
                         <Text>CREATE AN ACCOUNT.</Text>
                    </Center>

                    {/* START FORM */}
                    <Input 
                         placeholder='First name'
                         onChangeText={(val) => setFname(val)}
                    />
                    <Input 
                         placeholder='Last Name'
                         onChangeText={(val) => setLname(val)}
                    />
                    <Input 
                         placeholder='Email'
                         onChangeText={(val) => setEmail(val)}
                    />
                    <Input 
                         placeholder='Phone'
                         onChangeText={(val) => setPhone(val)}
                    />
                    <Input 
                         placeholder='Password'
                         onChangeText={(val) => setPassword(val)}
                    />
                    <Button onPress={()=>{onSubmit()}}>SIGN UP</Button>
                    {/* <Button title="Add Appointment" onPress={() => { onSubmit() }} /> */}
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
