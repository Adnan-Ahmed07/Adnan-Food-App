import { View, Text, Image } from 'react-native'
import React, { FC, useRef } from 'react'
import { useAppSelector } from '@states/reduxHook';
import { selectRestaurantCartItem } from '@states/reducers/cartSlice';
import { useStyles } from 'react-native-unistyles';
import { modelStyles } from '@unistyles/modelStyles';

const MiniFoodCard:FC <{
  item:any;
  cus:any;
  restaurant:any;
}>=({item,cus,restaurant})=>{
  const {styles}=useStyles(modelStyles)
  const cardItem=useAppSelector(selectRestaurantCartItem(restaurant?.id,item?.id))
  const modalRef=useRef<any>(null)
  return (
    <View style={styles.flexRowItemBaseline}>
      <View style={styles.flexRowGapBaseline}>

        <Image style={styles.vegIcon}
        source={cardItem?.isVeg ?

       require('@assets/icons/veg.png') :
        require('@assets/icons/non_veg.png')

        }/>

      </View>
    </View>
  )
}

export default MiniFoodCard