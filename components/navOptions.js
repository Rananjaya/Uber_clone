import React from 'react'
import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements/dist/icons/Icon';
// import uber_car from '../src/img/UberX2.png';

const data =[
    {
        id: "1",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen"
    }
]

const navOptions = () => {
    return (
       <FlatList
       data={data}
       horizontal
       keyExtractor={(item) => item.id}
       renderItem={({item}) => (  // item is one array object
           <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
            <View>
             <Image
              source={{uri: item.image}}
              style={{width: 120, height: 120, resizeMode:"contain"}}
             />
             <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                <Icon 
                style={tw`p-2 bg-black rounded-full w-10 w-10 mt-4`}
                name="arrowright" color="white" type="antdesign"/>
          </View>
           </TouchableOpacity>
       )}
       />
    )
}

export default navOptions

const styles = StyleSheet.create({})
