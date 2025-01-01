import { View, Text } from "react-native";
import React, { useContext, useEffect } from "react";
import { useNavigation } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { CreateTripContext } from "../../context/createTripContext";

export default function SearchPlace() {
  const { tripData, setTripData } = useContext(CreateTripContext);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Search",
      headerTransparent: true,
    });
  }, []);

  useEffect(() => {
    console.log(tripData);
  }, [tripData]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: "white",
        height: "100%",
      }}
    >
      
        <GooglePlacesAutocomplete
        placeholder="Search Place"
        fetchDetails={true}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setTripData({
            locationInfo: data.description,
            coordinates: details?.geometry.location,
            photoRef: details?.photos[0].photo_reference,
            url: details?.url,
          });
        }}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
          language: "en",
        }}
        styles={{
            textInputContainer:{
                borderWidth:1,
                borderRadius:5,
                marginTop: 10
            }
        }}
      />


     
    </View>
  );
}
