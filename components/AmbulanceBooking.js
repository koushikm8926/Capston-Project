import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../GoogleMap/map'
import tw from 'tailwind-react-native-classnames';
//import MapView from 'react-native-maps';
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
          <Stack.Navigator>
            <Stack.Screen component={MapDirections} name='MapDirections' options={{ headerShown:false }} ></Stack.Screen>
            <Stack.Screen component={AmbulanceChoice} name='AmbulanceChoice' options={{ headerShown:false }} ></Stack.Screen>
          </Stack.Navigator>
        </View>



    </View>
  )
}

export default AmbulanceBooking

const styles = StyleSheet.create({})