import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const SendResetPasswordMail = ({navigation}) => {
  return (
    <View style={{marginTop:25,backgroundColor:"#ffffff",height:1000,}} >
        <View style={{marginTop:200,alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:34,}}>Email has been sent!</Text>
            <Image 
            style={{height:200, width:200,}}
            source={require('../images/mail.gif')} />

            <TouchableOpacity  onPress={()=> navigation.navigate("Login")}
            style={{width:300,
            height:40,
            marginTop:40,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor:"#86d5f9",
            borderRadius:10,
            }}>
            <Text style={{color:'#ffffff',fontSize:19,fontWeight:'bold'}}>Login</Text>
            </TouchableOpacity> 

        </View>
        <View style={{flexDirection:'row',marginTop:20,justifyContent:'center'}}>
            <Text>Didn't receave the mail? </Text>
          
            <TouchableOpacity onPress={()=> navigation.navigate("ForgotScreen")}>
            <Text style={{color:'#2a55c5'}}>Resend It.</Text>
            </TouchableOpacity>

        </View>
    </View>
  )
}

export default SendResetPasswordMail
