import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    TextInput:{
        paddingVertical:0,
        flex:1,
    },
    loginText:{
        fontSize:28,
        fontWeight:"500", 
        marginBottom:30,
    },
    lastview:{
        flexDirection:"row", 
        justifyContent:"center", 
        marginBottom:30,
    },
    inputview:{
        flexDirection:"row",
            borderBottomColor:"#ccc",
            borderBottomWidth:1,
            paddingBottom:8,
            marginBottom:25,
    },
    loginButton:{
         backgroundColor:"#42DAFF",
         height:50 , 
         color:"white",
         borderRadius:10,
         marginBottom:30,
    },
    loginbuttonText:{
                fontWeight:"700", 
                fontSize:16,
                textAlign:"center",
                color:"white",
                marginTop:10,
    },
    register:{
        textDecorationLine: 'underline',
        fontWeight:'bold',
        marginLeft:10,
    },
})

export {styles}