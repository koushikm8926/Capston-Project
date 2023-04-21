import { View,StyleSheet,Image,Text, TouchableOpacity, ScrollView,Alert} from "react-native"; 
import { avtar } from "../images/images"; 
import Ionicons from "react-native-vector-icons/Ionicons"; 
import MaterialIcons from "react-native-vector-icons/MaterialIcons"; 
import * as Animatable from 'react-native-animatable';
import { nexmoApiKey,nexmoApiSecret } from "../nexmo config";
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
//import { FullWindowOverlay } from "react-native-screens";

export default function Emergency({navigation}){ 
    
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    const handleSendLocation = async () => {
      const { latitude, longitude } = location.coords;
      const message = `My current location is http://maps.google.com/maps?q=${latitude},${longitude}`;
      const url = `https://rest.nexmo.com/sms/json`;
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: nexmoApiKey,
            api_secret: nexmoApiSecret,
            to: '917079020338', // replace with the phone number you want to send the location to
            from: 'NEXMO',
            text: message,
          }),
        });
        const data = await response.json();
        console.log(data);
        Alert.alert('Success', 'Location sent successfully!');
      } catch (error) {
        console.error(error);
      }
    };

    return( 
        
<View style={{justifyContent:'center', alignItems:'center', }} > 
    <View  style={{marginTop:10, flexDirection:'row',  }}> 
        <View > 
            <Image source={avtar} style={styles.avtar}></Image>  
        </View> 
        
        <View style={{flexDirection:'column', marginLeft:10, marginTop:12,}}> 
            <Text style={{fontWeight:'500',  }} >Hello User!</Text> 
            <TouchableOpacity onPress={()=> navigation.navigate("Login")}> 
            <Text style={{fontWeight:'bold', fontSize:15, color:'red' }}>Complete your profile</Text> 
            </TouchableOpacity> 
        </View> 
 
        <View style={{marginLeft:40, flexDirection:'column'}}> 
             
            <Ionicons name="location" size={20} color="red"  style={{marginRight:10,padding:5, }}> 
                <Text style={{color:'black', fontSize:15, marginRight:10,}}>London,Uk</Text> 
            </Ionicons> 
            <TouchableOpacity> 
            <Text style={{fontWeight:'bold', fontSize:15, color:'red' }} >See your location</Text> 
            </TouchableOpacity> 
        </View> 
    </View> 
 
        <View style={styles.view2}> 
            <Text style={styles.text} >Emergency help</Text> 
            <Text style={styles.text}>needed!</Text> 
        </View> 
 
        <View style={styles.view3} > 
            <Text style={{fontSize:15, fontWeight:'300', color:'grey',}}>just hold the button to call</Text> 
        </View> 
 
        <View style={{marginTop:50,alignItems:'center',}} > 
        <View style={{ borderBottomColor:'red', borderBottomWidth:3, borderRightColor:'blue', borderRightWidth:3, borderRadius:110,  borderTopColor:'blue', borderTopWidth:3, height:215, width:215,justifyContent:'center', alignItems:'center'}}>
            <Animatable.View  animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"}>
                <TouchableOpacity
                 //onPress={handleSendLocation} 
                style={{height:200, width:200, borderRadius:100,backgroundColor:'#fa4b4a', justifyContent:'center',alignItems:'center',}}> 
                <Ionicons name="call" size={100} color="white"  style={{marginRight:10,padding:5, color:'white', }}></Ionicons> 
                </TouchableOpacity> 
            </Animatable.View>  
        </View>
        </View> 
 
        <View style={{marginTop:30, alignItems:'center',justifyContent:'center',}}> 
            <Text style={{fontSize:25, fontWeight:'500',}}>Not sure what to do</Text> 
            <Text style={{marginTop:10, color:'grey', fontSize:15,}}>Pick the subject to chat</Text> 
        </View> 
 
      
        <View style={{flexDirection:'row', marginTop:30, width:400 }}> 

        <ScrollView 
            horizontal={true} 
            showsHorizontalScrollIndicator={false}>  
            <TouchableOpacity> 
            <View style={{backgroundColor:'white',marginLeft:10,borderRadius:20, height:110, width:150,}}> 
                <Text style={{fontSize:20, marginLeft:20, marginTop:15 }} >I had an accident </Text> 
                <MaterialIcons name="person" size={20} color="grey" style={{color:'red', marginTop:20, marginLeft:20}}  /> 
                {/* <Image source={streacher} style={{height:35, width:35, marginLeft:110, marginTop:-30}}></Image>   */}
 
            </View> 
            </TouchableOpacity>  
 
            <TouchableOpacity > 
            <View style={{backgroundColor:'white',marginLeft:10,borderRadius:20, height:110, width:150,}}> 
            <Text style={{fontSize:20, marginLeft:20, marginTop:15 }} >I have an injury </Text> 
                <MaterialIcons name="person" size={20} color="grey" style={{color:'red', marginTop:20, marginLeft:20}}  /> 
                {/* <Image source={finger_cut} style={{height:35, width:35, marginLeft:110, marginTop:-30}}></Image>   */}
 
            </View> 
            </TouchableOpacity>
             
            <TouchableOpacity>  
            <View style={{backgroundColor:'white',marginLeft:10,borderRadius:20, height:110, width:150,}}> 
            <Text style={{fontSize:20, marginLeft:20, marginTop:15 }} >I am feeling allery </Text> 
                <MaterialIcons name="person" size={20} color="grey" style={{color:'red', marginTop:20, marginLeft:20}}  /> 
                {/* <Image source={itching_person} style={{height:35, width:35, marginLeft:110, marginTop:-30}}></Image>   */}
 
            </View> 
            </TouchableOpacity>  
 
            <TouchableOpacity>  
            <View style={{backgroundColor:'white',marginLeft:10,borderRadius:20, height:110, width:150,}}> 
            <Text style={{fontSize:20, marginLeft:20, marginTop:15 }} >I am having smallpox </Text> 
                <MaterialIcons name="person" size={20} color="grey" style={{color:'red', marginTop:20, marginLeft:20}}  /> 
                {/* <Image source={smallpox_person} style={{height:35, width:35, marginLeft:110, marginTop:-30}}></Image>   */}
 
            </View> 
            </TouchableOpacity>  
            </ScrollView> 
             
        </View>    
</View> 
 
 
    ); 
    } 
 
const styles = StyleSheet.create({ 
 
avtar:{ 
    height:60, 
    width:60, 
    borderRadius:10, 
    marginLeft:10, 
}, 
 
view2:{ 
    marginTop:50, 
    alignItems:'center', 
}, 
 
text:{ 
    fontSize:40, 
    fontWeight:'500', 
}, 
 
view3:{ 
    alignItems:'center', 
    marginTop:10, 
} 
 
 
});