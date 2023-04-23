import { StyleSheet, Text, View,TextInput ,Image} from 'react-native'
import React, { useState } from 'react'
import {firebase} from '../Database/firebase';
import { TouchableOpacity } from 'react-native';
import { ForgotPasswordScreenGif } from '../images/images';

const ForgotScreen = ({navigation}) => {

    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
    const forgetPassword= ()=>{
        firebase.auth().sendPasswordResetEmail(email)
        .then(()=>{
            // alert("Passsword  Reset Mail Sent To Your Registered Mail Id")
            navigation.navigate("SendResetPasswordMail")
        }
        )
        .catch((error)=>{
            alert(error)
        })
    }

  return (
    <View style={{backgroundColor:'#ffffff', height:1000,}}>
        <View style={{alignItems:'center',marginTop:25,}}>
            <Image style={{height:300, width:300,}} source={ForgotPasswordScreenGif} />
            <Text style={{color:'#1c386c', fontSize:34,fontWeight:'bold', }}>Reset Password</Text>
            <Text style={{textAlign:'center', marginTop:15,}}>To reset your password, enter the email address you use to sign in to the application.</Text>
        </View>

    <View style={{marginTop:50,alignItems:'center', }}>
        <TextInput 
        onChangeText={(email)=>setEmail(email) }
        placeholder='Enter Your Register Mail Id' 
        keyboardType="email-address"
        textContentType="emailAddress"
        autoCompleteType="email"
        style={{width:300,backgroundColor:'#afc1df',alignItems:'center',height:50,borderRadius:10,}}
        ></TextInput>
       
    </View>
    <View style={{marginTop:20,alignItems:'center',justifyContent: 'center',}}>
    <TouchableOpacity 
    onPress={()=>{forgetPassword()}}
    style={{backgroundColor:'#4264d8', width:300,height:40,alignItems:'center', borderRadius:10,justifyContent: 'center',}}><Text style={{color:"white"}}>SEND PASSWORD RESET LINK</Text></TouchableOpacity>
    </View>

    </View>
  )
}

export default ForgotScreen;
