import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { Marker } from 'react-native-maps'

const Map = () => {


  return (
    <MapView
    style={tw`flex-1`}
    initialRegion={{
        latitude: 31.2560,
        longitude: 75.7051,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
  }}
>
  <Marker
    coordinate={
      {
        latitude: 31.2560,
        longitude: 75.7051,
      }
    }
    title='Your Location'
  />

</MapView>



  )
}

export default Map

const styles = StyleSheet.create({})