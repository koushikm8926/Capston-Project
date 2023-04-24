import { StyleSheet,  View ,KeyboardAvoidingView} from 'react-native'
import React from 'react'
import Map from '../GoogleMap/map'
import tw from 'tailwind-react-native-classnames';
import { createStackNavigator } from '@react-navigation/stack';
import MapDirections from '../AmbulanceBooking/MapDirections';
import AmbulanceChoice from '../AmbulanceBooking/AmbulanceChoice';

const AmbulanceBooking = () => {
  const Stack = createStackNavigator();
  return (
    <View>
        <View style={tw`h-1/2` } >
            <Map/>
        </View>

        <View style={tw`h-1/2` }>
          <KeyboardAvoidingView 
          style={{flex:1,}}>
            <Stack.Navigator  initialRouteName="MapDirections">
              <Stack.Screen component={MapDirections} name='MapDirections' options={{ headerShown:false }} ></Stack.Screen>
              <Stack.Screen component={AmbulanceChoice} name='AmbulanceChoice' options={{ headerShown:false }} ></Stack.Screen>
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </View>

    </View>
  )
}
export default AmbulanceBooking
const styles = StyleSheet.create({})