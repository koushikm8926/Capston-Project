import React from "react";
import { 
     View, 
     Text,
     TouchableOpacity, 
     StyleSheet, 
     Image, 
     SafeAreaView ,
     TextInput} from "react-native";
import { Ambulance } from "../images/images";
import { styles } from "../styles/registerstyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


export default function Register({navigation}){
    return(
    <SafeAreaView style={{flex:1,justifyContent:"center",}}>   
        <View style={{marginHorizontal:25}}>
            
            <View style={{alignItems:"center"}}>    
            <Image  style={{width: 300, height: 300}} source={Ambulance} />
            </View> 

            <Text style={styles.registertext}>Register</Text>
        
            <View style={styles.inputview}>
            <MaterialIcons name="person" size={20} color="grey" style={styles.Icons}/>
            <TextInput placeholder="Name" style={{paddingVertical:0,flex:1,}} keyboardType="default"/>      
            </View>

            <View style={styles.inputview}>
            <Ionicons name="phone-portrait" size={20} color="grey" style={styles.Icons}/>
            <TextInput placeholder="Number" style={styles.textinput}  keyboardType="number-pad" />   
            </View>

            <View style={styles.inputview}>
            <MaterialIcons name="email" size={20} color="grey" style={styles.Icons}/>
            <TextInput placeholder="Email" style={styles.textinput} keyboardType="email-address"/>     
            </View>

            <View style={styles.inputview}>
            <Ionicons name="ios-lock-closed" size={20} color="grey" style={styles.Icons}/>
            <TextInput placeholder="Password" style={styles.textinput}  secureTextEntry={true} />   
            </View>

            <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={styles.loginButton}>
            <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>      

            <Text style={{textAlign:"center", marginBottom:30,}}>Or</Text>       

            <View style={styles.lastview}>
            <Text>Already have an account ?</Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.register} >Login</Text>
            </TouchableOpacity>
            </View>

    </View>
    </SafeAreaView>
    );
}
