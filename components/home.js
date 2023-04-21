import React, { useState, useEffect } from 'react'; 
import { View, Text, SafeAreaView, Image, TouchableOpacity,  Modal,  } from 'react-native'; 
import { question, medicine, Labtest, Message, siren, medikit, avtar, self, profile,  } from '../images/images.js'; 

import styleHome from '../styles/home style.js'; 
import {firebase} from '../Database/firebase';


export default function Home ({navigation}) { 
  const [userRef, setUserRef] = useState(null);
  //state = {  isVisible: false,} 

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUserRef(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);


  const signOut = () => {
    if (userRef) {
      console.log('Signed out from:', userRef.email);
      firebase.auth().signOut()
        .then(() => {
          navigation.replace('Login');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  
 
    return ( 
      <SafeAreaView style={styleHome.container}> 
        <View style={{justifyContent:'center', alignItems:'center'}}> 
        {/* <Modal 
          animationType={"slide"} 
          transparent={true} 
          visible={this.state.isVisible}>  */}
{/*  
  <View style={styleHome.modal}> 
          <View style={{justifyContent:'center', alignItems:'center'}} > 
     
             
            <TouchableOpacity 
            //onPress={() => { this.setState({ isVisible: !this.state.isVisible })}}
            > 
              <Text style={styleHome.modalHeaderCloseText}>X</Text> 
            </TouchableOpacity> 
  <Text style={styleHome.modalText}>Calling an ambulance for...</Text> 
          </View> 
          <View style={styleHome.modalIamgeView}> 
            <Image 
              style={styleHome.modalImage1} 
              source={self} 
            /> 
            <Image 
              style={styleHome.modalImage2} 
              source={avtar} 
            /> 
          </View> 
         
            <Text style={styleHome.modalText2}>Yourself</Text> 
            <Text style={styleHome.modalText3}>Others</Text> 
           
          <View style={styleHome.buttonStyle}> 
            <TouchableOpacity 
            //onPress={()=>navigation.navigate('Doctor')}
            > 
              <Text style={styleHome.modalText4}>OK</Text> 
            </TouchableOpacity> 
            <TouchableOpacity
             //onPress={() => {  this.setState({ isVisible: !this.state.isVisible }) }}
            > 
              <Text style={styleHome.modalText5}>Cancel</Text> 
            </TouchableOpacity> 
          </View> 
        </View>  */}
        {/* /</Modal>  */}
 
        <View style={styleHome.view1}> 
 
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.tEACzM2yJXb9jWy_KiKv_QHaHz?pid=ImgDet&w=1862&h=1963&rs=1' }} style={styleHome.logo1} ></Image> 
 
          <Image source={profile} style={styleHome.logo2} ></Image> 
        </View> 
        <Text style={styleHome.hello} >Hello, Gagandeep!</Text> 
 
        <View style={styleHome.view2}> 
 
            <TouchableOpacity 
            //onPress={() => { this.setState({ isVisible: true }) }}
            onPress={signOut}
            > 
          <View style={styleHome.innerView1}> 
              <Image source={medikit} style={styleHome.image} ></Image> 
            <Text style={styleHome.text}>Find a Doctor</Text> 
            <Text>200+ Doctors</Text> 
          </View> 
              </TouchableOpacity> 
 
            <TouchableOpacity 
            //
            //onPress={ ()=>{ this.setState({ isVisible: true })}}
              > 
          <View style={styleHome.innerView2} > 
              <Image source={siren} style={styleHome.image} ></Image> 
            <Text style={styleHome.text}>Ambulance</Text> 
            <Text>For Your Help</Text> 
          </View> 
              </TouchableOpacity> 
 
            <TouchableOpacity 
            //onPress={() => { this.setState({ isVisible: true }) }}
            onPress={()=> navigation.navigate("ContactUs")}
            > 
          <View style={styleHome.innerView3} > 
          
              <Image source={Message} style={styleHome.image} ></Image> 
            <Text style={styleHome.text}>Message</Text> 
          </View> 
              </TouchableOpacity> 
 
            <TouchableOpacity 
            //onPress={() => { this.setState({ isVisible: true }) }}
            > 
          <View style={styleHome.innerView4} > 
              <Image source={Labtest} style={styleHome.image} ></Image> 
            <Text style={styleHome.text}>Lab Test</Text> 
            <Text>Sample Collection</Text> 
          </View> 
              </TouchableOpacity> 
 
            <TouchableOpacity 
            //onPress={() => { this.setState({ isVisible: true }) }}
            > 
          <View style={styleHome.innerView5} > 
              <Image source={medicine} style={styleHome.image} ></Image> 
            <Text style={{ fontWeight: 'bold' }}>Medicines</Text> 
            <Text>Add/Refill</Text> 
          </View> 
              </TouchableOpacity> 
 
            <TouchableOpacity 
            onPress={ () => navigation.navigate("Chat") }
            //onPress={() => { this.setState({ isVisible: true }) }}
            > 
          <View style={styleHome.innerView6} > 
              <Image source={question} style={styleHome.image} ></Image> 
            <Text style={styleHome.text}>Help</Text> 
          </View> 
              </TouchableOpacity> 
        </View> 
        </View> 
         
      </SafeAreaView> 
    ) 
  } 
