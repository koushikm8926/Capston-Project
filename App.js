import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login';
import Onboard from './components/onboard';
import Register from './components/RegisterScreen';
import Emergency from './components/emergency';

const Stack = createNativeStackNavigator();

export default function Navigation() {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Onboard" >
        <Stack.Screen name="Onboard" component={Onboard} options={{headerShown: false}} />
        <Stack.Screen name="Emergency" component={Emergency} options={{headerShown: false}}  />
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}  />
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}