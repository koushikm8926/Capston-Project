import React,{useState, useEffect, useRef} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/AmbulanceBookingQuestionsStyle';
import { Ionicons } from '@expo/vector-icons';
import { userData, hospitalData } from '../Recoil/GlobalVariables.js';
import { useRecoilState } from 'recoil';
import {Picker} from '@react-native-picker/picker';
import {firebase} from '../Database/firebase';

export default function AmbulanceBookingQuestions({navigation, route}) {
  const firstQuestion = 'How long have you been Sick?';
  const [firstQuestionAnswer, setFirstQuestionAnswer] = useState('Select');
  const secondQuestion = 'What are your symptoms?';
  const [secondQuestionAnswer, setSecondQuestionAnswer] = useState('');
  const thirdQuestion = 'Do you have a family history of this?';
  const [thirdQuestionAnswer, setThirdQuestionAnswer] = useState('Select');
  const fourthQuestion = 'Do you take any medicines or supplements For the same?';
  const [fourthQuestionAnswer, setFourthQuestionAnswer] = useState('Select');
  const fifthQuestion = 'Have you had any previous surgeries?';
  const [fifthQuestionAnswer, setFifthQuestionAnswer] = useState('Select');
  const [dataOfUser, setDataOfUser] = useRecoilState(userData);
  const [dataOfHospital, setDataOfHospital] = useState([]);
  const hospitalAmbulanceRequestRef = firebase.firestore().collection('hospitals').doc(route.params.documentId).collection('ambulanceRequests');
  const hospitalRef = firebase.firestore().collection('hospitals');
  const userAmbulanceRequestRef = firebase.firestore().collection('users').doc(dataOfUser[0].id).collection('userAmbulanceRequests');
  const authRef = firebase.auth().currentUser;

  useEffect(()=>{
    const unsubscribe = hospitalRef
    .orderBy('createdWhen', 'desc')
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
        const id = doc.id;
        if(id == route.params.documentId){
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
          })
        }
      })
      setDataOfHospital(hospitalData);
    })
    return unsubscribe;
  },[]);

  const bookAmbulance = () => {
    try {
      if(firstQuestionAnswer !=='Select' && secondQuestionAnswer !=='' && thirdQuestionAnswer !=='Select' && fourthQuestionAnswer !=='Select' && fifthQuestionAnswer !=='Select' ){
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();

        const infoForUser = {
          id:dataOfHospital[0].id,
          email:dataOfHospital[0].email,
          name:dataOfHospital[0].name,
          number:dataOfHospital[0].number,
          numberOfAmbulance: dataOfHospital[0].numberOfAmbulance,
          cityName: dataOfHospital[0].cityName,
          HospitalOwnedBy: dataOfHospital[0].HospitalOwnedBy,
          HospitalSpeciality: dataOfHospital[0].HospitalSpeciality,
          additionalContact: dataOfHospital[0].additionalContact,
          requestedWhen: timestamp,
          requestStatus: 'panding',
          hospitalId: route.params.documentId,
        }
        userAmbulanceRequestRef.add(infoForUser)
        .then(docRef => {
          console.log('User ambulance request document ID:', docRef.id);
          const info = {
            requestedWhen: timestamp,
            name: dataOfUser[0].name,
            email: dataOfUser[0].email,
            number: dataOfUser[0].number,
            userId: dataOfUser[0].id,
            userRequestId: docRef.id,
            currentAddress: dataOfUser[0].currentAddress,
            age: dataOfUser[0].age,
            bloodGroup: dataOfUser[0].bloodGroup,
            emergencyContact: dataOfUser[0].emergencyContact,
            firstQuestion: firstQuestion,
            firstQuestionAnswer: firstQuestionAnswer,
            secondQuestion: secondQuestion,
            secondQuestionAnswer: secondQuestionAnswer,
            thirdQuestion: thirdQuestion,
            thirdQuestionAnswer: thirdQuestionAnswer,
            fourthQuestion: fourthQuestion,
            fourthQuestionAnswer: fifthQuestionAnswer,
            fifthQuestion: fifthQuestion,
            fifthQuestionAnswer: fifthQuestionAnswer,
            requestStatus: 'panding',
            requestCancelled: 'false',
          };
          hospitalAmbulanceRequestRef.add(info)
          .then(hospitalDocRef => {
            userAmbulanceRequestRef.doc(docRef.id).update({
              hospitalRequestId:hospitalDocRef.id,
            })
            console.log("Ambulance Requested");
            navigation.navigate('UserRequestStatus');
          })
  
        });

      }
      else{
        alert('Please Answer all the Questions First to Proceed.');
      }

    } catch (error) {
      console.log(error);
    }
  }


  return (
    <View style={styles.container} >
      <Text style={styles.topHeadingText} >Health Condition Update</Text>

      <ScrollView style={styles.mainDetailsContainer} showsVerticalScrollIndicator={false} >
        <Text style={styles.detailNameText} >{firstQuestion}</Text>
        <View style={styles.itemPicker}>
          <Picker
          selectedValue={firstQuestionAnswer}
          onValueChange={(itemValue, itemIndex) => setFirstQuestionAnswer(itemValue)}
          >
          <Picker.Item label="1 Day" value="1 Day" />
          <Picker.Item label="2 Days" value="2 Days" />
          <Picker.Item label="3 Days" value="3 Days" />
          <Picker.Item label="More then 3 Days" value="More then 3 Days" />
          <Picker.Item label="Select" value="Select" />
        </Picker>
        </View>

        <Text style={styles.detailNameText} >{secondQuestion}</Text>
        <TextInput
        style={styles.inputValues}
        placeholder={'Write the Symptoms here.'}
        onChangeText={val=> setSecondQuestionAnswer(val)}
        ></TextInput>

        <Text style={styles.detailNameText} >{thirdQuestion}</Text>
        <View style={styles.itemPicker}>
          <Picker
          selectedValue={thirdQuestionAnswer}
          onValueChange={(itemValue, itemIndex) => setThirdQuestionAnswer(itemValue)}
          >
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
          <Picker.Item label="Select" value="Select" />
        </Picker>
        </View>

        <Text style={styles.detailNameText} >{fourthQuestion}</Text>
        <View style={styles.itemPicker}>
          <Picker
          selectedValue={fourthQuestionAnswer}
          onValueChange={(itemValue, itemIndex) => setFourthQuestionAnswer(itemValue)}
          >
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
          <Picker.Item label="Select" value="Select" />
        </Picker>
        </View>

        <Text style={styles.detailNameText} >{fifthQuestion}</Text>
        <View style={styles.itemPicker}>
          <Picker
          selectedValue={fifthQuestionAnswer}
          onValueChange={(itemValue, itemIndex) => setFifthQuestionAnswer(itemValue)}
          >
          <Picker.Item label="Yes" value="Yes" />
          <Picker.Item label="No" value="No" />
          <Picker.Item label="Select" value="Select" />
        </Picker>
        </View>

      </ScrollView>

      <TouchableOpacity
      style={styles.bottomInfoBookTouchable}
      onPress={bookAmbulance}
      >
        <Text style={styles.bottomInfoBookTouchableText} >Book Ambulance</Text>
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
