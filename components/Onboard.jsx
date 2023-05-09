import React from "react";
import { styles } from "../styles/on-board-style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, TouchableOpacity, SafeAreaView, Image,StyleSheet} from "react-native";


export default function Onboard({navigation}){
    

    return(
        <SafeAreaView style={{backgroundColor:'#ffffff',height:1000,}} >   

            <View style={styles.view1}>
            <Text style={styles.ambulance}>Ambulance</Text>
            </View>

            <View style={{alignItems:"center"}}>    
            <Image style={{width: 400, height: 300}} source={require('../images/hospital-animation.gif')} />
            </View>

            <View style={styles.view2}>
            <Text style={styles.text1} >Saving Lives </Text>
            <Text style={styles.text2}>At One CLick!</Text>
            </View>

            {/* <View style={{marginTop:50, justifyContent:"center",alignItems:"center",}}> 
            <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Emergency')}>
            <Ionicons name="arrow-forward" size={20} color="white"></Ionicons>
             </TouchableOpacity>  
            </View>   */}

            <View style={style.lastView}>
                <TouchableOpacity onPress={()=>  navigation.navigate("Emergency")}
                style={{
                backgroundColor:"#02585b", 
                height:50, 
                width:150,  
                justifyContent:"center",
                alignItems:"center",
                borderRadius:10,
                
                }}>
                    <Text style={{color:'white', fontSize: 15, fontWeight: 'bold', }}>Emergency</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>  navigation.navigate("Login")}
                style={{
                backgroundColor:"#4bb7b9", 
                height:50, 
                width:150,  
                justifyContent:"center",
                alignItems:"center",
                borderRadius:10,
                marginLeft:10,
                }}>
                <Text style={{color:'white', fontSize: 15, fontWeight: 'bold', }} > Non Emergency</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    lastView:{
        flexDirection:'row', 
        marginTop:50, 
        justifyContent:"space-between",
        alignItems:"center", 
        marginLeft:45,
        marginRight:50,
    }
})