import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import reusable from "../Reusable/reusable.style";
import ReusableText from "../Reusable/ReusableText";
import { TEXT, COLORS, SIZES } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";
import ReusableTile from "../Reusable/ReusableTile"
import ReusableTile2 from "../Reusable/ReusableTitle2";

const Recommendations = () => {
  const navigation = useNavigation();

  const recommendations =  [
    {
      "_id": "64c631650298a05640539adc",
      "state_id": "64c62bfc65af9f8c969a8d04", // Rajasthan
      "title": "Khajuraho Temples",
      "imageUrl": "https://static.toiimg.com/thumb/70192987/khajuraho.jpg?width=1200&height=900",
      "rating": 4.7,
      "review": "1204 Reviews"
    },
    {
      "_id": "64d062a3de20d7c932f1f70a",
      "state_id": "64cf2c565d14628d0ac0a2b7", // Kerala
      "title": "Sri Padmanabhaswamy Temple",
      "imageUrl": "https://i.pinimg.com/736x/c6/e3/3e/c6e33e73a41c294022a85f7f099ff7d7.jpg",
      "rating": 4.8,
      "review": "1452 Reviews"
    },
    {
      "_id": "64d09e3f364e1c37c8b4b13c",
      "state_id": "64cf2c935d14628d0ac0a2b9", // Uttar Pradesh
      "title": "Varanasi Ghats",
      "imageUrl": "https://t4.ftcdn.net/jpg/04/08/25/05/360_F_408250543_MVaEVGeWxb4FiFy7mEGKj8nfYkwoAZON.jpg",
      "rating": 4.6,
      "review": "2145 Reviews"
    },
    {
      "_id": "64d09f90364e1c37c8b4b140",
      "state_id": "64cf2d095d14628d0ac0a2bd", // Uttarakhand
      "title": "Kedarnath Temple",
      "imageUrl": "https://pbs.twimg.com/media/E5Bx7LDVkB0u1Vk.jpg:large",
      "rating": 4.8,
      "review": "24455 Reviews"
    },
    {
      "_id": "64d30f789d008909fa8b7ce5",
      "state_id": "64cf2d4d5d14628d0ac0a2bf", // Tamil Nadu
      "title": "Meenakshi Amman Temple",
      "imageUrl": "https://media.istockphoto.com/id/494308337/photo/meenakshi-hindu-temple-in-madurai-tamil-nadu-south-india.jpg?s=612x612&w=0&k=20&c=xxS6Z6Jh2gTdThofH1HZaO6ey44w1FrJ1PjJfJsy_pI=",
      "rating": 4.8,
      "review": "12345 Reviews"
    }
];

  

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
    data={recommendations}
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
