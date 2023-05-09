import React,{useState, useEffect} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/HospitalRequestRecieveStyle';
import { Ionicons } from '@expo/vector-icons';
import { hospitalData } from '../Recoil/GlobalVariables.js';
import { useRecoilState } from 'recoil';
import {firebase} from '../Database/firebase';
import moment from 'moment/moment';
import { registerIndieID }  from 'native-notify';
import axios from 'axios';

export default function HospitalRequestRecieve({navigation}) {
  const [dataOfHospital, setDataOfHospital] = useRecoilState(hospitalData);
  const [allAmbulanceRequest, setAllAmbulanceRequest] = useState([]);
  const [reloadPage, setReloadPage] = useState(false);
  const hospitalRecievedRequestRef = firebase.firestore().collection('hospitals').doc(dataOfHospital[0].id).collection('ambulanceRequests');
  const hospitalRef = firebase.firestore().collection('hospitals').doc(dataOfHospital[0].id);

  useEffect(()=>{
    try {
      let lastDocSnapshot = null; // initialize last document snapshot to null
  
      const unsubscribe = hospitalRecievedRequestRef
      .orderBy('requestedWhen', 'desc')
      .onSnapshot((querySnapshot)=>{
        const requestData = []
        querySnapshot.forEach((doc)=>{
          const {name} = doc.data();
          const {number} = doc.data();
          const {email} = doc.data();
          const { age } = doc.data();
          const { bloodGroup } = doc.data();
          const { currentAddress } = doc.data();
          const { emergencyContact } = doc.data();
          const { requestStatus } = doc.data();
          const { requestCancelled } = doc.data();
          // const { requestedWhen } = doc.data();
          // const requestedWhenToDate = moment(requestedWhen, 'MM/DD/YYYY').toLocaleString();
          const { firstQuestion } = doc.data();
          const { firstQuestionAnswer } = doc.data();
          const { secondQuestion } = doc.data();
          const { secondQuestionAnswer } = doc.data();
          const { thirdQuestion } = doc.data();
          const { thirdQuestionAnswer } = doc.data();
          const { fourthQuestion } = doc.data();
          const { fourthQuestionAnswer } = doc.data();
          const { fifthQuestion } = doc.data();
          const { fifthQuestionAnswer } = doc.data();
          const { userId } = doc.data();
          const { userRequestId } = doc.data();
          const id = doc.id;
          if(requestStatus!=='accepted'){
            requestData.push({
              id:id,
              email:email,
              name:name,
              number:number,
              age: age,
              bloodGroup: bloodGroup,
              currentAddress: currentAddress,
              emergencyContact: emergencyContact,
              // requestedWhen: requestedWhen,
              requestStatus: requestStatus,
              requestCancelled: requestCancelled,
              firstQuestion: firstQuestion,
              firstQuestionAnswer: firstQuestionAnswer,
              secondQuestion: secondQuestion,
              secondQuestionAnswer: secondQuestionAnswer,
              thirdQuestion: thirdQuestion,
              thirdQuestionAnswer: thirdQuestionAnswer,
              fourthQuestion: fourthQuestion,
              fourthQuestionAnswer: fourthQuestionAnswer,
              fifthQuestion: fifthQuestion,
              fifthQuestionAnswer: fifthQuestionAnswer,
              userId: userId,
              userRequestId: userRequestId,
            })
          }
  
        })
  
        // check if any new documents were added and send notification
        querySnapshot.docChanges().forEach((change) => {
          if (change.type === 'added' && lastDocSnapshot !== change.doc) {
            lastDocSnapshot = change.doc; // update last document snapshot
            registerIndieID(dataOfHospital[0].email, 7739, 'jtlIlWCJz3YPpspq6l0z8a');
            axios.post(`https://app.nativenotify.com/api/indie/notification`, {
              subID: dataOfHospital[0].email,
              appId: 7739,
              appToken: 'jtlIlWCJz3YPpspq6l0z8a',
              title: 'Ambulance Requested',
              message: 'Ambulance has been requested, Please Check.'
            });
          }
        });

        // // check if any new documents were added and send notification
        // querySnapshot.docChanges().forEach((change) => {
        //   if (change.type === 'added') {
        //     registerIndieID(dataOfHospital[0].email, 7739, 'jtlIlWCJz3YPpspq6l0z8a');
        //     axios.post(`https://app.nativenotify.com/api/indie/notification`, {
        //       subID: dataOfHospital[0].email,
        //       appId: 7739,
        //       appToken: 'jtlIlWCJz3YPpspq6l0z8a',
        //       title: 'Ambulance Requested',
        //       message: 'Ambulance has been requested, Please Check.'
        //     });
        //   }
        // });
  
        // check if any request has been cancelled and send notification
        querySnapshot.forEach((doc) => {
          const { requestCancelled } = doc.data();
          if(requestCancelled === "true") {
            registerIndieID(dataOfHospital[0].email, 7739, 'jtlIlWCJz3YPpspq6l0z8a');
            axios.post(`https://app.nativenotify.com/api/indie/notification`, {
              subID: dataOfHospital[0].email,
              appId: 7739,
              appToken: 'jtlIlWCJz3YPpspq6l0z8a',
              title: 'Request Cancelled',
              message: 'One of the Ambulance request has been Cancelled, Please Check.'
            });
          }
        });
        setAllAmbulanceRequest(requestData);
      })
      return unsubscribe;
    } catch (error) {
      console.log(error)
    }
  
  },[reloadPage]);
  

  const reloadThePage = () =>{
    setReloadPage(!reloadPage)
  }

  const acceptRequest = async(docData) =>{
    const userAmbulanceRequestRef = firebase.firestore().collection('users').doc(docData.userId).collection('userAmbulanceRequests').doc(docData.userRequestId);

    try {
      const doc = await userAmbulanceRequestRef.get();
      if (doc.exists) {
        await userAmbulanceRequestRef.update({
          requestStatus: 'accepted',
        });
      } else {
        console.log('Document not found');
      }

      const hospitalRecievedRequestDoc = await hospitalRecievedRequestRef.doc(docData.id).get();
      if (hospitalRecievedRequestDoc.exists) {
        await hospitalRecievedRequestRef.doc(docData.id).update({
          requestStatus: 'accepted',
        });
      } else {
        console.log('Document not found');
      }

      const hospitalRefDoc = await hospitalRef.get();
      if (hospitalRefDoc.exists) {
        await hospitalRef.update({
          numberOfAmbulance: dataOfHospital[0].numberOfAmbulance-1,
        });
      } else {
        console.log('Document not found');
      }
      console.log('Request Accepted.');
      navigation.navigate('HospitalAcceptedRequest');
    } catch (error) {
      console.log(error);
    }
  }

  const declineRequest = async(docData) =>{
    const userAmbulanceRequestRef = firebase.firestore().collection('users').doc(docData.userId).collection('userAmbulanceRequests').doc(docData.userRequestId);
    try {
      const doc = await userAmbulanceRequestRef.get();
      if (doc.exists) {
        await userAmbulanceRequestRef.update({
          requestStatus: 'declined',
        });
      } else {
        console.log('Document not found');
      }

      hospitalRecievedRequestRef.doc(docData.id).delete();
      console.log('Request Deleted.');
    } catch (error) {
      console.log(error);
    }
  }

  const getRequestCancelledStatusOutput = (requestStatus) => {
    if (requestStatus === "false") {
      return "#DAEAFF";
    }else {
      return "red";
    }
  };

  return (
    <View style={styles.container} >
      <Text style={styles.topHeadingText} >Recieved Requests</Text>

      <FlatList
        data={allAmbulanceRequest}
        renderItem={({item:data})=>{
          const requestStatusText = getRequestCancelledStatusOutput(data.requestCancelled);
          return(
            <View style={{...styles.FlatlistContainer, backgroundColor:requestStatusText }} >
              <Text style={styles.flatlistdetailsText} >Name: <Text style={{color:'red'}} >{data.name}</Text></Text>
              <Text style={styles.flatlistdetailsText} >Contact: <Text style={{color:'green'}} >{data.number}</Text></Text>
              <Text style={styles.flatlistdetailsText} >Age: <Text style={{color:'#5060FF'}} >{data.age}</Text></Text>
              <Text style={styles.flatlistdetailsText} >Current Address: <Text style={{color:'#5060FF'}} >{data.currentAddress}</Text></Text>
              <Text style={styles.flatlistdetailsText} >Emergency Contact: <Text style={{color:'#5060FF'}} >{data.emergencyContact}</Text></Text>
              <Text style={styles.flatlistdetailsText} ><Text style={{color:'black'}} >{data.firstQuestion} - </Text><Text style={{color:'green'}} >{data.firstQuestionAnswer}</Text></Text>
              <Text style={styles.flatlistdetailsText} ><Text style={{color:'black'}} >{data.secondQuestion} - </Text><Text style={{color:'green'}} >{data.secondQuestionAnswer}</Text></Text>
              <Text style={styles.flatlistdetailsText} ><Text style={{color:'black'}} >{data.thirdQuestion} - </Text><Text style={{color:'green'}} >{data.thirdQuestionAnswer}</Text></Text>
              <Text style={styles.flatlistdetailsText} ><Text style={{color:'black'}} >{data.fourthQuestion} - </Text><Text style={{color:'green'}} >{data.fourthQuestionAnswer}</Text></Text>
              <Text style={styles.flatlistdetailsText} ><Text style={{color:'black'}} >{data.fifthQuestion} - </Text><Text style={{color:'green'}} >{data.fifthQuestionAnswer}</Text></Text>
              {/* <Text style={styles.flatlistdetailsText} >Requested When: <Text style={{color:'#5060FF'}} >{data.requestedWhen}</Text></Text> */}

                <TouchableOpacity onPress={()=>declineRequest(data)}
                style={{...styles.flatlistTouchableContainer, backgroundColor:"orange", }}>
                    <Text style={styles.flatlistTouchableContainerText}>Decline</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>acceptRequest(data)}
                style={{...styles.flatlistTouchableContainer, backgroundColor:"green", marginLeft:15,}}>
                <Text style={styles.flatlistTouchableContainerText} > Accept</Text>
                </TouchableOpacity>
            </View>
          )
        }}
        ></FlatList>


      <TouchableOpacity
      style={styles.bottomInfoBookTouchable}
      onPress={reloadThePage}
      >
        <Text style={styles.bottomInfoBookTouchableText} >Relaod Page</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={styles.topBackTouchable}
      onPress={()=>navigation.goBack()}
      >
        <Text style={styles.topBackTouchableText} >{"<Back"}</Text>
        {/* <Ionicons name="ios-arrow-back-circle" size={50} color="#148CD0" /> */}
      </TouchableOpacity>

    </View>
  );
}
