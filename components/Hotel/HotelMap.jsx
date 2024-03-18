import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'

const HotelMap = ({coordinates}) => {


  const initial = { "id": "65f68092d6d99d800de21e66", "latitude": 24.8354, "latitudeDelta": 0.01, "longitude": 79.9277, "longitudeDelta": 0.01, "name": "Khajuraho Temples Pilgrimage"}
  if(coordinates === undefined){
    return (
      <ActivityIndicator />
    )
  }
  return (
    <TouchableOpacity onPress={() => {}}>
      <MapView style={styles.maps} initialRegion={initial}>
        <Marker coordinate={coordinates} title={undefined ? coordinates.name : "Hotel Destination"} />
      </MapView>
    </TouchableOpacity>
  );
};

export default HotelMap;

const styles = StyleSheet.create({
  maps: {
    marginVertical: 10,
    height: 120,
    width: "100%",
    borderRadius: 12,
  },
});

