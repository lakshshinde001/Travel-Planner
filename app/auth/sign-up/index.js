import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function index() {

  const router = useRouter()


  return (
    <View style={{padding:20, paddingTop:50, backgroundColor:Colors.white, height:'100%'}}>
         <TouchableOpacity onPress={()=> router.back()} >
        <Ionicons  style={{marginBottom:20}} name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
     
      <Text style={{fontFamily:'outfit-bold', fontSize:30}}>
        Create Account
      </Text>
      <Text style={{fontFamily:'outfit-medium', fontSize:30, color:Colors.gray, marginTop:30}}>
        Welcome Here 
      </Text>
      <Text style={{fontFamily:'outfit-medium', fontSize:20, color:Colors.gray, marginTop:20}}>
        You're on right place 😁
      </Text>

      <View style={{marginTop:50}} >
        <Text style={{fontStyle:'outfit-medium'}} >Name</Text>
        <TextInput 
        style={styles.input}
        placeholder='Enter Your Name' />
      </View>

      <View style={{marginTop:20}} >
        <Text style={{fontStyle:'outfit-medium'}} >Email</Text>
        <TextInput 
        style={styles.input}
        placeholder='Enter Your Email..' />
      </View>
      <View style={{marginTop:20}}>
        <Text>Password</Text>
        <TextInput 
        style={styles.input}
        secureTextEntry={true}
        placeholder='Enter Your Password' />
      </View>

      <View style={{padding:20, marginTop:20 , backgroundColor: Colors.primary, borderRadius:15}}>
        <Text
          style={{color:Colors.white, textAlign:'center' }}
        >Create Account</Text>
      </View>

      <TouchableOpacity 
        onPress={() => router.push('auth/sign-in')}
      style={{padding:20, marginTop:20 , backgroundColor: Colors.white, borderRadius:15, borderWidth:1}}>
        <Text
          style={{ textAlign:'center' }}
        >Already Have Account? Sign In </Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  input : {
    borderWidth:1,
    borderColor:Colors.gray,
    padding:10,
    borderRadius:10,
    marginTop:10
  }
})
