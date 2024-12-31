import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React, { FC } from 'react'
import { View, Text } from 'react-native'
const CustomTabBar:FC<BottomTabBarProps> = (props) => {
  return (
    <View>
      <Text>Custom Tab Bar</Text>
    </View>
  )
}

export default CustomTabBar