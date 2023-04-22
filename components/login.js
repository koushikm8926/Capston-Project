import React, {useState, useEffect} from "react";
import { styles } from "../styles/login style";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { 
    View, 
    Text,
    TouchableOpacity, 
    StyleSheet, 
    Image, 
    SafeAreaView ,
    TextInput} from "react-native";
import { Ambulance } from "../images/images";
import {firebase} from '../Database/firebase';
import { useRecoilState } from "recoil";
import { emailVerificationSent } from "../Recoil/GlobalVariables";


export default function Login({navigation}){
    return(
    <SafeAreaView style={{flex:1,}}>   
        <View style={{marginHorizontal:25, }}>
        
        <View style={{alignItems:"center"}}>    
        <Image  style={{width: 300, height: 300}} source={Ambulance} />
        </View> 

        <Text style={styles.loginText}>Login</Text>

        <View style={styles.inputview}>
        <MaterialIcons name="email" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput placeholder="Email" style={styles.TextInput} keyboardType="email-address"/>    
        </View>

        <View style={styles.inputview}>
        <Ionicons name="ios-lock-closed" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput placeholder="Password" style={styles.TextInput}  secureTextEntry={true} />
        <TouchableOpacity onPress={()=>{navigation.navigate("Forgot")}}>
        <Text style={{fontWeight:"700", color:"#42DAFF"}}>Forgot?</Text>
        </TouchableOpacity>   
        </View>

        <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.loginButton}>
        <Text style={styles.loginbuttonText}>Login</Text>
        </TouchableOpacity>  

        <Text style={{ textAlign: "center", marginBottom: 30 }}>Or</Text>

        <View style={styles.lastview}>
        <Text>New to the app?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register} >Register</Text>
        </TouchableOpacity>
        </View>

    </View>
    </SafeAreaView>
  );
}
