import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

import {
  NetworkImage,
  AppBar,
  HeightSpacer,
  ReusableText,
  DescriptionText,
  ReusableBtn,
  PopularList,
} from "../../components/index";
import { COLORS, TEXT, SIZES } from "../../constants/theme";
import reusable from "../../components/Reusable/reusable.style";
import fetchCountry from "../../hook/fetchContry";

const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const id = route.params;
  const { country, isLoading, error, refetch } = fetchCountry(id);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <NetworkImage
          source={country.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
        />

        <AppBar
          top={40}
          left={20}
          right={20}
          title={country.country}
          
          icon={"search1"}
         
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
      </View>

      <View style={styles.description}>
        <ReusableText
          text={country.region}
          family={"medium"}
          size={TEXT.xLarge}
          color={COLORS.black}
        />

        <DescriptionText text={country.description} />

        <View style={styles.popularDestinations}>
          <HeightSpacer height={20} />

          <View style={reusable.rowWithSpace("space-between", 20)}>
            <ReusableText
              text={"Popular Destinations"}
              family={"medium"}
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity onPress={() => {}}>
              <Feather name="list" size={20} />
            </TouchableOpacity>
          </View>

          <HeightSpacer height={20} />

          <PopularList data={country.popular} />

          <ReusableBtn
            onPress={() => navigation.navigate("HotelSearch")}
            btnText={"Find Best Packages"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.nf}
            borderColor={COLORS.nf}
            borderWidth={0}
            textColor={COLORS.white}
          />
          <HeightSpacer height={50} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CountryDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F8",
  },
  imageContainer: {
    marginBottom: 20,
  },
  description: {
    marginHorizontal: 20,
  },
  popularDestinations: {
    alignContent: "center",
  },
});
