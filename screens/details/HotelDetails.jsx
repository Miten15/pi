import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";
import React from "react";
import {
  NetworkImage,
  AppBar,
  HeightSpacer,
  ReusableText,
  DescriptionText,
  ReusableBtn,
  ReviewsList,
  Rating,
  HotelMap,
} from "../../components/index";
import { COLORS, TEXT, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import { Feather } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';
import fetchHotelById from "../../hook/fetchHotelById";

const HotelDetails = ({navigation}) => {
    const route = useRoute();
    const id = route.params
    const { hotel, coordinates, isLoading, error, refetch } = fetchHotelById(id)
     

    if (isLoading) {
      return (
        <View style={{ flex: 1, alignItems: "center" }}>
          <ActivityIndicator />
        </View>
      );
    }

    
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        <NetworkImage
          source={hotel.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
          style={{ position: "absolute", top: 0, left: 0, right: 0 }}
        />

        <AppBar
          top={40}
          left={20}
          right={20}
          title={hotel.title}
          icon={"search1"}
          onPress={() => navigation.goBack()}
          onPress1={() => { }}
          color1={COLORS.transparent} // Set app bar background color to transparent
        />

        <View style={styles.bg}>
          <View style={styles.description}>
            <HeightSpacer height={5} />
            <ReusableText
              text={hotel.location}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
            />

            <HeightSpacer height={10} />

            <View style={reusable.rowWithSpace("space-between")}>
            <Rating rating={hotel.rating} />

                <ReusableText
                  text={`(${hotel.review})`}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>

            <DescriptionText text={hotel.description} />

            <HeightSpacer height={20} />

            <ReusableText
              text={"Location"}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
            />

            <DescriptionText text={hotel.location} />
            <HotelMap coordinates={coordinates} />
            <HeightSpacer height={20} />

            <View style={reusable.rowWithSpace('space-between')}>
              <ReusableText
                text={'Reviews'}
                family={"medium"}
                size={SIZES.large}
                color={COLORS.black}
              />

              <TouchableOpacity>
                <Feather name='list' size={20} />
              </TouchableOpacity>
            </View>

            <HeightSpacer height={10} />

            <ReviewsList reviews={hotel.reviews} />
          </View>

          <View style={[reusable.rowWithSpace('space-between'), styles.bottom]}>
            <View>
              <ReusableText
                text={`\$ ${hotel.price}`}
                family={"medium"}
                size={SIZES.large}
                color={COLORS.black}
              />
              <HeightSpacer height={5} />

              <ReusableText
                text={"Jan 01 - Dec 25"}
                family={"medium"}
                size={SIZES.medium}
                color={COLORS.gray}
              />
            </View>

            <ReusableBtn
              onPress={() => navigation.navigate("SelectRoom")}
              btnText={"Select Room"}
              width={(SIZES.width - 50) / 2.2}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
          </View>
        </View>
      </View>
    </ScrollView>
    
  );
}

export default HotelDetails;

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 20,
    paddingTop: 20, // Adjust the padding top as per your design
    
  },
  bg: {
    top: -35,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderRadius: 17,
    zIndex: 0, // Ensure the background is behind other elements
    
  },
  bottom: {
    marginHorizontal: 20,
  }
});
