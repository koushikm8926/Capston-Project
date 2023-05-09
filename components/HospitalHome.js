import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity,  Modal, Animated } from 'react-native'; 
import { useNavigation } from '@react-navigation/core';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import { styles } from '../styles/HospitalHomeStyle';
import {firebase} from '../Database/firebase';
import { Ionicons } from '@expo/vector-icons';
import { hospitalData } from '../Recoil/GlobalVariables.js';
import { useRecoilState } from 'recoil';
import { registerIndieID }  from 'native-notify';
import axios from 'axios';

const Drawer = createDrawerNavigator();

function MainHospitalHomeScreen() {
    const [dataOfHospital, setDataOfHospital] = useRecoilState(hospitalData);
    const [animatedViewRightValue, setAnimatedViewRightValue] = useState(new Animated.Value(0));

    // useEffect(()=>{
    //     Animated.spring(animatedViewRightValue,{
    //       toValue:-430,
    //       damping:10,
    //       useNativeDriver:true,
    //     }).start()
    //   },[]);
    setTimeout(() => {
      Animated.spring(animatedViewRightValue, {
        toValue: -430,
        damping: 10,
        useNativeDriver: true,
      }).start();
    }, 10);

    const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}> 
        <View style={{justifyContent:'center', alignItems:'center'}}> 
        
        <View style={styles.view1}> 
          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.tEACzM2yJXb9jWy_KiKv_QHaHz?pid=ImgDet&w=1862&h=1963&rs=1' }} style={styles.logo1} ></Image> 
        </View> 

        <Animated.View style={[{
          ...styles.userAnimationView, 
          transform:[{translateX:animatedViewRightValue}], 
        }]} >
          <Image source={require('../images/UserDetailsScreenPNG.png')} style={styles.logo2} ></Image> 
          {dataOfHospital && dataOfHospital.length > 0 ? (
            <Text style={styles.hello}>Hello, {dataOfHospital[0].name}</Text>
          ):(
            <Text style={styles.hello}>Hello, User</Text>
          )}
        </Animated.View>
 
        <View style={styles.view2}> 
 
            <TouchableOpacity 
            onPress={() => navigation.navigate("HospitalDetailsScreen")}
            > 
          <View style={styles.innerView1}> 
              <Image source={require('../images/medikit.png')} style={styles.image} ></Image> 
            <Text style={styles.text}>Hospital Details</Text> 
            
          </View> 
              </TouchableOpacity> 
 
            <TouchableOpacity 
            onPress={ ()=> navigation.navigate("HospitalAcceptedRequest")}
            > 
                <View style={styles.innerView2} > 
                    <Image source={require('../images/siren.png')} style={styles.image} ></Image> 
                    <Text style={styles.text}>Accepted Requests</Text> 
                    <Text>Check Now</Text> 
                </View> 
            </TouchableOpacity> 
 
            <TouchableOpacity 
            onPress={()=> navigation.navigate("ContactUs")} 
            > 
                <View style={styles.innerView3} > 
                    <Image source={require('../images/massage.png')} style={styles.image} ></Image> 
                    <Text style={styles.text}>Message Us</Text> 
                </View> 
            </TouchableOpacity> 
 
            <TouchableOpacity 
            onPress={() => navigation.navigate("HospitalRequestRecieve")}
            > 
              <View style={styles.innerView4} > 
                  <Image source={require('../images/doctor.jpeg')} style={styles.image} ></Image> 
                  <Text style={styles.text}>Pending Requests</Text> 
                  <Text>Check Now</Text> 
              </View> 
            </TouchableOpacity> 

            <TouchableOpacity 
            // onPress={ ()=> navigation.navigate("AmbulanceBookingQuestions")}
            > 
                <View style={styles.innerView5} > 
                    {/* <Image source={require('../images/medicine.png')} style={styles.image} ></Image> 
                    <Text style={{ fontWeight: 'bold' }}>Medicines</Text> 
                    <Text>Add/Refill</Text>  */}
                </View> 
            </TouchableOpacity> 
 
            <TouchableOpacity 
            // onPress={ () => navigation.navigate("Chat") }
            > 
                <View style={styles.innerView6} > 
                    {/* <Image source={require('../images/question.png')} style={styles.image} ></Image> 
                    <Text style={styles.text}>Help</Text>  */}
                </View> 
            </TouchableOpacity> 

        </View> 

        <TouchableOpacity
        // Top Drawer Icon
        style={styles.topDrawerIcon}
        onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="md-reorder-three-sharp" size={40} color="black"  />
        </TouchableOpacity>

        </View> 
         
      </SafeAreaView> 
  );
}


function CustomDrawerContent(props) {
    const [hospitalRef, setHospitalRef] = useState(null);

    const navigation = useNavigation();

    useEffect(() => {
      const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
        setHospitalRef(user);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);

    const signOut = () => {
      if (hospitalRef) {
        console.log('Signed out from:', hospitalRef.email);
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
          labelStyle={styles.drawerLogoutText}
          onPress={signOut}
          style={styles.drawerLogoutContainer}
        />
      </DrawerContentScrollView>
    );
  }


export default function HospitalHome({navigation}) {
    const hospitalRef = firebase.firestore().collection('hospitals');
    const authRef = firebase.auth().currentUser.email;
    const [dataOfHospital, setDataOfHospital] = useRecoilState(hospitalData);

    useEffect(()=>{
        const unsubscribe = hospitalRef
        .orderBy('createdWhen', 'desc')
        .onSnapshot((querySnapshot)=>{
          const hospitalDetails = []
          querySnapshot.forEach((doc)=>{
            const {name} = doc.data();
            const {number} = doc.data();
            const {email} = doc.data();
            const {cityName} = doc.data();
            const { HospitalOwnedBy } = doc.data();
            const { HospitalSpeciality } = doc.data();
            const { additionalContact } = doc.data();
            const { numberOfAmbulance } = doc.data();
            const id = doc.id;
            if(email == authRef){
              hospitalDetails.push({
                id:id,
                email:email,
                name:name,
                number:number,
                cityName: cityName,
                HospitalOwnedBy: HospitalOwnedBy,
                HospitalSpeciality: HospitalSpeciality,
                additionalContact: additionalContact,
                numberOfAmbulance: numberOfAmbulance,
              })

              // to push notification and alert if the user hasn't completed his profile
              if(cityName === undefined || HospitalOwnedBy === undefined || HospitalSpeciality === undefined || additionalContact === undefined || numberOfAmbulance === undefined){
                registerIndieID(email, 7739, 'jtlIlWCJz3YPpspq6l0z8a');
                alert('Please complete your Profile by clicking On Hospital Details otherwise Receiving Ambulance Requests will not be successfull.')
                axios.post(`https://app.nativenotify.com/api/indie/notification`, {
                  subID: email,
                  appId: 7739,
                  appToken: 'jtlIlWCJz3YPpspq6l0z8a',
                  title: 'Complete Profile',
                  message: 'Please complete your Profile by clicking On Hospital Details otherwise Receiving Ambulance Requests will not be successfull.'
                });
              }

            }
          })
          setDataOfHospital(hospitalDetails);
        })
        return unsubscribe;
      },[]);
  
      return(
          <Drawer.Navigator  
          initialRouteName='MainHospitalHomeScreen'     
          useLegacyImplementation
          drawerContent={(props) => <CustomDrawerContent {...props} />} 
          >
            <Drawer.Screen name='Home Screen' component={MainHospitalHomeScreen} 
            options={{
              headerShown:false,
            }}
            ></Drawer.Screen>
          </Drawer.Navigator>
      )

}
