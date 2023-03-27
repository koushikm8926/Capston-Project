import { View,StyleSheet,Image,Text, TouchableOpacity} from "react-native";
import { avtar } from "../images/images";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Emergency({navigation}){
   
    return(
<View>
    <View  style={{marginTop:50, flexDirection:'row' }}>
        <View >
            <Image source={avtar} style={styles.avtar}></Image> 
        </View>
       
        <View style={{flexDirection:'column', marginLeft:10, marginTop:12,}}>
            <Text style={{fontWeight:'500',  }} >Hello User!</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("Register")}>
            <Text style={{fontWeight:'bold', fontSize:15, color:'red' }}>Complete your profile</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginLeft:40, flexDirection:'column'}}>
            
            <Ionicons name="location" size={20} color="red"  style={{marginRight:10,padding:5, }}>
                <Text style={{color:'black', fontSize:15, marginRight:10,}}>London,Uk</Text>
            </Ionicons>
            <TouchableOpacity>
            <Text style={{fontWeight:'bold', fontSize:15, color:'red' }} >See your location</Text>
            </TouchableOpacity>
        </View>
    </View>

        <View style={styles.view2}>
            <Text style={styles.text} >Emergency help</Text>
            <Text style={styles.text}>needed!</Text>
        </View>

        <View style={styles.view3}>
            <Text style={{fontSize:15, fontWeight:'300', color:'grey',}}>just hold the button to call</Text>
        </View>

        <View style={{marginTop:20,alignItems:'center',}}>
            <TouchableOpacity style={{height:200, width:200, borderRadius:100,backgroundColor:'red', justifyContent:'center',alignItems:'center',}}>
            <Ionicons name="call" size={100} color="white"  style={{marginRight:10,padding:5, color:'white', }}></Ionicons>
            </TouchableOpacity>
        </View>

        <View style={{marginTop:30, alignItems:'center',justifyContent:'center',}}>
            <Text style={{fontSize:25, fontWeight:'500',}}>Not sure what to do</Text>
            <Text style={{marginTop:10, color:'grey', fontSize:15,}}>Pick the subject to chat</Text>
        </View>

     
        <View style={{flexDirection:'row', marginTop:20,}}>
          
            <View style={{backgroundColor:'grey',marginLeft:10,borderRadius:20, height:100, width:150,}}>
                <Text>hello</Text>
            </View>

            <View style={{backgroundColor:'grey',marginLeft:10,borderRadius:20, height:100, width:150,}}>
                <Text>hello</Text>
            </View>
            
            <View style={{backgroundColor:'grey',marginLeft:10,borderRadius:20, height:100, width:150,}}>
                <Text>hello</Text>
            </View>
            
        </View>
      

</View>


    );
    }

const styles = StyleSheet.create({

avtar:{
    height:60,
    width:60,
    borderRadius:10,
    marginLeft:10,
},

view2:{
    marginTop:50,
    alignItems:'center',
},

text:{
    fontSize:40,
    fontWeight:'500',
},

view3:{
    alignItems:'center',
    marginTop:10,
}


});
    