import React from "react";
import {View, SafeAreaView, Text, TouchableOpacity, Image, ScrollView, StyleSheet} from "react-native";

export default function DoctorScreen({navigation}){
  return(
    <SafeAreaView >
      <View  >
      <Text style={styles.text1} >Consult Doctors</Text>
      <View style={styles.view1}>
        <Text style={styles.text2} >Say Hello Doctor</Text>
        <Text style={styles.text3}>20% OFF  <Text style={{color:'white'}}>on </Text> </Text>
        <Text style={styles.text4} >first video consultation</Text>
        <TouchableOpacity style={styles.button1} > 
          <Text style={styles.buttonText1}>See Doctor Now</Text> 
          </TouchableOpacity>
          <Image  style={styles.image1}
          source={require('../images/doctor.jpeg')} />
        </View>

        <View style={styles.view2} >
          <Text style={styles.text5} >Medical Specialties</Text>

            <View style={styles.view3}>
              <TouchableOpacity style={styles.button2}>

              <Image 
              style={styles.image2}
              source={require('../images/pregnant.png')}/>
              </TouchableOpacity>
              <Text style={{textAlign:'center' }} >Women's Health</Text>
            </View>


        <View style={styles.view4}>
              <TouchableOpacity style={styles.button2}>

              <Image 
              style={styles.image2}
              source={require('../images/sexio.jpeg')}/>
              </TouchableOpacity>
              <Text style={{textAlign:'center' }} >Sexology</Text>
            </View>

        <View style={styles.view5}>
              <TouchableOpacity style={styles.button2}>

              <Image 
              style={styles.image2}
              source={require('../images/hair.jpeg')}/>
              </TouchableOpacity>
              <Text style={{textAlign:'center' }} >Skin & Hair</Text>
            </View>


        <View style={styles.view6}>
              <TouchableOpacity style={styles.button2}>

              <Image 
              style={styles.image2}
              source={require('../images/digest.png')}/>
              </TouchableOpacity>
              <Text style={{textAlign:'center' }} >Digestion</Text>
            </View>


            <View style={styles.view7}>
              <TouchableOpacity style={styles.button2}>

              <Image 
              style={styles.image2}
              source={require('../images/baby.jpeg')}/>
              </TouchableOpacity>
              <Text style={{textAlign:'center' }} >Child Specialist</Text>
            </View>


        <View style={styles.view8}>
              <TouchableOpacity style={styles.button2}>

              <Image 
              style={styles.image2}
              source={require('../images/plus_sign.jpeg')}/>
              </TouchableOpacity>
              <Text style={{textAlign:'center' }} >Psychiatry</Text>
            </View>

            <View style={styles.view9}>
              <TouchableOpacity style={styles.button2}>

              <Image 
              style={styles.image2}
              source={require('../images/stethscope.png')}/>
              </TouchableOpacity>
              <Text style={{textAlign:'center' }} >General Physician</Text>
            </View>


        <View style={styles.view10}>
              <TouchableOpacity style={styles.button2}>

              <Image 
              style={styles.image2}
              source={require('../images/teeth.jpeg')}/>
              </TouchableOpacity>
              <Text style={{textAlign:'center' }} >Dental Solution</Text>
            </View>
        </View>

        <View style={{marginLeft:15, marginTop:20}} >
          <Text style={{fontSize:23, fontWeight:'bold',}} >Common Health Issues</Text>
          <ScrollView horizontal={true} 
                      showsHorizontalScrollIndicator={false}>

            
            <TouchableOpacity style={styles.button3}> 
              <Text style={styles.buttonText2}>Cold & Cough</Text>
              <Text style={styles.buttonText3}>$12.99 <Text style={{fontSize:12}}>$20.99</Text> </Text>
              
               </TouchableOpacity>

            <TouchableOpacity style={styles.button4}> 
            <Text style={styles.buttonText2}>Irregular Period</Text>
              <Text style={styles.buttonText3}>$12.99 <Text style={{fontSize:12}}>$20.99</Text> </Text>
               </TouchableOpacity>

            <TouchableOpacity style={styles.button5}> 
            <Text style={styles.buttonText2}>Blood Pressure</Text>
              <Text style={styles.buttonText3}>$12.99 <Text style={{fontSize:12}}>$20.99</Text> </Text>
               </TouchableOpacity>
               
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  text1:{
    marginTop:15, 
    marginLeft:40, 
    fontSize:20,
    fontWeight:'bold'
  },
  view1:{
    height:170, 
    width:360, 
    marginLeft:15, 
    marginTop:10, 
    backgroundColor:'#2166cf', 
    borderRadius:20, 
  },
  text2:{
    marginTop:15, 
    marginLeft:20, 
    fontSize:25, 
    color:'white', 
    fontWeight:'bold',
  },
  text3:{
    marginTop:10, 
    marginLeft:20, 
    color:'#4895dd', 
    fontSize:15, 
    fontWeight:'bold',
  },
  text4:{
    marginLeft:20, 
    color:'white',
  },
  button1:{
    height:30, 
    width:120, 
    marginLeft:20, 
    marginTop:20,
    backgroundColor:'#22c0f0', 
    borderRadius:8, 
    alignItems:'center', 
    justifyContent:'center',
  },
  buttonText1:{
    color:'white', 
    fontWeight:'bold',
  },
  image1:{
    height:151, 
    width:90, 
    marginTop:-130, 
    marginLeft:250,
  },
  view2:{
    height:300, 
    width:360, 
    marginLeft:15, 
    marginTop:45,
  },
  text5:{
    fontSize:25, 
    fontWeight:'bold',
  },
  view3:{
    height:50, 
    width:80, 
    marginTop:20, 
    textAlign:'center',
  },
  button2:{
    height:80, 
    width:80, 
    marginLeft:10, 
    backgroundColor:'lightblue', 
    alignItems:'center',
    justifyContent:'center' ,
    borderRadius:20,
  },
  image2:{
    height:50,
     width:50, 
    },
  view4:{
    height:50, 
    width:80, 
    marginTop:90, 
    textAlign:'center',
  },
  view5:{
    height:50, 
    width:80, 
    marginTop:-190, 
    marginLeft:90, 
    textAlign:'center',
  },
  view6:{
    height:50, 
    width:80, 
    marginTop:90, 
    marginLeft:90, 
    textAlign:'center',
  },
  view7:{
    height:50, 
    width:80, 
    marginTop:-190, 
    marginLeft:180, 
    textAlign:'center',
  },
  view8:{
    height:50, 
    width:80, 
    marginTop:90, 
    marginLeft:180, 
    textAlign:'center',
  },
  view9:{
    height:50, 
    width:80, 
    marginTop:-190, 
    marginLeft:270, 
    textAlign:'center',
  },
  view10:{
    height:50, 
    width:80, 
    marginTop:90, 
    marginLeft:270, 
    textAlign:'center',
  },
  button3:{
    height:160, 
    width:150, 
    backgroundColor:'#95A6FE', 
    borderRadius:15, 
    marginTop:10,
  },
  buttonText2:{
    marginLeft:15, 
    marginTop:12, 
    fontWeight:'bold', 
    fontSize:17 , 
    color:'#E4EFFF',
  },
  buttonText3:{
    marginLeft:15,
    fontSize:15,
    color:'#E4EFFF', 
  },
  button4:{
    height:160, 
    width:150, 
    backgroundColor:'#7DCEBF', 
    borderRadius:15, 
    marginTop:10, 
    marginLeft:10, 
  },
  button5:{
    height:160, 
    width:150, 
    backgroundColor:'#E97E6C', 
    borderRadius:15, 
    marginTop:10, 
    marginLeft:10, 
  },
})
