import * as React from 'react';
import Login from './components/login';
import Onboard from './components/onboard';
import Emergency from './components/emergency';
import Register from './components/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import DetailsPage from './components/manual_ambulance_booking';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Register" >
        <Stack.Screen name="Onboard" component={Onboard} options={{headerShown: false}}/>
        <Stack.Screen name="Emergency" component={Emergency} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name='DetailsPage' component={DetailsPage} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}