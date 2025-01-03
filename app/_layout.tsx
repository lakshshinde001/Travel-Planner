import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import {CreateTripContext} from '../context/createTripContext.js'
import { useState } from "react";

export default function RootLayout() {
  useFonts({
    outfit: require("./../assets/fonts/Outfit-Black.ttf"),
    "outfit-medium": require("./../assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./../assets/fonts/Outfit-Bold.ttf"),
  });

  const [tripData, setTripData] = useState<any>([]);

  return (
    <CreateTripContext.Provider value={{tripData, setTripData}}>
      <Stack screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Home" />
       */}
      <Stack.Screen name="(tabs)" />
    </Stack>
    </CreateTripContext.Provider>
    
  );
}
