import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity,  Modal,  } from 'react-native';
import { question } from '../images/images.js';
import { medicine } from '../images/images.js';
import { Labtest } from '../images/images.js';
import { Message } from '../images/images.js';
import { siren } from '../images/images.js';
import { medikit } from '../images/images.js';
import { avtar } from '../images/images.js';
import {self} from '../images/images.js';
import {profile} from '../images/images.js';
import styleHome from '../styles/home style.js';


export default class Home extends Component {
  state = {
    isVisible: false, 
  }
  render() {
    return (
      <SafeAreaView style={styleHome.container}>
        <View style={styleHome.vmain}>
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
              source={self}
            />
            <Image
              style={styleHome.modalImage2}
              source={avtar}
            />
          </View>
        
            <Text style={styleHome.modalText2}>Yourself</Text>
            <Text style={styleHome.modalText3}>Others</Text>
          
          <View style={styleHome.buttonStyle}>
            <TouchableOpacity >
              <Text style={styleHome.modalText4}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              this.setState({ isVisible: !this.state.isVisible })
            }}>
              <Text style={styleHome.modalText5}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        </Modal>

        <View style={styleHome.view1}>

          <Image source={{ uri: 'https://th.bing.com/th/id/OIP.tEACzM2yJXb9jWy_KiKv_QHaHz?pid=ImgDet&w=1862&h=1963&rs=1' }} style={styleHome.logo1} ></Image>

          <Image source={profile} style={styleHome.logo2} ></Image>
        </View>
        <Text style={styleHome.hello} >Hello, Gagandeep!</Text>

        <View style={styleHome.view2}>

            <TouchableOpacity onPress={() => { this.setState({ isVisible: true }) }}>
          <View style={styleHome.innerView1}>
              <Image source={medikit} style={styleHome.image} ></Image>
            <Text style={styleHome.text}>Find a Doctor</Text>
            <Text>200+ Doctors</Text>
          </View>
              </TouchableOpacity>

            <TouchableOpacity onPress={ ()=>{ this.setState({ isVisible: true })}}>
          <View style={styleHome.innerView2} >
              <Image source={siren} style={styleHome.image} ></Image>
            <Text style={styleHome.text}>Ambulance</Text>
            <Text>For Your Help</Text>
          </View>
              </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.setState({ isVisible: true }) }}>
          <View style={styleHome.innerView3} >
              <Image source={Message} style={styleHome.image} ></Image>
            <Text style={styleHome.text}>Message</Text>
          </View>
              </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.setState({ isVisible: true }) }}>
          <View style={styleHome.innerView4} >
              <Image source={Labtest} style={styleHome.image} ></Image>
            <Text style={styleHome.text}>Lab Test</Text>
            <Text>Sample Collection</Text>
          </View>
              </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.setState({ isVisible: true }) }}>
          <View style={styleHome.innerView5} >
              <Image source={medicine} style={styleHome.image} ></Image>
            <Text style={{ fontWeight: 'bold' }}>Medicines</Text>
            <Text>Add/Refill</Text>
          </View>
              </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.setState({ isVisible: true }) }}>
          <View style={styleHome.innerView6} >
              <Image source={question} style={styleHome.image} ></Image>
            <Text style={styleHome.text}>Help</Text>
          </View>
              </TouchableOpacity>
        </View>
        </View>
        
      </SafeAreaView>
    )
  }
}