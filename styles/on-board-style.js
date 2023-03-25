import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    
    view1:{
        marginTop:100,
        justifyContent:"center",
        alignItems:"center",
    },
    ambulance:{
        fontSize:34,
        fontWeight:'bold', 
    },
    view2:{
        marginTop:100,
        justifyContent:"center",
        alignItems:"center",
    },
    text2:{
        fontSize:34,
        fontWeight:'bold', 
        color:'blue',
    },
    text1:{
        fontSize:34,
        fontWeight:'bold', 
        color:'red',
    },
    TouchableOpacity:{
                backgroundColor:"black", 
                    justifyContent:"center",
                    alignItems:"center",
                    height: 60,
                    width: 60,
                    borderRadius: 30,
    },

})

export { styles };