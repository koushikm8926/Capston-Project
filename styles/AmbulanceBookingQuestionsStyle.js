import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:"center",
      //justifyContent:"center",
      backgroundColor:"#ffffff",
    },
    topHeadingText:{
      marginVertical:25,
      fontWeight:'bold',
      fontSize:20,
  },
  topBackTouchable:{
    position:'absolute',
    top:10,
    left:20,
    //elevation:10,
    borderRadius:30,
    //shadowColor:'#148CD0',
  },
  topBackTouchableText:{
    marginTop:15,
    // marginLeft:15,
    //fontWeight:'bold',
    fontSize:20,
    color:'blue',
  },
  detailNameText:{
    marginTop:15,
    marginLeft:15,
    //fontWeight:'bold',
    fontSize:20,
  },
  mainDetailsContainer:{
    flex:1,
    width:'100%',
    //backgroundColor:'grey',
  },
  inputValues:{
    marginTop:15,
    marginLeft:15,
    backgroundColor:'#DDE0FF',
    width:'93%',
    borderBottomColor:'grey',
    borderBottomWidth:1,
    padding:8,
    borderRadius:10,
  },
  itemPicker:{
    backgroundColor:'#DDE0FF',
    width:'93%',
    height:48,
    marginTop:15,
    marginLeft:'3.5%',
    borderRadius:10,
    borderBottomColor:'grey',
    borderBottomWidth:1,
  },
  bottomInfoBookTouchable:{
    backgroundColor:'#148CD0',
    width:'100%',
    height:50,
    alignItems:'center',
    justifyContent:'center',
  },
  bottomInfoBookTouchableText:{
    fontWeight:'bold',
    fontSize:25,
    color:'white',
  },
  })

  export default styles;