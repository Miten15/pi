import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Signin from '../authentication/Signin'

const SigninScreen = () => {
  return (
    <View>
      <Signin />

      
        <Text>
            Havnt signind in??
        </Text>
      </View>
   
  )
}

export default SigninScreen

const styles = StyleSheet.create({})