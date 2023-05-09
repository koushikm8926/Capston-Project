import React,{useState, useEffect} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/HospitalAcceptedRequestStyle.js';
import { Ionicons } from '@expo/vector-icons';
import { hospitalData } from '../Recoil/GlobalVariables.js';
import { useRecoilState } from 'recoil';
import {firebase} from '../Database/firebase';
import moment from 'moment/moment';
import registerNNPushToken, { getPushDataObject, registerIndieID }  from 'native-notify';
import axios from 'axios';

export default function HospitalAcceptedRequest({navigation}) {
  const [dataOfHospital, setDataOfHospital] = useRecoilState(hospitalData);
  const [allAmbulanceRequest, setAllAmbulanceRequest] = useState([]);
  const [reloadPage, setReloadPage] = useState(false);
  const hospitalRecievedRequestRef = firebase.firestore().collection('hospitals').doc(dataOfHospital[0].id).collection('ambulanceRequests');
  const hospitalAcceptedRequestRef = firebase.firestore().collection('hospitals').doc(dataOfHospital[0].id).collection('acceptedRequests');
  const hospitalRef = firebase.firestore().collection('hospitals').doc(dataOfHospital[0].id);

  useEffect(()=>{
    try {
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
          if(requestStatus==='accepted'){
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

  const completedRequest = async(docId) =>{
    const hospitalRefDoc = await hospitalRef.get();
    try {
      if (hospitalRefDoc.exists) {
        await hospitalRef.update({
          numberOfAmbulance: dataOfHospital[0].numberOfAmbulance + 1,
        });
      } else {
        console.log('Document not found');
      }

      hospitalRecievedRequestRef.doc(docId).delete();
      console.log('Request Completed.');
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
      <Text style={styles.topHeadingText} >Accepted Requests</Text>

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

                <TouchableOpacity onPress={()=>completedRequest(data.id)}
                style={{...styles.flatlistTouchableContainer, backgroundColor:"green", }}>
                    <Text style={styles.flatlistTouchableContainerText}>Completed</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={acceptRequest}
                style={{...styles.flatlistTouchableContainer, backgroundColor:"green", marginLeft:15,}}>
                <Text style={styles.flatlistTouchableContainerText} > Accept</Text>
                </TouchableOpacity> */}
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
