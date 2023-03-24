import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform,  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function DetailsPage() {
  return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <FontAwesome5 name="ambulance" size={50} color="skyblue" style={styles.ambulanceIcon}  />
      <Text style={styles.inputTitle} >Ambulance Name</Text>
      <Text style={styles.hospitalName} >City Hospital</Text>

      <View style={styles.pickDropContainer} >
          <Text style={styles.pickDropText} >Pick Up</Text>
          <TextInput
          style={styles.pickDropInput}
          placeholder='Time'
          onChangeText={()=>{}}
          ></TextInput>
          <Text style={styles.pickDropText} >Drop</Text>
          <TextInput
          style={styles.pickDropInput}
          placeholder='Time'
          onChangeText={()=>{}}
          ></TextInput>
      </View>

      <Text style={styles.inputTitle} >Reason</Text>
      <View style={styles.pickDropContainer} >
        <TouchableOpacity style={styles.reasonTouchable} >
          <Text>Heart Attack</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reasonTouchable} >
          <Text>Accident</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reasonTouchable} >
          <Text>Bleeding</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reasonTouchable} >
          <Text>Heatstroke</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reasonTouchable} >
          <Text>Other</Text>
        </TouchableOpacity>
          
      </View>

      <Text style={styles.inputTitle} >Full Name</Text>
      <TextInput
      style={styles.input}
      onChangeText={()=>{}}
      ></TextInput>
      <Text style={styles.inputTitle} >Phone</Text>
      <TextInput
      style={styles.input}
      onChangeText={()=>{}}
      ></TextInput>

      <TouchableOpacity style={styles.bookTouchable} >
          <Text style={styles.bookText} >Book</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ambulanceIcon:{
    marginTop:100,
    marginVertical:50,
  },
  pickDropContainer:{
    //flex:1,
    alignContent:'flex-start',
    flexDirection:'row',
    justifyContent:'center',
    flexWrap:'wrap',
    width:'95%',
    marginVertical:10,
  },
  inputTitle:{
    alignSelf:'flex-start',
    left:'10%',
  },
  hospitalName:{
    alignSelf:'flex-start',
    left:'10%',
    fontSize:25,
    fontWeight:'bold',
  },
  input:{
    //borderWidth:1,
    width:'80%',
    height:'7%',
    borderRadius:5,
    backgroundColor:'#EFEFEF',
  },
  pickDropText:{
    alignSelf:'flex-start',
    left:'10%',
    margin:8,
  },
  pickDropInput:{
    //borderWidth:1,
    width:'30%',
    borderRadius:5,
    backgroundColor:'#EFEFEF',
    //margin:5,
  },
  reasonTouchable:{
    backgroundColor:'#FE9153',
    borderRadius:5,
    padding:10,
    margin:5,
  },
  bookTouchable:{
    backgroundColor:'#1F1F1F',
    borderRadius:20,
    padding:15,
    paddingHorizontal:40,
    margin:15,
    marginTop:50,
  },
  bookText:{
    color:'white',
    fontWeight:'bold',
  },
});