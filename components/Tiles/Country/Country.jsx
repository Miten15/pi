import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { TEXT, COLORS } from "../../../constants/theme";
import { NetworkImage, ReusableText, HeightSpacer } from "../../../components/index";
import { useNavigation } from "@react-navigation/native";

const Country = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('CountryDetails', {item})}>
      <View style={styles.container}>
      <NetworkImage
          source={item.imageUrl}
          width={188}
          height={138}
          radius={12}
          style={styles.image}
        />
        <View style={styles.overlay}>
          <ReusableText
            text={item.state}
            family={"medium"}
            size={TEXT.medium}
            color={COLORS.white}
            align={"left"}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Country;
const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0)", // You can adjust the opacity of the overlay
  },
});