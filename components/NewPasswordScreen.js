import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/CustomInput/CustomInput";
import Buttons from "../components/CustomButton/CustomButton";

const NewPassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onBackToSignIn = () => {
    console.warn("Go to LogIn");
    navigation.navigate('Login')
  };
  const onConfirm = () => {
    console.warn('Your Password changed')
    navigation.navigate('Login')
  };

  return (
    <View style={styles.root}>
      <Image source={require('../assets/reset.png')} style={styles.img} />
      <Text style={styles.title}>Reset your password</Text>
      {/* <Text style={{ marginVertical: 5 }}>New Password*</Text> */}
      <Input
        placeholder="Entert your Password"
        value={password}
        setValue={setPassword}
        secureTextEntry={true}
      />
      {/* <Text style={{ marginVertical: 5 }}>Confirm Password*</Text> */}
      <Input
        placeholder="Confirm Your Password"
        value={newPassword}
        setValue={setNewPassword}
        secureTextEntry={true}
      />
      <Buttons
        title="Confirm"
        backgroundColor="#2534db"
        onPress={onConfirm}
        color="white"
        style={{ marginVertical: 5 }}
      />
      <Buttons title="Back to SignIn" onPress={onBackToSignIn} />
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
    width: 370,
    height: 405,
  }
});

export default NewPassword;