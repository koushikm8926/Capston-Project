import React,{useState, useEffect} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Platform, TextInput } from 'react-native';
import { style } from '../styles/UserDetailsStyle';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { userData } from '../Recoil/GlobalVariables.js';
import { useRecoilState } from 'recoil';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';
import {firebase} from '../Database/firebase';
import moment from 'moment/moment';


export default function UserDetailsScreen({navigation}) {
  const [dataOfUser, setDataOfUser] = useRecoilState(userData);
  const [date, setDate] = useState(new Date()); 
  const [visible, setVisible] = useState(false);
  const [emergencyContacts, setEmergencyContacts] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [age, setAge] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('Select');
  const [selectedSex, setSelectedSex] = useState('Select');
  const userRef = firebase.firestore().collection('users');
  const authRef = firebase.auth().currentUser.email;
  const [reloadPage, setReloadPage] = useState(false);

  useEffect(()=>{
    const unsubscribe = userRef
    .orderBy('createdWhen', 'desc')
    .onSnapshot((querySnapshot)=>{
      const users = []
      querySnapshot.forEach((doc) => {
        const { name } = doc.data();
        const { number } = doc.data();
        const { email } = doc.data();
        const { bloodGroup } = doc.data();
        const { sex } = doc.data();
        const { birthDate } = doc.data();
        const { emergencyContact } = doc.data();
        const { currentAddress } = doc.data();
        const { age } = doc.data();
        const id = doc.id;
        const dateObject = moment(birthDate, 'MMMM DD, YYYY [at] hh:mm:ss A [UTC]Z');
        if (email == authRef) {
          users.push({
            id: id,
            email: email,
            name: name,
            number: number,
            bloodGroup: bloodGroup,
            sex: sex,
            birthDate: dateObject,
            emergencyContact: emergencyContact,
            currentAddress: currentAddress,
            age: age,
          });
        }
        //console.log(dateObject);
        if(birthDate){
          console.log('Birth Date Updated')
          setDate(dateObject.toDate());
        }
        if(bloodGroup){
          setSelectedBloodGroup(bloodGroup);
        }
        if(sex){
          setSelectedSex(sex);
        }
        if(emergencyContact){
          setEmergencyContacts(emergencyContact);
        }
        if(currentAddress){
          setCurrentAddress(currentAddress);
        }
        if(age){
          setAge(age);
        }
        // if (dateObject?.toDate() && bloodGroup && sex && emergencyContact) {
        //   setDate(dateObject.toDate());
        //   setSelectedSex(sex);
        //   setSelectedBloodGroup(bloodGroup);
        //   setEmergencyContacts(emergencyContact);
        // }
      });
      
      setDataOfUser(users);
    })
    return unsubscribe;
  },[reloadPage]);

  
  const onChange = (event, value) => {
    const dateObject = moment(value, 'MM/DD/YYYY').toDate();
    console.log(dateObject);
    setDate(value);
    if(Platform.OS==='android'){
        setVisible(false)
    }
}

  const showPicker =()=>{
    setVisible(true)
}

const updateDetails = async () => {
  try {
    const info ={
      bloodGroup: selectedBloodGroup,
      sex: selectedSex,
      // birthDate:date,
      emergencyContact:emergencyContacts, 
      currentAddress: currentAddress,
      age: age,
    }
    await userRef.doc(dataOfUser[0].id).update(info);
    setReloadPage(!reloadPage);
    console.log('Data Updated.');
  } catch (error) {
    console.log(error);
  }
}


  return (
    <View style={style.container}>
      <Text style={style.topHeadingText} >User Details</Text>
      <Image source={require('../images/UserDetailsScreenPNG.png')} style={style.topUserImage} ></Image>
      <ScrollView style={style.mainDetailsContainer} showsVerticalScrollIndicator={false} >
        <Text style={style.detailNameText} >Name</Text>
        <Text style={style.detailValueText}>{dataOfUser[0].name}</Text>
        <Text style={style.detailNameText} >Email</Text>
        <Text style={style.detailValueText}>{dataOfUser[0].email}</Text>
        <Text style={style.detailNameText} >Your Number</Text>
        <Text style={style.detailValueText}>{dataOfUser[0].number}</Text>

        <Text style={style.detailNameText} >Blood Group</Text>
        <View style={style.itemPicker}>
          <Picker
          selectedValue={selectedBloodGroup || dataOfUser[0]?.bloodGroup}
          onValueChange={(itemValue, itemIndex) => setSelectedBloodGroup(itemValue)}
          >
          <Picker.Item label="A RhD positive (A+)" value="A+" />
          <Picker.Item label="A RhD negative (A-)" value="A-" />
          <Picker.Item label="B RhD positive (B+)" value="B+" />
          <Picker.Item label="B RhD negative (B-)" vBlue="B-" />
          <Picker.Item label="O RhD positive (O+)" value="O+" />
          <Picker.Item label="O RhD negative (O-)" value="O-" />
          <Picker.Item label="AB RhD positive (AB+)" value="AB+" />
          <Picker.Item label="AB RhD negative (AB-)" value="AB-" />
          <Picker.Item label="Select" value="Select" />
        </Picker>
        </View>

        <Text style={style.detailNameText} >Sex</Text>
        <View style={style.itemPicker}>
        <Picker
          selectedValue={selectedSex || dataOfUser[0]?.sex}
          onValueChange={(itemValue, itemIndex) =>setSelectedSex(itemValue)}
        >
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
          <Picker.Item label="Other" value="Other" />
          <Picker.Item label="Select" value="Select" />
        </Picker>
        </View>

        {/* <Text style={style.detailNameText} >Birth Date</Text>
        <TouchableOpacity
        onPress={showPicker}
        >
        <Text style={style.detailValueText}>{date.toUTCString().slice(0, -12)}</Text>
        </TouchableOpacity>
        {visible && 
              <DateTimePicker
              value={date}
              mode={'date'}
              display={Platform.OS==='ios' ? 'spinner' :'spinner'}
              onChange={onChange}
              ></DateTimePicker>
        } */}

        <Text style={style.detailNameText} >Your Age</Text>
        <TextInput
        style={style.inputValues}
        value={age!==null? age:'Your Age'}
        placeholder={age!==null? age:'Your Age'}
        onChangeText={val=> setAge(val)}
        ></TextInput>

        <Text style={style.detailNameText} >Current Address</Text>
        <TextInput
        style={style.inputValues}
        value={currentAddress!==null? currentAddress:'Current Address'}
        placeholder={currentAddress!==null? currentAddress:'Current Address'}
        onChangeText={val=> setCurrentAddress(val)}
        ></TextInput>

        <Text style={style.detailNameText} >Emergency Contacts</Text>
        <TextInput
        style={style.inputValues}
        value={emergencyContacts!==null? emergencyContacts:'Emergency Contacts'}
        placeholder={emergencyContacts!==null? emergencyContacts:'Emergency Contacts'}
        onChangeText={val=> setEmergencyContacts(val)}
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
