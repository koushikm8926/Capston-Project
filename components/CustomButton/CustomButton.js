import React from "react";
import { View, StyleSheet, Text, Button, TouchableOpacity } from "react-native";

export default function Buttons ({ title, onPress, type, backgroundColor, color })  {
  return (
    <View style={[styles.container, backgroundColor={backgroundColor}]} >
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.text, color={color}]} > {title} </Text>
      </TouchableOpacity>
      {/* <Button title={title} onPress={onPress} />
      <TouchableOpacity onPress={console.warn('Forgot Password')} >
        <Text> {title} </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 5,
    alignItems: "center",
    marginVertical: 5,
    padding: 8,
    borderRadius: 15,
    marginTop: 20,
    backgroundColor:"#2534db"

  },
  text: {
    fontWeight: "800",
    color: "black",
  },
});

// export default Buttons;
