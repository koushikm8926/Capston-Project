import { View,Text,StyleSheet,TouchableOpacity } from "react-native";

export default function Emergency({navigation}){
    return(
        <View style={styles.container}>

        <View style={styles.button_view}>
        <TouchableOpacity><Text style={styles.text}>EMERGENCY</Text></TouchableOpacity>
        </View>

        <View style={styles.button_view}>
        <TouchableOpacity onPress={()=> navigation.navigate('Login')} ><Text style={styles.text}>NORMAL</Text></TouchableOpacity>
        </View>


</View>
);
}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:'center',
marginTop:400,
flexDirection:'row',

},

text:{
fontSize:25,
fontWeight:'500',
color:'red',
},
button_view:{
backgroundColor:'#D4EAEC',
width:190,
height:100,
justifyContent:'center',
alignItems:"center",
marginRight:10,

}

});
    