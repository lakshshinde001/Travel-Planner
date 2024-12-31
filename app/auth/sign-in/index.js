import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '@/constants/Colors'
import { TextInput } from 'react-native'
import { useRouter } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../../../configs/FirebaseConfig.jsx'
import { signInWithEmailAndPassword } from 'firebase/auth'


export default function SignIn() {

  const router = useRouter()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState();


  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        router.push('(tabs)/mytrip');
      }
    };
    checkUser();
  }, []);

  const signInUser = async () => {

    if(!email || !password){
      ToastAndroid.show("All fields are required", ToastAndroid.BOTTOM);
    }

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    
     AsyncStorage.setItem('user', JSON.stringify(user));
     router.push('(tabs)/mytrip');
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    if(errorCode == 'auth/invalid-credential'){
      ToastAndroid.show("Invalid Credentials", ToastAndroid.BOTTOM);
    }
    console.log(errorMessage);
  });
  }

  return (
    <View style={{padding:20, paddingTop:50, backgroundColor:Colors.white, height:'100%'}}>
      <TouchableOpacity onPress={()=> router.back()} >
        <Ionicons  style={{marginBottom:20}} name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{fontFamily:'outfit-bold', fontSize:30}}>
        Let's Sign you In..
      </Text>
      <Text style={{fontFamily:'outfit-medium', fontSize:30, color:Colors.gray, marginTop:30}}>
        Welcome Back
      </Text>
      <Text style={{fontFamily:'outfit-medium', fontSize:30, color:Colors.gray, marginTop:20}}>
        You've been missed
      </Text>

      <View style={{marginTop:50}} >
        <Text style={{fontStyle:'outfit-medium'}} >Email</Text>
        <TextInput 
        style={styles.input}
        placeholder='Enter Your Email..'
        onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View style={{marginTop:20}}>
        <Text>password</Text>
        <TextInput 
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(e)=>setPassword(e)}
        placeholder='Enter Your Password' />
      </View>

      <TouchableOpacity onPress={signInUser} style={{padding:20, marginTop:20 , backgroundColor: Colors.primary, borderRadius:15}}>
        <Text
          style={{color:Colors.white, textAlign:'center' }}
        >Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => router.push('auth/sign-up')}
      style={{padding:20, marginTop:20 , backgroundColor: Colors.white, borderRadius:15, borderWidth:1}}>
        <Text
          style={{ textAlign:'center' }}
        >Create Account</Text>
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
