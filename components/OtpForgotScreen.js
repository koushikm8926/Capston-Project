import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/CustomInput/CustomInput";
import Buttons from "../components/CustomButton/CustomButton";
import { MaterialIcons } from "@expo/vector-icons";

const OtpScreen = ({ navigation, route }) => {
  // const [code, setCode] = useState("");
  // const [newPassword, setNewPassword] = useState("");

  const onResendOtp = () => {
    navigation.navigate("NewPassword");
  };

  return (
    <View style={styles.root}>
      <MaterialIcons name="watch-later" size={30} color="black" />
      <Image source={require("../images/otp.png")} style={styles.img} />
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={{ fontSize: 15 }}>An 4 digit code has been sent to </Text>
      <Text style={{ fontWeight: "800", fontSize: 17, marginVertical: 5 }}>
        {" "}
        {route.params.paramKey}{" "}
      </Text>
      <Buttons title="Resend OTP" onPress={onResendOtp} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    marginTop: 60,
    color: "#0d0d0d",
    fontWeight: "900",
    marginVertical: 10,
  },
  img: {
    position: "relative",
    width: 370,
    height: 405,
  },
});

export default OtpScreen;
