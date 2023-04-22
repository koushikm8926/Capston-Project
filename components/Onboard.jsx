import React from "react";
import { styles } from "../styles/on-board-style";
import Ionicons from "react-native-vector-icons/Ionicons";
import { View, Text, TouchableOpacity, SafeAreaView, Image} from "react-native";
import { Hospitalanimation } from "../images/images";


export default function Onboard({navigation}){
    return(
        <SafeAreaView style={{backgroundColor:'#ffffff',height:1000,}} >   

            <View style={styles.view1}>
            <Text style={styles.ambulance}>Ambulance</Text>
            </View>

            <View style={{alignItems:"center"}}>    
            <Image style={{width: 400, height: 300}} source={Hospitalanimation} />
            </View>

            <View style={styles.view2}>
            <Text style={styles.text1} >Saving Lives </Text>
            <Text style={styles.text2}>At One CLick!</Text>
            </View>

            <View style={{marginTop:50, justifyContent:"center",alignItems:"center",}}> 
            <TouchableOpacity style={styles.TouchableOpacity} onPress={() => navigation.navigate('Emergency')}>
            <Ionicons name="arrow-forward" size={20} color="white"></Ionicons>
             </TouchableOpacity>  
            </View>  

        </SafeAreaView>
    );
}
