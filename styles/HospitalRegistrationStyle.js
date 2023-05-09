import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    lastview:{
        flexDirection:"row", 
        justifyContent:"center", 
        marginBottom:30,
    },
    Icons:{
        marginRight:10,
        padding:5,
    },
    registertext:{
        fontSize:28,
        fontWeight:"500", 
        marginBottom:30,
    },
    textinput:{
        paddingVertical:0,
        flex:1,
    },
    inputview:{
        flexDirection:"row",
        borderBottomColor:"#ccc",
        borderBottomWidth:1,
        paddingBottom:8,
        marginBottom:25,
    },
    loginButton:{
         backgroundColor:"#00c1c1",
         height:50 , 
         color:"white",
         borderRadius:10,
         marginBottom:30,
    },
    loginText:{
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