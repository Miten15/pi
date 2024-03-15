import { FlatList, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import reusable from "../Reusable/reusable.style";
import ReusableText from "../Reusable/ReusableText";
import { TEXT, COLORS, SIZES } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import ReusableTile from "../Reusable/ReusableTile"
import ReusableTile2 from "../Reusable/ReusableTitle2";

import fetchCountries from "../../hook/fetchContries"



  
const Recommendations = () => {
  const { countries, isLoading, error, refetch } = fetchCountries();

  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />;
  }
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <View
        style={[reusable.rowWithSpace("space-between"), { paddingBottom: 20 }]}
      >
        <ReusableText
          text={"Recommendations"}
          family={"medium"}
          size={TEXT.large}
          color={COLORS.black}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Recommended")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>

    <FlatList 
    data={countries}
    horizontal
    keyExtractor={(item)=> item._id}
    contentContainerStyle={{columnGap: SIZES.medium}}
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => (
        <ReusableTile2 item={item} onPress={()=> navigation.navigate('PlaceDetails', item._id)}/>
    )}
    />
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
});
