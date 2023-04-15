import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";

export default function Input({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  type,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        // style={styles.input}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#c0d6fa",
    // width: "100%",
    // borderColor: "black",
    // borderWidth: 1,
    // borderRadius: 5,
    // paddingHorizontal: 10,
    // marginVertical: 5,
    borderBottomColor: "#aaa",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    color: "#000",
    fontSize: 16,
    // fontFamily: Fonts.type.NotoSansMedium,
    height: 40,
    flex: 1
  },
  input: {},
});

// export default Input;
