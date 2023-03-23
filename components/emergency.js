import { View,Text,StyleSheet,TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Emergency({navigation}){
    return(

<View>
        <View style={{marginTop:150,alignItems:'center',}}>
        <Text style={styles.text1}>Click button below during emergencies.</Text>
        </View>

        <View style={{justifyContent:'center',alignItems:"center",marginTop:30,}}>
              <TouchableOpacity>
                <View style={{backgroundColor:'red', height:150,width:150,borderRadius:80,justifyContent:'center',alignItems:"center", }}>
                <Icon name="hospital" size={100} color="white" />
                </View>
              </TouchableOpacity>
        </View>

        <View style={{marginTop:20,justifyContent:'center', alignItems:"center",}}>
            <Text style={{fontSize:30, fontWeight:'500'}}>OR</Text>
        </View>

    <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={styles.button} >
            <Text style={styles.text}>Continue</Text>
            </TouchableOpacity>
    </View>


</View>
);
}

const styles = StyleSheet.create({

    container:{
    flex:1,
    justifyContent:'center',
    marginTop:100,
    alignItems:'center',

    },

    text1:{
        fontSize:20,
        fontWeight:'500',
        color:'blue',  
    },

    text:{
    fontSize:25,
    fontWeight:'500',
    color:'white',
    },

    button:{
        backgroundColor:'black',
        height:50,
        width:300,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:25,
    }
});
    