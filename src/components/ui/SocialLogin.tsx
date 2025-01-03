import Icon from '@components/global/Icons'
import { phoneStyles } from '@unistyles/phoneStyles'
import React, { FC } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useStyles } from 'react-native-unistyles'

const SocialLogin:FC = () => {
  const {styles}=useStyles(phoneStyles)
  return (
    <View style={styles.socialContainer}>
    <TouchableOpacity style={styles.iconContainer}>
      <Image source={require('@assets/icons/google.png')} style={styles.gimg} ></Image>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconContainer}>
      <Icon name='logo-apple' iconFamily='Ionicons' color='#222' size={RFValue(18)} />
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconContainer}>
    <Image source={require('@assets/icons/facebook.png')} style={styles.gimg} ></Image>
    </TouchableOpacity>
    <TouchableOpacity style={styles.iconContainer}>
      <Icon name='ellipsis-horizontal-sharp' iconFamily='Ionicons' color='#222' size={RFValue(18)} />
    </TouchableOpacity>
    </View>
  )
}

export default SocialLogin