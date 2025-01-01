import { StyleSheet, View, Text } from 'react-native';
import Login from "../Components/Login"
import {auth} from "../configs/FirebaseConfig.jsx"
import { Redirect } from 'expo-router';



export default function HomeScreen() {
  const user = auth.currentUser;

  return (
    <View style={{ flex: 1 }}>
   {
    user? <Redirect href="/mytrip" /> : <Login />
   }
    
   </View>
  );
}


