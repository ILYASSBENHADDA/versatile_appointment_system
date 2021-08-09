import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
     },
     titleText: {
          fontFamily: 'nunoto-bold',
          fontWeight: 'bold',
          fontSize: 20,
     },
     iconBlock: {
          width: 150,
          height: 150,
          borderRadius: 100,
          borderWidth: 5,
          //borderColor:'black',
          padding: 37,
          marginTop: 20,
          marginBottom: 20
     },
     icon : {
          textAlign: 'center',
          fontSize: 54,
     },
     input: {
          width: '90%',
          height: 40,
          // borderWidth: .7,
          // borderBottomWidth: 1,
          // marginBottom: 30,
          color: '#fff',
          textAlign: 'center',
          backgroundColor: '#2196f3'

     },
     body: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'space-evenly'
     },
     card: {
          width: '40%',
          height: 100,
          borderWidth: 3,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10
     },
     btnInput: {
          width: '90%',
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
          borderBottomWidth: 1,
          borderWidth: 0
     }
})