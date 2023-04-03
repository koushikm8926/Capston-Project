import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity,  Modal,  } from 'react-native';
import { question } from '../images/images.js';
import { medicine } from '../images/images.js';
import { Labtest } from '../images/images.js';
import styleHome from '../styles/home style.js';
import { Message } from '../images/images.js';
import { siren } from '../images/images.js';
import { medikit } from '../images/images.js';
import { avtar } from '../images/images.js';

export default function Home ({navigation}) {
  state = {
    isVisible: false, 
  }
 
    return (
      <SafeAreaView style={styleHome.container}>
        <Modal

          animationType={"slide"}
          transparent={true}
          visible={this.state.isVisible}

        >

<View style={styleHome.modal}>
          <View>
    
            
            <TouchableOpacity onPress={() => {
              this.setState({ isVisible: !this.state.isVisible })
            }}>
              <Text style={styleHome.modalHeaderCloseText}>X</Text>
            </TouchableOpacity>
  <Text style={styleHome.modalText}>Calling an ambulance for...</Text>
          </View>
          <View style={styleHome.modalIamgeView}>
            <Image
              style={styleHome.modalImage1}
              source={avtar}
            />
            <Image
              style={styleHome.modalImage2}
              source={avtar}
            />
          </View>
        
            <Text style={styleHome.modalText2}>Yourself</Text>
            <Text style={styleHome.modalText3} >Others</Text>
          
          <View style={styleHome.buttonStyle}>
            <TouchableOpacity >
              <Text style={styleHome.modalText4}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity >
              <Text style={styleHome.modalText5}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Modal>

        <View style={styleHome.view1}>

          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.tEACzM2yJXb9jWy_KiKv_QHaHz?pid=ImgDet&w=1862&h=1963&rs=1' }} style={styleHome.logo1} ></Image>

          <Image source={medikit} style={styleHome.logo2} ></Image>
        </View>
        <Text style={styleHome.hello} >Hello, Gagandeep!</Text>

        <View style={styleHome.view2} >
          <View style={styleHome.innerView1} >
            <TouchableOpacity onPress={() => { this.setState({ isVisible: true }) }}>
              <Image source={medikit} style={styleHome.image} ></Image></TouchableOpacity>
            <Text style={styleHome.text}>Find a Doctor</Text>
            <Text>200+ Doctors</Text>
          </View>

          <View style={styleHome.innerView2} >
            <TouchableOpacity onPress={ ()=> navigation.navigate("DetailsPage")}>
              <Image source={siren} style={styleHome.image} ></Image></TouchableOpacity>
            <Text style={styleHome.text}>Ambulance</Text>
            <Text>For Your Help</Text>
          </View>

          <View style={styleHome.innerView3} >
            <TouchableOpacity onPress={() => { this.setState({ isVisible: true }) }}>
              <Image source={Message} style={styleHome.image} ></Image></TouchableOpacity>
            <Text style={styleHome.text}>Message</Text>
          </View>

          <View style={styleHome.innerView4} >
            <TouchableOpacity onPress={() => { this.setState({ isVisible: true }) }}>
              <Image source={Labtest} style={styleHome.image} ></Image></TouchableOpacity>
            <Text style={styleHome.text}>Lab Test</Text>
            <Text>Sample Collection</Text>
          </View>

          <View style={styleHome.innerView5} >
            <TouchableOpacity onPress={() => { this.setState({ isVisible: true }) }}>
              <Image source={medicine} style={styleHome.image} ></Image></TouchableOpacity>
            <Text style={{ fontWeight: 'bold' }}>Medicines</Text>
            <Text>Add/Refill</Text>
          </View>

          <View style={styleHome.innerView6} >
            <TouchableOpacity onPress={() => { this.setState({ isVisible: true }) }}>
              <Image source={question} style={styleHome.image} ></Image></TouchableOpacity>
            <Text style={styleHome.text}>Help</Text>
          </View>
        </View>

        
      </SafeAreaView>
    )
  }
