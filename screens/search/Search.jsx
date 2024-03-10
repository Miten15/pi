import { View, Text, TextInput, TouchableOpacity, Image, FlatList} from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import styles from './search.style';
import {Feather, AntDesign } from '@expo/vector-icons'
import { COLORS } from '../../constants/theme';
import { AppBar, HeightSpacer } from '../../components';
import ReusableTile from '../../components/Reusable/ReusableTile';

const Search = ({navigation}) => {
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const search = [
    {
      _id: "64c631650298a05640539adc",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Walt Disney World",
      location: "U.S.A New York ",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/731e1f89-c028-43ef-97ee-8beabde696b6-vinci_01_disney.jpg",
      rating: 4.7,
      review: "1204 Reviews",
    },
    {
      _id: "64d062a3de20d7c932f1f70a",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Statue of Liberty",
      location: "U.S.A New York ",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/c3a8b882-b176-47f0-aec5-a0a49bf42fcd-statue-of-liberty-1.webp",
      rating: 4.8,
      review: "1452 Reviews",
    },
    {
      _id: "64d09e3f364e1c37c8b4b13c",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Golden Gate Bridge",
      location: "U.S.A New York ",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/7b7b76aa-bbe0-4ca4-b52f-e2b82afa3a77-Golden-Gate-Bridge-San-Francisco.webp",
      rating: 4.6,
      review: "2145 Reviews",
    },
    {
      _id: "64d09f90364e1c37c8b4b140",
      country_id: "64c62bfc65af9f8c969a8d04",
      title: "Yellowstone National Park",
      location: "U.S.A New York ",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
      rating: 4.8,
      review: "24455 Reviews",
    },
    {
      _id: "64d30f789d008909fa8b7ce5",
      country_id: "64d2fd32618522e2fb342eec",
      imageUrl:
        "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
      title: "Yellowstone National Park",
      location: "U.S.A New York ",
      rating: 4.8,
      review: "24455 Reviews",
    },
  ];


  return (
   <SafeAreaView style={reusable.container}>
     
    <View style={styles.searchContainer}>
     
      <View style={styles.searchWrapper}>
      
        <TextInput 
        style={styles.input}
        value={searchKey}
        onChangeText={setSearchKey}
        placeholder='Where do you want to visit'
        />
      </View>

      <TouchableOpacity style={styles.searchBtn}>
        <Feather name='search' size={24} color={COLORS.white}/>
      </TouchableOpacity>
    </View>

    {search.length === 0 ? (
      <View>
        <HeightSpacer height={'20%'}/>
        <Image 
        source={require('../../assets/images/search.png')}
        style={styles.searchImage}
      />
      </View>
    ): (
      <FlatList 
      data={search}
      keyExtractor={(item)=> item._id}
      renderItem={({item})=> (
        <View style={styles.tile}>
        <ReusableTile item={item} onPress={()=> navigation.navigate('PlaceDetails', item._id)}/>
        </View>
      )}
      />
    )}

   </SafeAreaView>
  )
}

export default Search