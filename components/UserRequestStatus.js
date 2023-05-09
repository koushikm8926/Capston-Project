import React,{useState, useEffect} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/UserRequestStatusStyle';
import { Ionicons } from '@expo/vector-icons';
import {firebase} from '../Database/firebase';
import { userData, hospitalData, allHospitalData } from '../Recoil/GlobalVariables.js';
import { useRecoilState } from 'recoil';
import registerNNPushToken, { getPushDataObject, registerIndieID }  from 'native-notify';
import axios from 'axios';

export default function UserRequestStatus({navigation, route}) {
    const [reloadPage, setReloadPage] = useState(false);
    const [dataOfUser, setDataOfUser] = useRecoilState(userData);
    const [requestStatusOutput, setRequestStatusOutput] = useState('');
    const [everyHospitalData, setEveryHospitalData] = useRecoilState(allHospitalData);
    const hospitalRef = firebase.firestore().collection('hospitals');
    const [dataOfHospital, setDataOfHospital] = useState([]);
    const userAmbulanceRequestRef = firebase.firestore().collection('users').doc(dataOfUser[0].id).collection('userAmbulanceRequests');

    useEffect(()=>{
        const unsubscribe = userAmbulanceRequestRef
        .orderBy('requestedWhen', 'desc')
        .onSnapshot((querySnapshot)=>{
          const hospitalData = []
          querySnapshot.forEach((doc)=>{
            const {name} = doc.data();
            const {number} = doc.data();
            const {email} = doc.data();
            const { numberOfAmbulance } = doc.data();
            const { cityName } = doc.data();
            const { HospitalOwnedBy } = doc.data();
            const { HospitalSpeciality } = doc.data();
            const { additionalContact } = doc.data();
            const { requestStatus } = doc.data();
            const { hospitalRequestId } = doc.data();
            const { hospitalId } = doc.data();
            const id = doc.id;
              hospitalData.push({
                id:id,
                email:email,
                name:name,
                number:number,
                numberOfAmbulance: numberOfAmbulance,
                cityName: cityName,
                HospitalOwnedBy: HospitalOwnedBy,
                HospitalSpeciality: HospitalSpeciality,
                additionalContact: additionalContact,
                requestStatus: requestStatus,
                hospitalRequestId: hospitalRequestId,
                hospitalId: hospitalId,
              })

              {if (requestStatus === "panding") {
              } else if (requestStatus === "accepted") {
                 registerIndieID(dataOfUser[0].email, 7739, 'jtlIlWCJz3YPpspq6l0z8a');
                axios.post(`https://app.nativenotify.com/api/indie/notification`, {
                  subID: dataOfUser[0].email,
                  appId: 7739,
                  appToken: 'jtlIlWCJz3YPpspq6l0z8a',
                  title: 'Request Accepted',
                  message: 'Ambulance request has been accepted, It will be there in a moment.'
                });
              } else {
                 registerIndieID(dataOfUser[0].email, 7739, 'jtlIlWCJz3YPpspq6l0z8a');
                axios.post(`https://app.nativenotify.com/api/indie/notification`, {
                  subID: dataOfUser[0].email,
                  appId: 7739,
                  appToken: 'jtlIlWCJz3YPpspq6l0z8a',
                  title: 'Request Declined',
                  message: 'Ambulance request has been declined, Please book again.'
                });
              }}

          })
          setDataOfHospital(hospitalData);
        })
        return unsubscribe;
      },[reloadPage]);

      const getRequestStatusOutput = (requestStatus) => {
        if (requestStatus === "panding") {
          return "Ambulance has been requested, Please wait until the request is accepted.";
        } else if (requestStatus === "accepted") {
          return "Ambulance request has been accepted, It will be there in a moment.";
        } else {
          return "Ambulance request has been declined, Please book again.";
        }
      };
      

      const reloadThePage = () =>{
        setReloadPage(!reloadPage)
      }

      // const cancelRequest = (docData) =>{
      //   const hospitalAmbulanceRequestRef = firebase.firestore().collection('hospitals').doc(docData.hospitalId).collection('ambulanceRequests');
      //   try {
      //     if(hospitalAmbulanceRequestRef.doc(docData.hospitalRequestId)){
      //       hospitalAmbulanceRequestRef.doc(docData.hospitalRequestId).update({
      //         requestCancelled:'true',
      //     })
      //     }
      //     userAmbulanceRequestRef.doc(docData.id).delete();
      //     console.log('Request deleted.');
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }

      const cancelRequest = async (docData) => {
        const hospitalAmbulanceRequestRef = firebase
          .firestore()
          .collection('hospitals')
          .doc(docData.hospitalId)
          .collection('ambulanceRequests')
          .doc(docData.hospitalRequestId);
      
        try {
          const doc = await hospitalAmbulanceRequestRef.get();
      
          if (doc.exists) {
            await hospitalAmbulanceRequestRef.update({
              requestCancelled: 'true',
            });
          } else {
            console.log('Document not found');
          }
      
          await userAmbulanceRequestRef.doc(docData.id).delete();
          console.log('Request deleted.');
        } catch (error) {
          console.log(error);
        }
      };
      

      const deleteRequest = (docData) =>{
        try {
          userAmbulanceRequestRef.doc(docData.id).delete();
          console.log('Request deleted.');
        } catch (error) {
          console.log(error);
        }
      }


  return (
    <View style={styles.container} >
      <Text style={styles.topHeadingText} >Your Ambulance Requests</Text>

      <FlatList
        data={dataOfHospital}
        renderItem={({item:data})=>{
            const requestStatusText = getRequestStatusOutput(data.requestStatus);
          return(
            <View style={styles.FlatlistContainer} >
              <Text style={styles.flatlistdetailsText} >Name: <Text style={{color:'red'}} >{data.name}</Text></Text>
              <Text style={styles.flatlistdetailsText} >Contact: <Text style={{color:'green'}} >{data.number}</Text></Text>
              {/* <Text style={styles.flatlistdetailsText} >Ambulance Avilable: <Text style={{color:'#5060FF'}} >{data.numberOfAmbulance}</Text></Text> */}
              <Text style={styles.flatlistdetailsText} >City: <Text style={{color:'#5060FF'}} >{data.cityName}</Text></Text>
              <Text style={styles.flatlistdetailsText} >Speciality: <Text style={{color:'#5060FF'}} >{data.HospitalSpeciality}</Text></Text>
              <Text style={styles.flatlistdetailsText} >Owned By: <Text style={{color:'#5060FF'}} >{data.HospitalOwnedBy}</Text></Text>
              <Text style={styles.flatlistdetailsText} >Request Status: <Text style={{color:'#5060FF'}} >{data.requestStatus}</Text></Text>
              <Text style={styles.flatlistdetailsText} >{requestStatusText}<Text style={{color:'red'}} ></Text></Text>
              <TouchableOpacity onPress={()=>cancelRequest(data)}
                style={{...styles.flatlistTouchableContainer, backgroundColor:"orange", }}>
                    <Text style={styles.flatlistTouchableContainerText}>Cancel Request</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>deleteRequest(data)}
                style={{...styles.flatlistTouchableContainer, backgroundColor:"green", marginLeft:15,}}>
                <Text style={styles.flatlistTouchableContainerText} > Request Completed</Text>
                </TouchableOpacity>
            </View>
          )
        }}
        ></FlatList>

      <TouchableOpacity
      style={styles.bottomInfoBookTouchable}
      onPress={reloadThePage}
      >
        <Text style={styles.bottomInfoBookTouchableText} >Reload Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.topBackTouchable}
      onPress={()=>navigation.navigate('Home')}
      >
        <Text style={styles.topBackTouchableText} >{"<Back"}</Text>
        {/* <Ionicons name="ios-arrow-back-circle" size={50} color="#148CD0" /> */}
      </TouchableOpacity>

    </View>
  );
}
