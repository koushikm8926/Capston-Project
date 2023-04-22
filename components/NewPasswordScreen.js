import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/CustomInput/CustomInput";
import Buttons from "../components/CustomButton/CustomButton";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const NewPassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onBackToSignIn = () => {
    navigation.navigate('Login')
  };
  const onConfirm = () => {
    console.warn('Your Password changed')
    navigation.navigate('Login')
  };

  return (
    <View style={styles.root}>
      <MaterialIcons name="watch-later" size={30} color="black" />
      <Image source={require('../images/reset.png')} style={styles.img} />
      <Text style={styles.title}>Reset your password</Text>
      <View style={styles.view} >
      <Feather name="lock" size={20} color="black" />
      <View style={{flex: 1, marginHorizontal: 10}} >
      <Input
        placeholder="Entert your Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      </View>
      </View>
      <View style={styles.view} >
      <Feather name="lock" size={20} color="black" />
      <View style={{flex:1, marginHorizontal: 10}} >
      <Input
        placeholder="Confirm Your Password"
        value={newPassword}
        setValue={setNewPassword}
        secureTextEntry={true}
      />
      </View>
      </View>
      <Buttons
        title="Confirm"
        backgroundColor="#2534db"
        onPress={onConfirm}
        color="white"
        style={{ marginVertical: 5 }}
      />
      {/* <Buttons title="Back to SignIn" onPress={onBackToSignIn} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    // alignItems: "center",
    padding: 20,
    backgroundColor: '#fff',
    flex:1
  },
  title: {
    fontSize: 30,
    marginTop: 60,
    color: "#0d0d0d",
    fontWeight: "900",
    marginVertical: 30,
  },
  img:{
    width: 385,
    height: 330,
  },
  view:{
    flexDirection: "row",
    alignItems: "center",
  }
});

export default NewPassword;