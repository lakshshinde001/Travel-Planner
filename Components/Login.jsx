import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

export default function Login() {
  return (
    <View>
      <Image source={require('../assets/images/login1.png')}
        style={{ width:'100%', height: 450 }}
      />
      <View style={styles.container}> 
        <Text
            style={{
                fontSize: 30,
                fontFamily: 'outfit-bold',
                textAlign: 'center',
                marginTop : 30
            }}
        >
            Your Travel Companion
        </Text>
        <Text
            style={{
                fontSize: 17,
                fontFamily: 'outfit-regular',
                textAlign: 'center',
                color: Colors.gray,
                marginTop : 20
            }}
        >
        Plan your perfect journey effortlessly with our travel planner app, personalized itineraries, destination insights, and seamless travel experiences.
        </Text>
        <View style={styles.button}>
            <Text style={{ color: Colors.white, fontSize: 20 }}>
                Sign in with Google
            </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor: Colors.white,
    marginTop : -20,
    height : '100%',
    borderTopLeftRadius : 30,
    borderTopRightRadius : 30,
  },
  button : {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 99,
    // margin: 20,
    marginTop: '20%',
    marginHorizontal: 20,
    alignItems: 'center'
  }
})
