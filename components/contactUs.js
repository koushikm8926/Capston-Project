import React, { useState } from "react";
import { ScrollView, TextInput } from "react-native";
import { View,Text,TouchableOpacity, Image,SafeAreaView} from "react-native";
import emailjs from '@emailjs/browser';
import styles from "../styles/ContactUs.js";

export default function ContactUs({navigation}){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');


  const sendEmail = () => {
    const serviceId = 'service_930nzzv';
    const templateId = 'template_6r32g7s';
    const userId = 'ikecLH6KBfT-AgQar';
  
    emailjs.send(serviceId, templateId, {
      to_name: 'Recipient Name',
      name: name,
      email: email,
      phone: phone,
      message: message,
    }, userId)
    .then((result) => {
      console.log('Email sent successfully:', result.text);
      alert('Email sent successfully');
      navigation.goBack();
    })
    .catch((error) => {
      console.error('Email failed to send:', error);
    });
   
  };
  
  return(
    <ScrollView>
    <SafeAreaView style={styles.container}>

      <View style={styles.view1}>
        <Image source={{uri:"https://thecapplug.com/img/cms/94599-contact-us.gif"}} style={{ width: "100%",height:250, }}/>
        <Text style={styles.text}>Contact Us</Text>
      </View>

      <View style={styles.view2}>
        <TextInput style={styles.TextInput} placeholder="Name" keyboardType="default" onChangeText={(text) => setName(text)}></TextInput>
        <TextInput style={styles.TextInput} placeholder="Email" keyboardType="default" onChangeText={(text) => setEmail(text)}></TextInput>
        <TextInput style={styles.TextInput} placeholder="Phone Number" keyboardType = "number-pad" onChangeText={(text) => setPhone(text)}></TextInput>
        <TextInput style={styles.TextInput3} placeholder="Massege" keyboardType="default" onChangeText={(text) => setMessage(text)}></TextInput>      
      </View>

      <View style={styles.view3}>
        <TouchableOpacity onPress={sendEmail} style={styles.TouchableOpacity}><Text>Submit</Text></TouchableOpacity>
      </View>
      
    </SafeAreaView>
    </ScrollView>
  );
}
