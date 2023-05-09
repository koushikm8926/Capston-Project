import React, { useState, useEffect } from 'react'; 
import { View, Text, SafeAreaView, Image, TouchableOpacity,  Modal, Animated } from 'react-native'; 
import { useNavigation } from '@react-navigation/core';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import styleHome from '../styles/home style.js'; 
import {firebase} from '../Database/firebase';
import UserDetailsScreen from './UserDetailsScreen.js';
import { Ionicons } from '@expo/vector-icons';
import { userData } from '../Recoil/GlobalVariables.js';
import { useRecoilState } from 'recoil';
import { registerIndieID }  from 'native-notify';
import axios from 'axios';

const Drawer = createDrawerNavigator();

function MainHomeScreen () { 
  const [dataOfUser, setDataOfUser] = useRecoilState(userData);
  const [animatedViewRightValue, setAnimatedViewRightValue] = useState(new Animated.Value(0));

  // useEffect(()=>{
  //   Animated.spring(animatedViewRightValue,{
  //     toValue:-430,
  //     damping:10,
  //     useNativeDriver:true,
  //   }).start()
  // },[])
  setTimeout(() => {
    Animated.spring(animatedViewRightValue, {
      toValue: -430,
      damping: 10,
      useNativeDriver: true,
    }).start();
  }, 10);


  const navigation = useNavigation();
 
    return ( 
      <SafeAreaView style={styleHome.container}> 
        <View style={{justifyContent:'center', alignItems:'center'}}> 
        
        <View style={styleHome.view1}> 
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.tEACzM2yJXb9jWy_KiKv_QHaHz?pid=ImgDet&w=1862&h=1963&rs=1' }} style={styleHome.logo1} ></Image> 
        </View> 

        <Animated.View style={[{
          ...styleHome.userAnimationView, 
          transform:[{translateX:animatedViewRightValue}], 
        }]} >
          <Image source={require('../images/UserDetailsScreenPNG.png')} style={styleHome.logo2} ></Image> 
          {dataOfUser && dataOfUser.length > 0 ? (
            <Text style={styleHome.hello}>Hello, {dataOfUser[0].name}</Text>
          ):(
            <Text style={styleHome.hello}>Hello, User</Text>
          )}
        </Animated.View>
 
        <View style={styleHome.view2}> 
 
            <TouchableOpacity 
            onPress={() => navigation.navigate("UserDetailsScreen")}
            > 
          <View style={styleHome.innerView1}> 
              <Image source={require('../images/medikit.png')} style={styleHome.image} ></Image> 
            <Text style={styleHome.text}>User Details</Text> 
            
          </View> 
              </TouchableOpacity> 
 
            <TouchableOpacity onPress={ ()=> navigation.navigate("AmbulanceBooking")} > 
                <View style={styleHome.innerView2} > 
                    <Image source={require('../images/siren.png')} style={styleHome.image} ></Image> 
                    <Text style={styleHome.text}>Ambulance</Text> 
                    <Text>For Your Help</Text> 
                </View> 
            </TouchableOpacity> 
 
            <TouchableOpacity onPress={()=> navigation.navigate("UserRequestStatus")} > 
                <View style={styleHome.innerView3} > 
                    <Image source={require('../images/massage.png')} style={styleHome.image} ></Image> 
                    <Text style={styleHome.text}>Request Status</Text> 
                </View> 
            </TouchableOpacity> 
 
            <TouchableOpacity onPress={() => navigation.navigate("DoctorScreen")}> 
              <View style={styleHome.innerView4} > 
                  <Image source={require('../images/doctor.jpeg')} style={styleHome.image} ></Image> 
                  <Text style={styleHome.text}>Find a Doctor</Text> 
                  <Text>200+ Dcotors</Text> 
              </View> 
            </TouchableOpacity> 

            <TouchableOpacity 
            onPress={ ()=> navigation.navigate("AllHospitalAvilable")}
            > 
                <View style={styleHome.innerView5} > 
                    <Image source={require('../images/medicine.png')} style={styleHome.image} ></Image> 
                    <Text style={{ fontWeight: 'bold' }}>Book Ambulance</Text> 
                    <Text>Easy Steps</Text> 
                </View> 
            </TouchableOpacity> 
 
            <TouchableOpacity onPress={ () => navigation.navigate("Chat") }> 
                <View style={styleHome.innerView6} > 
                    <Image source={require('../images/question.png')} style={styleHome.image} ></Image> 
                    <Text style={styleHome.text}>Help</Text> 
                </View> 
            </TouchableOpacity> 

        </View> 

        <TouchableOpacity
        // Top Drawer Icon
        style={styleHome.topDrawerIcon}
        onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="md-reorder-three-sharp" size={40} color="black"  />
        </TouchableOpacity>

        </View> 
         
      </SafeAreaView> 
    ) 
  } 

  function CustomDrawerContent(props) {
    const [userRef, setUserRef] = useState(null);

    const navigation = useNavigation();

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
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <DrawerItem
          label="Find a Doctor"
          onPress={() => {}}
        />
        <DrawerItem
          label="Lab Test"
          onPress={() => {}}
        />
        <DrawerItem
          label="Medicines"
          onPress={() => {}}
        />
        <DrawerItem
          label="Contact Us"
          onPress={()=> navigation.navigate("ContactUs")}
        />
        <DrawerItem
          label="Log Out"
          labelStyle={styleHome.drawerLogoutText}
          onPress={signOut}
          style={styleHome.drawerLogoutContainer}
        />
      </DrawerContentScrollView>
    );
  }

  export default function Home(){
    const userRef = firebase.firestore().collection('users');
    const authRef = firebase.auth().currentUser.email;
    const [dataOfUser, setDataOfUser] = useRecoilState(userData);
  
    useEffect(()=>{
      const unsubscribe = userRef
      .orderBy('createdWhen', 'desc')
      .onSnapshot((querySnapshot)=>{
        const users = []
        querySnapshot.forEach((doc)=>{
          const {name} = doc.data();
          const {number} = doc.data();
          const {email} = doc.data();
          const { bloodGroup } = doc.data();
          const { sex } = doc.data();
          const { emergencyContact } = doc.data();
          const { currentAddress } = doc.data();
          const { age } = doc.data();
          const id = doc.id;
          if(email == authRef){
            users.push({
              id:id,
              email:email,
              name:name,
              number:number,
              bloodGroup: bloodGroup,
              sex: sex,
              emergencyContact: emergencyContact,
              currentAddress: currentAddress,
              age: age,
            })

            // to push notification and alert if the user hasn't completed his profile
          if(bloodGroup === undefined || sex === undefined || emergencyContact === undefined || currentAddress === undefined || age === undefined){
            registerIndieID(email, 7739, 'jtlIlWCJz3YPpspq6l0z8a');
            alert('Please complete your Profile by clicking On UserDetails otherwise Ambulance booking will not be successfull.')
            axios.post(`https://app.nativenotify.com/api/indie/notification`, {
              subID: email,
              appId: 7739,
              appToken: 'jtlIlWCJz3YPpspq6l0z8a',
              title: 'Complete Profile',
              message: 'Please complete your Profile by clicking On UserDetails otherwise Ambulance booking will not be successfull.'
            });
          }
            
          }
        })
        setDataOfUser(users);
      })
      return unsubscribe;
    },[]);

    return(
        <Drawer.Navigator  
        initialRouteName='MainHomeScreen'     
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />} 
        >
          <Drawer.Screen name='Home Screen' component={MainHomeScreen} 
          options={{
            headerShown:false,
          }}
          ></Drawer.Screen>
        </Drawer.Navigator>
    )
  }