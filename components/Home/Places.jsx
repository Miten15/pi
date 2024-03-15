import { useState, useEffect } from "react";
import { StyleSheet, Text, View, VirtualizedList, ActivityIndicator } from "react-native";
import React from "react";
import HeightSpacer from "../Reusable/HeightSpacer";
import { COLORS, SIZES } from "../../constants/theme";
import Country from "../Tiles/Country/Country";
import fetchCountries from "../../hook/fetchContries"

const Places = () => {
  const [data, setData] = useState({
    countries: [],
    isLoading: false,
    error: null,
    refetch: () => {}
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchCountries();
      setData(result);
    }
    fetchData();
  }, []);

  const { countries, isLoading, error, refetch } = data;

  if (isLoading) {
    return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue} />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <HeightSpacer height={20} />

      <VirtualizedList
        data={countries}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: SIZES.medium }}>
            <Country item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Places;

const styles = StyleSheet.create({});