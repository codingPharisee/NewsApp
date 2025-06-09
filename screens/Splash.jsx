//install lottie-react-native
import LottieView from "lottie-react-native"
import { View, Text } from 'react-native'
import React from 'react'

export default function Splash() {
  return (
    <View>
        <LottieView
        source
        autoplay
        loop
        style={styles.splashCard}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  