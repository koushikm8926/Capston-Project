import React,{useState, useEffect} from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/AllHospitalAvilableStyle';
import { Ionicons } from '@expo/vector-icons';
import {firebase} from '../Database/firebase';
import { userData, hospitalData, allHospitalData, SearchInput, FilterSearchItemsSelector } from '../Recoil/GlobalVariables.js';
import { useRecoilState } from 'recoil';

export default function AllHospitalAvilable({navigation}) {
    const [everyHospitalData, setEveryHospitalData] = useRecoilState(allHospitalData);
    const [searchInput, setSearchInput] = useRecoilState(SearchInput);
    const [dataHeadingSearch, setDataHeadingSearch] = useRecoilState(FilterSearchItemsSelector);
    const hospitalRef = firebase.firestore().collection('hospitals');

    useEffect(()=>{
        try {
            const unsubscribe = hospitalRef
            .onSnapshot((querySnapshot)=>{
                const dataFetched = []
                querySnapshot.forEach((doc)=>{
                  const {name} =doc.data()
                  const {number} = doc.data()
                  const {numberOfAmbulance} = doc.data() 
                  const {cityName} =doc.data()
                  const {HospitalSpeciality} = doc.data()
                  const {HospitalOwnedBy} = doc.data() 
                  if(numberOfAmbulance>0){
                    dataFetched.push({
                      id:doc.id,
                      name,
                      number,
                      numberOfAmbulance,
                      cityName,
                      HospitalSpeciality,
                      HospitalOwnedBy,
                    })
                  }
                })
                setEveryHospitalData(dataFetched)
              })

              return unsubscribe;

        } catch (error) {
            console.log(error)
        }

    },[]);


  return (
    <View style={styles.container} >
      <Text style={styles.topHeadingText} >Choose a Hospital</Text>

      <View style={styles.inputview}> 
        <Ionicons name="search" size={20} color="blue" style={styles.Icons} />
        <TextInput 
          style={{paddingVertical:0,flex:1,}} 
          placeholder='Search By City Name. i.e Delhi'
          onChangeText={val=>setSearchInput(val)}
          keyboardType="default"
        />       
      </View> 

      <FlatList
        data={dataHeadingSearch}
        renderItem={({item:dataHeading})=>(

          <FlatList
          data={everyHospitalData}
          renderItem={({item:data})=>{
            {if(dataHeading == data.cityName ){
              return(
                <TouchableOpacity onPress={()=>navigation.navigate('AmbulanceBookingQuestions', {documentId:data.id})} style={styles.FlatlistContainer} >
                  <Text style={styles.flatlistdetailsText} >Name: <Text style={{color:'red'}} >{data.name}</Text></Text>
                  <Text style={styles.flatlistdetailsText} >Contact: <Text style={{color:'green'}} >{data.number}</Text></Text>
                  <Text style={styles.flatlistdetailsText} >Ambulance Avilable: <Text style={{color:'#5060FF'}} >{data.numberOfAmbulance}</Text></Text>
                  <Text style={styles.flatlistdetailsText} >City: <Text style={{color:'#5060FF'}} >{data.cityName}</Text></Text>
                  <Text style={styles.flatlistdetailsText} >Hospital Speciality: <Text style={{color:'#5060FF'}} >{data.HospitalSpeciality}</Text></Text>
                  <Text style={styles.flatlistdetailsText} >Hospital Owned By: <Text style={{color:'#5060FF'}} >{data.HospitalOwnedBy}</Text></Text>
                </TouchableOpacity>
              )
            }}

          }}
          ></FlatList>
        )}
      ></FlatList>

      {/* <TouchableOpacity
      style={styles.bottomInfoBookTouchable}
      onPress={()=>navigation.navigate('AmbulanceBookingQuestions')}
      >
        <Text style={styles.bottomInfoBookTouchableText} >Move</Text>
      </TouchableOpacity> */}

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
