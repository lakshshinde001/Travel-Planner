import { View, Text } from 'react-native'
import React, { useState } from 'react'
import {Colors} from '../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import StartNewTripCard from '../../Components/MyTrips/StartNewTripCard';

export default function MyTrip() {

  const [userTrips, setUserTrips] = useState([]);

  return (
    <View 
      style={{
        // padding:25,
        paddingTop:20,
        backgroundColor:Colors.white,
        height:'100%'
      }}
    >
      <View style={{
       display : 'flex',
       flexDirection:'row',
        justifyContent:'space-between',
        padding:10
      }} >
      <Text
        style={{
          fontSize:45,
          fontFamily:'outfit-medium'
        }}
      >MyTrip
       
      </Text>
      <Ionicons 
        style={{fontSize:50}}
      name="add-circle-outline" size={24} color="black" />
      </View>
      
      {
        userTrips?.length == 0 ? 
          <StartNewTripCard/>
         : 
        null
      }

    </View>
  )
}