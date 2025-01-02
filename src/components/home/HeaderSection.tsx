import { View, Text } from 'react-native'
import React from 'react'
import LocationHeader from './LocationHeader'
import Graphics from './Graphics'

const HeaderSection = () => {
  return (
    <View>
      <LocationHeader/>
      <Graphics/>
    </View>
  )
}

export default HeaderSection