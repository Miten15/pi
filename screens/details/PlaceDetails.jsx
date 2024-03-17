import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
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
import { Feather } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';
import fetchPlace from "../../hook/fetchPlace";

const PlaceDetails = ({navigation}) => {
    const route = useRoute();
    const id = route.params
    const { place, isLoading, error, refetch } = fetchPlace(id)
     
  return (
    <ScrollView>
    <View>
      <NetworkImage
        source={place.imageUrl}
        width={"100%"}
        height={350}
        radius={30}
      />

      <AppBar
        top={40}
        left={20}
        right={20}
        title={place.title}
        icon={"search1"}
        onPress={() => navigation.goBack()}
        onPress1={() => {}}
      />
    </View>

    <View style={styles.description}>
      <HeightSpacer height={15} />
      <ReusableText
        text={place.location}
        family={"medium"}
        size={TEXT.large}
        color={COLORS.black}
      />

      <DescriptionText text={place.description} />

      <View style={{ alignContent: "center" }}>
        <HeightSpacer height={20} />

        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Popular Packages"}
            family={"medium"}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity onPress={() => {}}>
            <Feather name="list" size={20} />
          </TouchableOpacity>
        </View>

        <HeightSpacer height={20} />

        <PopularList data={place.popular} />

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
  )
}

export default PlaceDetails

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 20
  }
})