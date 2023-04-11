import * as React from 'react';
import Login from './components/login';
import Onboard from './components/Onboard';
import Emergency from './components/emergency';
import Register from './components/RegisterScreen';
import OnboardingScreen from './components/OnboardingScreen';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import DetailsPage from './components/manual_ambulance_booking';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/home';
import ContactUs from './components/contactUs';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect( () => {
    AsyncStorage.getItem("alreadyLaunched").then(value => {
      if (value === null){
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      }
      else {
        setIsFirstLaunch(false);
      }
    } )
  }, [])

  return (
    <TailwindProvider>
    <NavigationContainer>
    <Stack.Navigator initialRouteName="OnboardingScreen" >
         
         {!isFirstLaunch && (
            <Stack.Screen options={{ headerShown:false }} name="OnboardingScreen" component={OnboardingScreen} />) }
          <Stack.Screen options={{ headerShown:false }} name="Onboard" component={Onboard} />
        <Stack.Screen name="Emergency" component={Emergency} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name='DetailsPage' component={DetailsPage} options={{headerShown: false}}/>
        <Stack.Screen name='ContactUs' component={ContactUs} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>
    
  );
}