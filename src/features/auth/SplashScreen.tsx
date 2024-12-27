import { View, Image, StatusBar, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { FC } from 'react'
import '@unistyles/unistyles'
import {useStyles} from 'react-native-unistyles'
import { splashStyles } from '@unistyles/authStyles'
import Animated, { FadeInDown } from 'react-native-reanimated'
import CustomText from '@components/global/CustomText'
import { resetAndNavigate } from '@utils/NavigationUtils'
const SplashScreen: FC=()=> {
  const {styles}=useStyles(splashStyles)
  
   useEffect(() =>{
    const timeoutId=setTimeout(() => {
      resetAndNavigate('LoginScreen')
    }, 3000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <View style={styles.container}>
   <StatusBar hidden={Platform.OS !=='android'}/>
   <Image source={require('@assets/images/Adnan_food.png')}//I will change the pic
   style={styles.logoImage}
   
   />
      <Animated.View style={styles.animatedContainer} entering={FadeInDown.delay(400).duration(800)}>
  <Image source={require('@assets/images/tree.png')}
  style={styles.treeImage}
    />
  <CustomText
  variant='h5'
  style={styles.msgText}
  fontFamily='Okra-Medium'
  color='#fff' 
  >
    Adnan Foods Deliveries in Anywhere in Bangladesh
  </CustomText>
   

      </Animated.View>
    </View>
  )
}
export default SplashScreen;