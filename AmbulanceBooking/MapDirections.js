import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';


const MapDirections = ({navigation}) => {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw` text-center py-5 text-xl  `}>Good Morning,Koushik</Text>
    <View style={tw`border-t border-gray-200 flex-shrink `}>
        <View style={{alignContent:'center',alignItems:'center', marginTop:20,}}>
            <TextInput placeholder='Search Your Destination' style={styles.TextInput}></TextInput>
        </View>
        <View style={{marginTop:20,alignContent:'center',alignItems:'center',}}>
        <TouchableOpacity 
        onPress={()=> navigation.navigate('AmbulanceChoice')}
        style={{   height:40,alignItems:'center',backgroundColor:'black',width:150, borderRadius:10,justifyContent:'center'}}><Text style={{color:'white'}}>Book</Text></TouchableOpacity>
        </View>
    </View>
   


    </SafeAreaView>
  )
}

export default MapDirections

const styles = StyleSheet.create({
    TextInput:{
        backgroundColor:'#CED8D9', 
        width:350, 
        height:50,
        borderRadius:10,
    }

})