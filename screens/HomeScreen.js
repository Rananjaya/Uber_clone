import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/navOptions';
import uber_logo from '../img/Uber_Logo_Black.png';
// import { SafeAreaProvider } from 'react-native-safe-area-context';



const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
           <View style={tw`p-5`}>
               <Image style={{width:100,height:100}} source={uber_logo} />
               <NavOptions/>
          </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})
