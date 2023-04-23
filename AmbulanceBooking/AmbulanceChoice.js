import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity, FlatList,Image} from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/FontAwesome';

const data=[
  {
    id:1,
    title:'Govt Ambulance',
    fees:150,
    image:"https://media.istockphoto.com/id/1220007145/vector/an-ambulance-travels-to-call-a-sick-patient.jpg?s=170667a&w=0&k=20&c=U_xq_cUVYdzYJKay_YLGlVVxIS6XYF50mrWnFNm60wU=",
  },
  {
    id:2,
    title:'Private Ambulance',
    fees:405,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTJNMnSUQPrJE1A-EDYDmA-vSReOJDeTyHeA&usqp=CAU',
  },
  {
    id:3,
    title:'Private Ambulance',
    fees:600,
    image:'https://cdn.dribbble.com/users/1481285/screenshots/6084001/___.gif', 
  }
]

const AmbulanceChoice = ({navigation}) => {
  return (
    <SafeAreaView>
    <View>
        <TouchableOpacity 
        onPress={()=>navigation.navigate("MapDirections") }
        style={tw`absolute top-3 left-5 z-50 p-3 rounded-full bg-blue-500 `}>
            <Icon name="chevron-left" type="fontawesome"/>
        </TouchableOpacity>
            <Text style={tw`text-center py-5 text-xl font-semibold`} >Ambulance Choice</Text>
    </View>
    <View>
      <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={ ({item:{id,title,fees,image}, item})=>(
       
        <TouchableOpacity style={tw`flex-row  justify-between items-center px-10 `}>
          <Image
          style={{height:100,
          width:100, 
          resizeMode:'contain',
          borderRadius:10,
          
          }}
          source={{uri: image}}
          />

        <View>
          <Text>{title}</Text>
          <Text></Text>
        </View>
        
          <Text>{fees}</Text>

        </TouchableOpacity>
       
      ) }
      />
    </View>
    
    <View style={{alignItems:'center', justifyContent:"center"}}>
     <TouchableOpacity style={{backgroundColor:"black",width:300,height:45,borderRadius:10,alignItems:'center',justifyContent:"center"}} ><Text style={{color:"white"}}>Pay & Book</Text></TouchableOpacity>
    </View>

    </SafeAreaView>
  )
}

export default AmbulanceChoice
