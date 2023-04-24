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
    TextInput,
    ScrollView,
    Alert,
} from "react-native";
import { Ambulance } from "../images/images";
import {firebase} from '../Database/firebase';
import { useRecoilState } from "recoil";
import { emailVerificationSent } from "../Recoil/GlobalVariables";


export default function Login({navigation}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true);
    const [userAuthRef, setUserAuthRef] = useState(null);
    const [reloadPage, setReloadPage] = useState(false);
    //const userAuthRef = firebase.auth().currentUser;


    useEffect(()=>{

        const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
            try {
                if(user && user.emailVerified==true){
                    navigation.replace('Home')
                }
            } catch (error) {
                alert(error)
            }
        });

        return unsubscribe;
    },[reloadPage]);


    const showPassword=()=>{
        setSecure(!secure)
    }

    const handelLogin = () => {
        if(email.length && password.length > 0){
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((data)=>{
                if(data.user.emailVerified==true){
                    const userEmail = data.user.email;
                    console.log('LogedIn with: ', userEmail);
                    setReloadPage(!reloadPage)
                }
                else{
                    alert('Please Verify Your Email to move to Home Page.')
                }
            }).catch((error)=>{
                Alert.alert("Please enter correct user id and password")
            })
        }
        else{
            alert("Please fill all the Input Fields.")
        }
    }

    return(
    <SafeAreaView style={{flex:1, backgroundColor:'#ebf1fc'}}>   
    <ScrollView 
    style={{marginHorizontal:25, }} 
    showsVerticalScrollIndicator={false}
    > 
        
        <View style={{alignItems:"center"}}>    
        <Image  style={{width: 300, height: 300}} source={Ambulance} />
        </View> 

        <Text style={styles.loginText}>Login</Text>
        
        <View style={styles.inputview}>
        <MaterialIcons name="email" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput 
        placeholder="Email" 
        style={styles.TextInput} 
        keyboardType="email-address"
        onChangeText={val=>setEmail(val)}
        />    
        </View>

        <View style={styles.inputview}>
        <Ionicons name="ios-lock-closed" size={20} color="blue" style={{marginRight:10,padding:5,}}/>
        <TextInput 
        placeholder="Password" 
        style={styles.TextInput}  
        secureTextEntry={secure} 
        onChangeText={val=>setPassword(val)}
        />
        {secure?
            <MaterialIcons name="visibility-off" size={24} color="blue" style={{alignSelf:'center', right:10}} onPress={showPassword} />
            :<MaterialIcons name="visibility" size={24} color="blue" style={{alignSelf:'center', right:10}} onPress={showPassword} />
        }
        <TouchableOpacity onPress={()=>navigation.navigate("ForgotScreen")}>
        <Text style={{fontWeight:"700", color:"#42DAFF", marginTop:5}}>Forgot?</Text>
        </TouchableOpacity>   
        </View>

        <TouchableOpacity onPress={handelLogin} style={styles.loginButton}>
        <Text style={styles.loginbuttonText}>Login</Text>
        </TouchableOpacity>  

        <Text style={{textAlign:"center", marginBottom:30,}}>Or</Text>       
        
        <View style={styles.lastview}>
        <Text>New to the app?</Text>
        <TouchableOpacity onPress={() => navigation.replace('Register')}>
        <Text style={styles.register} >Register</Text>
        </TouchableOpacity>
        </View>

    </ScrollView>
    </SafeAreaView>
    );
}