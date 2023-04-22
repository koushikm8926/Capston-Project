import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Input from "../components/CustomInput/CustomInput";
import Buttons from "../components/CustomButton/CustomButton";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const Forgot = ({ navigation }) => {
  const [email, setEmail] = useState("");

  const onsubmit = () => {
    // console.warn("Verify button pressed");
    navigation.navigate("Otp", {
      paramKey: email
    });
  };
  const onRegister = () => {
    navigation.navigate("Register")
  };

  return (
    <View style={styles.root}>
      <MaterialIcons name="watch-later" size={30} color="black" />
      <Image source={require("../images/forgot.png")} style={styles.img} />
      <Text style={styles.title}>Forgot password?</Text>
      <View style={styles.forgotDes}>
        <Text style={styles.forgotDesLbl}>
          Don't worry! It happens, please enter the address associated with your
          account
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width:"10%", marginVertical: 15}}>
          <Entypo name="email" size={20} color="black" />
        </View>
        <View style={{ flex:1}} >
          <Input
            placeholder="Entert your Email"
            value={email}
            setValue={setEmail}
            style={styles.textInput}
          />
        </View>
      </View>
      <Buttons
        title="Submit"
        backgroundColor="#2534db"
        onPress={onsubmit}
        color="white"
        style={{ marginVertical: 5 }}
      />
      <View style={styles.textView}>
      <Text style={styles.text} >New user? <Text onPress={onRegister} style={{color: "#2534db"}} >Register</Text></Text>
      </View>
      {/* <Buttons title="Back to SignIn" onPress={onBackToSignIn} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1,
  },
  title: {
    fontSize: 40,
    color: "#000",
    fontWeight: "900",
    marginVertical: 30,
  },
  img: {
    position: "relative",
    width: 380,
    height: 320,
  },
  forgotDes: {
    position: "relative",
    bottom: 35,
    marginTop: 15,
  },
  forgotDesLbl: {
    color: "#000",
  },
  textView:{
    alignItems: "center",
    marginTop: 20,
    fontWeight: "700"
  },
  text:{
    fontSize: 15,
    fontWeight: "800",
  }
});

export default Forgot;