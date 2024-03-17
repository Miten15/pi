import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES, TEXT } from "../../../constants/theme";
import {
  HeightSpacer,
  NetworkImage,
  Rating,
  ReusableText,
} from "../../../components/index";

const HotelCard = ({ item, margin, onPress }) => {
  return (
    <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
    <View style={styles.cardContent}>
      <View style={styles.imageContainer}>
        <NetworkImage 
          source={item.imageUrl}
          width={'100%'}
          height={150}
          radius={16}
        />
      </View>
      <View style={styles.textContainer}>
        <ReusableText
          text={item.title}
          family={"medium"}
          size={SIZES.medium}
          color={COLORS.black}
        />
        <HeightSpacer height={5} />
        <ReusableText
          text={item.location}
          family={"medium"}
          size={SIZES.medium}
          color={COLORS.gray}
        />
        <HeightSpacer height={5} />
        <Rating rating={item.rating} />
        <HeightSpacer height={5} />
        <ReusableText
          text={item.price}
          family={"medium"}
          size={SIZES.medium}
          color={COLORS.gray}
        />
      </View>
    </View>
  </TouchableOpacity>
  );
};

export default HotelCard;

const styles = StyleSheet.create({
  card: (margin) => ({
    width: SIZES.width - 20, // Subtracting padding from both sides
    height: 170,
    borderRadius: 16,
    backgroundColor: COLORS.lightWhite,
    marginVertical: margin, // Adjust vertical margin
    paddingHorizontal: 10, // Add horizontal padding
    paddingTop: 10, // Add top padding
  }),
  cardContent: {
    flexDirection: 'row', // Align items in row
    justifyContent: "space-between", //
  
  },
  imageContainer: {
    flex: 1, // Take up remaining space
    justifyContent: 'center', // Center image vertically
    alignItems: 'center', // Center image horizontally
  },
  textContainer: {
    flex: 1, // Take up remaining space
    paddingLeft: 10, // Add left padding
  },
});
