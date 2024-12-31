import { StyleSheet, View, Text } from 'react-native';
import Login from "../Components/Login"
import {auth} from "../configs/FirebaseConfig.jsx"
import { Redirect } from 'expo-router';

const user = auth.currentUser;

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>

{user? <Redirect href="/tabs" /> : <Login />}
    
   </View>
  );
}


