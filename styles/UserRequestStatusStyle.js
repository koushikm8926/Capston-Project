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
  mainDetailsContainer:{
    flex:1,
    width:'100%',
    //backgroundColor:'grey',
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
  FlatlistContainer:{
    backgroundColor:'#DAEAFF',
    margin:10,
    borderRadius:5,
    padding:5,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    elevation:10,
  },
  flatlistdetailsText:{
    color:'black',
    fontSize:15,
    fontWeight:'bold',
    margin:10,
  },
    //Flatlist --TouchabelOpacity
    flatlistTouchableContainer:{
        height:50, 
        width:'45%',  
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
      },
      flatlistTouchableContainerText:{
        color:'white', 
        fontSize: 15, 
        fontWeight: 'bold',
      },
  })

  export default styles;