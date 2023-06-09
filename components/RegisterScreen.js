import React,{useState, useEffect} from "react"; 
import {View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView , TextInput, ScrollView, Platform} from "react-native"; 
import { styles } from "../styles/registerstyle"; 
import Ionicons from "react-native-vector-icons/Ionicons"; 
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; 
import {firebase} from '../Database/firebase';
import { useRecoilState } from "recoil";
import { emailVerificationSent } from "../Recoil/GlobalVariables";
 
 
export default function Register({navigation}){ 
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secure, setSecure] = useState(true);
    const userRef = firebase.firestore().collection('users');
    //const userAuthRef = firebase.auth().currentUser;

    useEffect(()=>{

        const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{
            try {
                const userAuthRef = firebase.auth().currentUser;
                if(user && user.emailVerified==true){
                    navigation.replace('Home')
                }
            } catch (error) {
                alert(error)
            }
        });

        return unsubscribe;
    },[]);

    const handelRegister = () => {
        if (email.length && password.length && name.length && number.length > 0) {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((data) => {
              const userId = data.user.uid;
              const userEmail = data.user.email;
              const timestamp = firebase.firestore.FieldValue.serverTimestamp();
              const info = {
                createdWhen: timestamp,
                name: name,
                email: email,
                number: number,
                userId: userId,
              };
              const userAuthRef = firebase.auth().currentUser;
              userRef.add(info);
              console.log("Registered with: ", userEmail);
      
              userAuthRef.sendEmailVerification()
              .then(() => {
                  console.log("Email Sent Please check Your mails.");
                  alert("You have Succesfully Registered with Us. Please Verify Your Email to move to Login.");
                  navigation.replace("Login");

                //   firebase.auth().signOut()
                //   .then(() => {
                //       console.log('SignedOut from: '+ userAuthRef.email);
                //       navigation.replace("Login");
                //     })
                //     .catch((error) => {
                //       console.log(error);
                //     });
                })
                .catch((error) => {
                  console.log(error);
                  alert("Failed to send email verification. Please try again.");
                });
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          alert("Please fill all the input Fields.");
        }
      };


      // const handelRegister = () => {
      //   if (email.length && password.length && name.length && number.length > 0) {
      //     firebase
      //       .auth()
      //       .createUserWithEmailAndPassword(email, password)
      //       .then((data) => {
      //         const userId = data.user.uid;
      //         const userEmail = data.user.email;
      //         const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      //         firebase.firestore().collection('uniqueId').onSnapshot((querySnapshot)=>{
      //           querySnapshot.forEach((uniqueDocData)=>{
      //             // setUniqueIdOfUser(uniqueDocData.data().uniqueUserId)
      //             // console.log(uniqueIdOfUser.toString())

      //             const info = {
      //               createdWhen: timestamp,
      //               name: name,
      //               email: email,
      //               number: number,
      //               userId: userId,
      //               uniqueUserId:uniqueDocData.data().uniqueUserId,
      //             };
      //             const userAuthRef = firebase.auth().currentUser;
      //             userRef.add(info);
      //             console.log("Registered with: ", userEmail);
          
      //             userAuthRef.sendEmailVerification()
      //             .then(() => {
      //                 console.log("Email Sent Please check Your mails.");
      //                 alert("Please Verify Your Email to move to Home Page.");
      //                 navigation.replace("Login");
    
      //               //   firebase.auth().signOut()
      //               //   .then(() => {
      //               //       console.log('SignedOut from: '+ userAuthRef.email);
      //               //       navigation.replace("Login");
      //               //     })
      //               //     .catch((error) => {
      //               //       console.log(error);
      //               //     });
      //               }).then(()=>{
      //                 firebase.firestore().collection('uniqueId').doc('imCanz7pr8DA2Nf5gUIw').update({
      //                   uniqueUserId:parseInt(uniqueDocData.data().uniqueUserId) + 1,
      //                 })
      //               })
      //               .catch((error) => {
      //                 console.log(error);
      //                 alert("Failed to send email verification. Please try again.");
      //               })

      //           })
      //         })

      //       })
      //       .catch((error) => {
      //         console.log(error);
      //       });
      //   } else {
      //     alert("Please fill all the input Fields.");
      //   }
      // };
    
      

    const showPassword=()=>{
        setSecure(!secure)
    }


    return( 
    <SafeAreaView style={{flex:1, backgroundColor:'#ffffff'}}>    
    <ScrollView 
    style={{marginHorizontal:25, }} 
    showsVerticalScrollIndicator={false}
    > 
             
            <View style={{alignItems:"center"}}>     
            <Image  style={{width: 400, height: 300}} source={require('../images/RegistrationPage.gif')} /> 
            </View>  
 
            <Text style={styles.registertext}>Register</Text> 
         
            <View style={styles.inputview}> 
            <MaterialIcons name="person" size={20} color="blue" style={styles.Icons}/> 
            <TextInput 
            placeholder="Name" 
            style={{paddingVertical:0,flex:1,}} 
            onChangeText={val=> setName(val)}
            keyboardType="default"
            />       
            </View> 
 
            <View style={styles.inputview}> 
            <Ionicons name="phone-portrait" size={20} color="blue" style={styles.Icons}/> 
            <TextInput 
            placeholder="Number" 
            style={styles.textinput}  
            keyboardType="number-pad" 
            onChangeText={val=> setNumber(val)}
            />    
            </View> 
 
            <View style={styles.inputview}> 
            <MaterialIcons name="email" size={20} color="blue" style={styles.Icons}/> 
            <TextInput 
            placeholder="Email" 
            style={styles.textinput} 
            keyboardType="email-address"
            onChangeText={val=> setEmail(val)}
            />      
            </View> 
 
            <View style={styles.inputview}> 
            <Ionicons name="ios-lock-closed" size={20} color="blue" style={styles.Icons}/> 
            <TextInput 
            placeholder="Password" 
            style={styles.textinput}  
            secureTextEntry={secure} 
            onChangeText={val=> setPassword(val)}
            />    
            {secure?
                <MaterialIcons name="visibility-off" size={24} color="blue" style={{alignSelf:'center', right:10}} onPress={showPassword} />
                :<MaterialIcons name="visibility" size={24} color="blue" style={{alignSelf:'center', right:10}} onPress={showPassword} />
            }
            </View> 
 
            <TouchableOpacity onPress={handelRegister} style={styles.loginButton}> 
            <Text style={styles.loginText}>Register</Text> 
            </TouchableOpacity> 

            {/* <TouchableOpacity onPress={googleSignIn}> 
            <Text style={{...styles.loginText, color:'black'}}>Login with Google</Text> 
            </TouchableOpacity>     */}
 
            <Text style={{textAlign:"center", marginBottom:30,}}>Or</Text>        
 
            <View style={styles.lastview}> 
            <Text>Already have an account ?</Text> 
            <TouchableOpacity onPress={()=> navigation.replace("Login")}> 
            <Text style={styles.register} >Login</Text> 
            </TouchableOpacity> 
            </View> 
 
    </ScrollView> 
    </SafeAreaView> 
    ); 
}