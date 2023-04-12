import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Input from "../components/CustomInput/CustomInput";
import Buttons from "../components/CustomButton/CustomButton";

const Forgot = ({ navigation }) => {
  const [code, setCode] = useState("");
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
      <Text style={styles.title}>Reset your password</Text>
      <Text style={{ marginVertical: 5 }}>New Password*</Text>
      <Input
        placeholder="Entert your Password"
        value={code}
        setValue={setCode}
      />
      <Text style={{ marginVertical: 5 }}>Confirm Password*</Text>
      <Input
        placeholder="Confirm Your Password"
        value={newPassword}
        setValue={setNewPassword}
      />
      <Buttons
        title="Confirm"
        backgroundColor="#f0cf65"
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
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 30,
    marginTop: 60,
    color: "#5824d1",
    fontWeight: "bold",
    marginVertical: 30,
  },
});

export default Forgot;
