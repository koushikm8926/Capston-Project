<<<<<<< HEAD
import React, { useState, useEffect } from 'react'; 
import { View, Text, SafeAreaView, Image, TouchableOpacity,  Modal,  } from 'react-native'; 
import { question, medicine, Labtest, Message, siren, medikit, avtar, self, profile,  } from '../images/images.js'; 
import { useNavigation } from '@react-navigation/core';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import styleHome from '../styles/home style.js'; 
import {firebase} from '../Database/firebase';
import UserDetailsScreen from './UserDetailsScreen.js';
import { Ionicons } from '@expo/vector-icons';
import { userData } from '../Recoil/GlobalVariables.js';
import { useRecoilState } from 'recoil';

const Drawer = createDrawerNavigator();

function MainHomeScreen () { 
  // const userRef = firebase.firestore().collection('users');
  // const authRef = firebase.auth().currentUser.email;
  const [dataOfUser, setDataOfUser] = useRecoilState(userData);

  // useEffect(()=>{
  //   const unsubscribe = userRef
  //   .orderBy('createdWhen', 'desc')
  //   .onSnapshot((querySnapshot)=>{
  //     const users = []
  //     querySnapshot.forEach((doc)=>{
  //       const {name} = doc.data();
  //       const {number} = doc.data();
  //       const {email} = doc.data();
  //       const {id} = doc.id;
  //       if(email == authRef){
  //         users.push({
  //           id,
  //           email,
  //           name,
  //           number,
  //         })
  //       }
  //     })
  //     setDataOfUser(users);
  //   })
  //   return unsubscribe;
  // },[]);

  const navigation = useNavigation();
=======
import {firebase} from '../Database/firebase';
import styleHome from '../styles/home style.js'; 
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, } from 'react-native'; 
import { question, medicine, Labtest, Message, siren, medikit, avtar, self, profile,  } from '../images/images.js'; 

export default function Home ({navigation}) { 
  const [userRef, setUserRef] = useState(null);
  
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
  
>>>>>>> dd518491bece56d6a31bb3ab9bce9cc39a58ad47
 
    return ( 
      <SafeAreaView style={styleHome.container}> 
        <View style={{justifyContent:'center', alignItems:'center'}}> 
        
        <View style={styleHome.view1}> 
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.tEACzM2yJXb9jWy_KiKv_QHaHz?pid=ImgDet&w=1862&h=1963&rs=1' }} style={styleHome.logo1} ></Image> 
          <Image source={profile} style={styleHome.logo2} ></Image> 
        </View> 
<<<<<<< HEAD
        {dataOfUser && dataOfUser.length > 0 ? (
          <Text style={styleHome.hello}>Hello, {dataOfUser[0].name}</Text>
        ):(
          <Text style={styleHome.hello}>Hello, User</Text>
        )}
 
        <View style={styleHome.view2}> 
 
            <TouchableOpacity 
            onPress={() => navigation.navigate("UserDetailsScreen")}
            > 
          <View style={styleHome.innerView1}> 
              <Image source={medikit} style={styleHome.image} ></Image> 
            <Text style={styleHome.text}>User Details</Text> 
            {/* <Text>200+ Doctors</Text>  */}
          </View> 
=======

        <Text style={styleHome.hello} >Hello, Gagandeep!</Text> 
        <View style={styleHome.view2}> 
           
            <TouchableOpacity> 
                  <View style={styleHome.innerView1}> 
                      <Image source={medikit} style={styleHome.image} ></Image> 
                      <Text style={styleHome.text}>Find a Doctor</Text> 
                      <Text>200+ Doctors</Text> 
                  </View> 
>>>>>>> dd518491bece56d6a31bb3ab9bce9cc39a58ad47
              </TouchableOpacity> 
 
            <TouchableOpacity onPress={ ()=> navigation.navigate("AmbulanceBooking")} > 
                <View style={styleHome.innerView2} > 
                    <Image source={siren} style={styleHome.image} ></Image> 
                    <Text style={styleHome.text}>Ambulance</Text> 
                    <Text>For Your Help</Text> 
                </View> 
            </TouchableOpacity> 
 
            <TouchableOpacity onPress={()=> navigation.navigate("ContactUs")} > 
                <View style={styleHome.innerView3} > 
                    <Image source={Message} style={styleHome.image} ></Image> 
                    <Text style={styleHome.text}>Message</Text> 
                </View> 
            </TouchableOpacity> 
 
            <TouchableOpacity > 
              <View style={styleHome.innerView4} > 
                  <Image source={Labtest} style={styleHome.image} ></Image> 
                  <Text style={styleHome.text}>Lab Test</Text> 
                  <Text>Sample Collection</Text> 
              </View> 
            </TouchableOpacity> 

            <TouchableOpacity > 
                <View style={styleHome.innerView5} > 
                    <Image source={medicine} style={styleHome.image} ></Image> 
                    <Text style={{ fontWeight: 'bold' }}>Medicines</Text> 
                    <Text>Add/Refill</Text> 
                </View> 
            </TouchableOpacity> 
 
            <TouchableOpacity onPress={ () => navigation.navigate("Chat") }> 
                <View style={styleHome.innerView6} > 
                    <Image source={question} style={styleHome.image} ></Image> 
                    <Text style={styleHome.text}>Help</Text> 
                </View> 
            </TouchableOpacity> 

        </View> 
<<<<<<< HEAD

        <TouchableOpacity
        // Top Drawer Icon
        style={styleHome.topDrawerIcon}
        onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="md-reorder-three-sharp" size={40} color="black"  />
        </TouchableOpacity>

        </View> 
         
      </SafeAreaView> 
=======
      </View>    
  </SafeAreaView> 
>>>>>>> dd518491bece56d6a31bb3ab9bce9cc39a58ad47
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
          const id = doc.id;
          if(email == authRef){
            users.push({
              id:id,
              email:email,
              name:name,
              number:number,
            })
          }
          console.log(id);
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