import React from 'react'
import { View, Text, Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen = () => {
    const navigation = useNavigation();

    const DotComponent = ({selected}) => {
        return(
            <View className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${selected ? "border border-red-400" : ""} p-2`}>
                <View className={`w-2 h-2 ${selected ? "bg-red-400" : "bg-red-200"} rounded-full`} ></View>
            </View>
        )
    }

  return (
    <Onboarding
    onSkip={() => navigation.replace("Onboard")}
    onDone={() => navigation.replace("Onboard")}
    DotComponent = {DotComponent}
  pages={[
    {
      backgroundColor: '#ebf1fc',
      image: <Image source={require('../images/onboard1.png')} 
      className="w-72 h-72 object-contain"
      />,
      title: 'Need A Doctor',
      subtitle: 'We allow users to easily access medical care from a licensed healthcare professional, such as a doctor or a nurse practitioner, through the app. ',
    },

    {
        backgroundColor: '#ebf1fc',
        image: <Image source={require('../images/onboard2.png')}  
        className="w-72 h-72 object-contain"
        />,
        title: 'Health Advice',
        subtitle: 'We provide users with access to expert health advice and information on a wide range of health topics, such as nutrition, fitness, mental health, and disease prevention, through the app',
      },

      {
        backgroundColor: '#ebf1fc',
        image: <Image source={require('../images/onboard3.png')}  
        className="w-72 h-72 object-contain"
        />,
        title: '24x7 Ambulance Services',
        subtitle: 'This feature is especially useful for individuals who require immediate medical attention and need to be transported to a hospital or healthcare facility quickly and safely. ',
      },
    
  ]}
/>
  )
}

export default OnboardingScreen;