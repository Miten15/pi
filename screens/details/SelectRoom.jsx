import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AssetImage from '../../components/Reusable/AssetImage'

const SelectRoom = () => {
  return (
    <View>
      <AssetImage data={require('../../assets/images/checked.png')}
      mode={'contain'}
      width={300}
      height={300}
      />
    </View>
  )
}

export default SelectRoom

const styles = StyleSheet.create({})