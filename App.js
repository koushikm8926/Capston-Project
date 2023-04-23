import * as React from "react";
import Home from "./components/home";
import Login from "./components/login";
import Onboard from "./components/Onboard";
import { useEffect, useState } from "react";
import Emergency from "./components/emergency";
import ContactUs from "./components/contactUs";
import ChatScreen from "./components/ChatScreen";
import Register from "./components/RegisterScreen";
import { TailwindProvider } from "tailwindcss-react-native";
import OnboardingScreen from "./components/OnboardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RecoilRoot } from "recoil";
import Forgot from "./components/ForgotScreen";
import NewPassword from "./components/NewPasswordScreen";
import OtpScreen from "./components/OtpForgotScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AmbulanceBooking from "./components/AmbulanceBooking";
import DoctorScreen from "./components/DoctorScreen";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  return (
    <RecoilRoot>
      <TailwindProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="OnboardingScreen">
            {!isFirstLaunch && (
              <Stack.Screen
                options={{ headerShown: false }}
                name="OnboardingScreen"
                component={OnboardingScreen}
              />
            )}
            <Stack.Screen
              options={{ headerShown: false }}
              name="Onboard"
              component={Onboard}
            />
            <Stack.Screen
              name="Emergency"
              component={Emergency}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ContactUs"
              component={ContactUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Chat"
              component={ChatScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Forgot"
              component={Forgot}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="NewPassword"
              component={NewPassword}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="Otp"
              component={OtpScreen}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
              name="AmbulanceBooking"
              component={AmbulanceBooking}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DoctorScreen"
              component={DoctorScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TailwindProvider>
    </RecoilRoot>
  );
}
