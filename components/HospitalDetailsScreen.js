import React,{useState, useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Platform, TextInput } from 'react-native';
import { style } from '../styles/UserDetailsStyle';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { userData, hospitalData } from '../Recoil/GlobalVariables.js';
import { useRecoilState } from 'recoil';
import {Picker} from '@react-native-picker/picker';
import {firebase} from '../Database/firebase';


export default function HospitalDetailsScreen({navigation}) {
  const [dataOfHospital, setDataOfHospital] = useRecoilState(hospitalData);
  const [additionalContact, setAdditionalContact] = useState('');
  const [numberOfAmbulance, setNumberOfAmbulance] = useState('');
  const [selectedHospitalOwnedBy, setSelectedHospitalOwnedBy] = useState('Select');
  const [selectedHospitalSpeciality, setSelectedHospitalSpeciality] = useState('Select');
  const hospitalRef = firebase.firestore().collection('hospitals');
  const authRef = firebase.auth().currentUser.email;
  const [reloadPage, setReloadPage] = useState(false);

  useEffect(()=>{
    const unsubscribe = hospitalRef
    .orderBy('createdWhen', 'desc')
    .onSnapshot((querySnapshot)=>{
      const users = []
      querySnapshot.forEach((doc) => {
        const { name } = doc.data();
        const { number } = doc.data();
        const { email } = doc.data();
        const { HospitalOwnedBy } = doc.data();
        const { HospitalSpeciality } = doc.data();
        const { additionalContact } = doc.data();
        const { numberOfAmbulance } = doc.data();
        const id = doc.id;
        if (email == authRef) {
          users.push({
            id: id,
            email: email,
            name: name,
            number: number,
            HospitalOwnedBy: HospitalOwnedBy,
            HospitalSpeciality: HospitalSpeciality,
            additionalContact: additionalContact,
            numberOfAmbulance: numberOfAmbulance,
          });
        }
        if(HospitalOwnedBy){
          setSelectedHospitalOwnedBy(HospitalOwnedBy);
        }
        if(HospitalSpeciality){
          setSelectedHospitalSpeciality(HospitalSpeciality);
        }
        if(additionalContact){
          setAdditionalContact(additionalContact);
        }
        if(numberOfAmbulance){
          setNumberOfAmbulance(numberOfAmbulance);
        }
        // if (dateObject?.toDate() && HospitalOwnedBy && HospitalSpeciality && additionalContact) {
        //   setDate(dateObject.toDate());
        //   setSelectedHospitalSpeciality(HospitalSpeciality);
        //   setSelectedHospitalOwnedBy(HospitalOwnedBy);
        //   setAdditionalContact(additionalContact);
        // }
      });
      
      setDataOfHospital(users);
    })
    return unsubscribe;
  },[reloadPage]);

const updateDetails = async () => {
  try {
    const info ={
      HospitalOwnedBy: selectedHospitalOwnedBy,
      HospitalSpeciality: selectedHospitalSpeciality,
      additionalContact:additionalContact, 
      numberOfAmbulance: numberOfAmbulance,
    }
    await hospitalRef.doc(dataOfHospital[0].id).update(info);
    setReloadPage(!reloadPage);
    console.log('Data Updated.');
  } catch (error) {
    console.log(error);
  }
}


  return (
    <View style={style.container}>
      <Text style={style.topHeadingText} >Hospital Details</Text>
      <Image source={require('../images/UserDetailsScreenPNG.png')} style={style.topUserImage} ></Image>
      <ScrollView style={style.mainDetailsContainer} showsVerticalScrollIndicator={false} >
        <Text style={style.detailNameText} >Hospital Name</Text>
        <Text style={style.detailValueText}>{dataOfHospital[0].name}</Text>
        <Text style={style.detailNameText} >Email</Text>
        <Text style={style.detailValueText}>{dataOfHospital[0].email}</Text>
        <Text style={style.detailNameText} >Hospital Number</Text>
        <Text style={style.detailValueText}>{dataOfHospital[0].number}</Text>

        <Text style={style.detailNameText} >Hospital Owned By</Text>
        <View style={style.itemPicker}>
          <Picker
          selectedValue={selectedHospitalOwnedBy || dataOfHospital[0]?.HospitalOwnedBy}
          onValueChange={(itemValue, itemIndex) => setSelectedHospitalOwnedBy(itemValue)}
          >
          <Picker.Item label="Government Hospital" value="Government Hospital" />
          <Picker.Item label="Private Hospital" value="Private Hospital" />
          <Picker.Item label="Select" value="Select" />
        </Picker>
        </View>

        <Text style={style.detailNameText} >Specialty of the Hospital</Text>
        <View style={style.itemPicker}>
        <Picker
          selectedValue={selectedHospitalSpeciality || dataOfHospital[0]?.HospitalSpeciality}
          onValueChange={(itemValue, itemIndex) =>setSelectedHospitalSpeciality(itemValue)}
        >
          <Picker.Item label="Women hospitals" value="Women hospitals" />
          <Picker.Item label="Children hospitals" value="Children hospitals" />
          <Picker.Item label="Cardiac hospitals" value="Cardiac hospitals" />
          <Picker.Item label="Oncology hospitals" value="Oncology hospitals" />
          <Picker.Item label="Psychiatric hospitals" value="Psychiatric hospitals" />
          <Picker.Item label="Trauma centers" value="Trauma centers" />
          <Picker.Item label="Cancer treatment centers" value="Cancer treatment centers" />
          <Picker.Item label="Select" value="Select" />
        </Picker>
        </View>

        <Text style={style.detailNameText} >Total Number of Ambulance</Text>
        <TextInput
        style={style.inputValues}
        value={numberOfAmbulance!==null? numberOfAmbulance.toString():'Total Number of Ambulance'}
        placeholder={numberOfAmbulance!==null? numberOfAmbulance.toString():'Total Number of Ambulance'}
        onChangeText={val=> setNumberOfAmbulance(val)}
        ></TextInput>

        <Text style={style.detailNameText} >Additional Contact Number</Text>
        <TextInput
        style={style.inputValues}
        value={additionalContact!==null? additionalContact:'Additional Contact Number'}
        placeholder={additionalContact!==null? additionalContact:'Additional Contact Number'}
        onChangeText={val=> setAdditionalContact(val)}
        ></TextInput>

      </ScrollView>

      <TouchableOpacity
      style={style.bottomInfoUpdateTouchable}
      onPress={updateDetails}
      >
        <Text style={style.bottomInfoUpdateTouchableText} >Update Details</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={style.topBackTouchable}
      onPress={()=>navigation.goBack()}
      >
        <Text style={style.topBackTouchableText} >{"<Back"}</Text>
        {/* <Ionicons name="ios-arrow-back-circle" size={50} color="#148CD0" /> */}
      </TouchableOpacity>
     </View>
  );
}
