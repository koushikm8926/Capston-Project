import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const SuccessfullyBooked = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#ffffff', height:1000,}}>
        
        <View style={{marginTop:25,}}>
          <Image style={{marginTop:25,}} source={require('../images/paymentdone.gif')}/>
          <Text style={{textAlign:'center',marginTop:15,fontSize:34,color:'#12d76e',fontWeight:'bold'}}>Thank You</Text>
        </View>

        <View style={{alignItems:'center',marginTop:15,}}>
          <Text style={{textAlign:'center',fontSize:22,}}>Payment done successfully</Text>
        </View>

        <View style={{alignItems:'center',marginTop:25,}}>
            <Text style={{fontSize:17,}}>You will be redirected to home page shortly</Text>
            <Text  style={{fontSize:17,}}>or click here to return to home page</Text>
        </View>

        <View style={{alignItems:'center',marginTop:25,}}>
            <TouchableOpacity 
            onPress={()=> navigation.navigate("Onboard")}
            style={{backgroundColor:"#12d76e",alignItems:'center', width:250,height:40, 
            borderRadius:10, justifyContent: 'center',
            }}>
            <Text style={{fontSize:17,color:'white', fontWeight:'bold',}}>Home</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default SuccessfullyBooked

