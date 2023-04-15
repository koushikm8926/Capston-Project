import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/CustomInput/CustomInput";
import Buttons from "../components/CustomButton/CustomButton";

const Otp = ({ navigation, email }) => {
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onResendOtp = () => {
    navigation.navigate('NewPassword')
  };
//   const onConfirm = () => {
//     console.warn('Your Password changed')
//     navigation.navigate('Login')
//   };

  return (
    <View style={styles.root}>
      <Image source={require('../assets/otp.png')} style={styles.img} />
      <Text style={styles.title}>Enter OTP</Text>
      <Text >An 4 digit code has been sent to </Text>
      <Text > {email} </Text>
      {/* <Input
        placeholder="Entert your Password"
        value={code}
        setValue={setCode}
      />
      <Input
        placeholder="Confirm Your Password"
        value={newPassword}
        setValue={setNewPassword}
      /> */}
      {/* <Buttons
        title="Confirm"
        backgroundColor="#2534db"
        onPress={onConfirm}
        color="white"
        style={{ marginVertical: 5 }}
      /> */}
      <Buttons title="Resend OTP" onPress={onResendOtp} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 30,
    marginTop: 60,
    color: "#0d0d0d",
    fontWeight: "900",
    marginVertical: 30,
  },
  img:{
    position: "relative",
    width: 370,
    height: 405,
  }
});

export default Otp;
