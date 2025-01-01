import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function StartNewTripCard() {
  return (
    <View 
      style={{
        padding:20,
        marginTop:50,
        display : 'flex',
        alignItems:'center',
        gap:25,
        backgroundColor:Colors.white,
      }}
    >
      <Ionicons name="location-outline" size={30} color="black" />
      <Text
        style={{
          fontFamily:'outfit-bold',
          fontSize:30,
        }}
      >
        No Trips Planned Yet
      </Text>
      <Text
        style={{
          fontFamily:'outfit-medium',
          fontSize:20,
          textAlign:'center',
          color:Colors.grey 
        }}
      >
        Looks like you haven't planned any trips yet. Start planning your next trip now!
      </Text>

      <TouchableOpacity
        style={{
          padding:10,
          backgroundColor:Colors.primary,
          borderRadius:15,
          paddingHorizontal : 30
        }}
      >
        <Text
          style={{
            color:Colors.white,
            fontFamily:'outfit-medium',
            fontSize:20
          }}
        >
          Start new Trip
        </Text>
      </TouchableOpacity>
    </View>
  )
}