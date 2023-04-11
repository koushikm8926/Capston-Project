import { View, Text, Image } from 'react-native'
import React from 'react'
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
      backgroundColor: '#fff',
      image: <Image source={{uri: "https://th.bing.com/th/id/OIP.HLuY60jzx5puuKjbqmWRRwHaEK?pid=ImgDet&rs=1"}} 
      className="w-72 h-72 object-contain"
      />,
      title: 'Enjoy, In Hills',
      subtitle: 'Done with React Native Onboarding Swiper',
    },

    {
        backgroundColor: '#fff',
        image: <Image source={{uri: "https://th.bing.com/th/id/OIP.Wtzhl_ib7O-bNv--tL0yRwHaE7?pid=ImgDet&w=1697&h=1128&rs=1"}} 
        className="w-72 h-72 object-contain"
        />,
        title: 'Feel, Relax in lawn',
        subtitle: 'Done with React Native Onboarding Swiper',
      },

      {
        backgroundColor: '#fff',
        image: <Image source={{uri: "https://th.bing.com/th/id/OIP.YAXlTjvtEKchdMVc5laZhwHaE8?pid=ImgDet&rs=1"}} 
        className="w-72 h-72 object-contain"
        />,
        title: 'Amazing',
        subtitle: 'Done with React Native Onboarding Swiper',
      },
    
  ]}
/>
  )
}

export default OnboardingScreen;