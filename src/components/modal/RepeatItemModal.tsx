import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { useAppSelector } from '@states/reduxHook';
import { selectRestaurantCartItem } from '@states/reducers/cartSlice';
import { useStyles } from 'react-native-unistyles';
import { modelStyles } from '@unistyles/modelStyles';
import CustomText from '@components/global/CustomText';
import { Colors } from '@unistyles/Constants';

const RepeatItemModal:FC< {
  item:any;
  restaurant:any;
  onOpenAddModal:()=>void
  CloseModal:()=>void
}>=( {item,onOpenAddModal,restaurant,CloseModal} )=>{

const cartItem=useAppSelector(selectRestaurantCartItem(restaurant?.id,item?.id))
const {styles}=useStyles(modelStyles)

  return (
    <View>
   <View style={styles.noShadowHeaderContainer}> 
   <View style={styles.flexRowGap}>
   <CustomText fontFamily='Okra-Bold' fontSize={13}>Repeat last used customization?</CustomText>
   </View>
   </View>

    <View style={styles.noShadowFooterContainer}>
      <TouchableOpacity onPress={onOpenAddModal}>
       <CustomText fontFamily='Okra-Bold' color={Colors.active} fontSize={11}>+Add new things</CustomText>
      </TouchableOpacity>
      </View>


    </View>
  )
}

export default RepeatItemModal