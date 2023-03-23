import React from "react";
import { 
     View, 
     Text,
     TouchableOpacity, 
     StyleSheet, 
     Image, 
     SafeAreaView ,
     TextInput} from "react-native";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";


export default function Login({navigation}){
    return(
    <SafeAreaView style={{flex:1,justifyContent:"center",}}>   
     <View style={{marginHorizontal:25}}>
        <View style={{alignItems:"center"}}>    
            <Image  style={{width: 300, height: 300}} source={require('../images/Ambulance.png')} />
        </View> 
            <Text style={{fontSize:28,fontWeight:"500", marginBottom:30,}}>Login</Text>
        <View style={{
            flexDirection:"row",
            borderBottomColor:"#ccc",
            borderBottomWidth:1,
            paddingBottom:8,
            marginBottom:25,
             }}>
            <MaterialIcons name="email" size={20} color="blue" style={{marginRight:10,padding:5,}}></MaterialIcons>
            <TextInput placeholder="Email" style={{paddingVertical:0,flex:1,}} keyboardType="email-address"></TextInput>      
        </View>
        <View style={{
            flexDirection:"row",
            borderBottomColor:"#ccc",
            borderBottomWidth:1,
            paddingBottom:8,
            marginBottom:25,
             }}>
            <Ionicons name="ios-lock-closed-outline" size={20} color="blue" style={{marginRight:10,padding:5,}}></Ionicons>
            <TextInput placeholder="Password" style={{paddingVertical:0,flex:1,}}  secureTextEntry={true} />
            <TouchableOpacity onPress={()=>{}}>
            <Text style={{fontWeight:"700", color:"#42DAFF"}}>Forgot?</Text>
            </TouchableOpacity>   
        </View>
        <TouchableOpacity onPress={()=>{}} style={styles.loginButton}>
                <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>      
        <Text style={{textAlign:"center", marginBottom:30,}}>Or</Text>       
        
        
        <View style={{flexDirection:"row", justifyContent:"center", marginBottom:30,}}>
        <Text>New to the app?</Text>


        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.register}  >Register</Text>
        </TouchableOpacity>

        </View>
    </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    
    loginButton:{
         backgroundColor:"#42DAFF",
         height:50 , 
         color:"white",
         borderRadius:10,
         marginBottom:30,
    },
    loginText:{
                fontWeight:"700", 
                fontSize:16,
                textAlign:"center",
                color:"white",
                marginTop:10,
    },
    register:{
        textDecorationLine: 'underline',
        fontWeight:'bold',
        marginLeft:10,
    },
})