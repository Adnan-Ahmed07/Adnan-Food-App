import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '@states/reduxHook';
import { useStyles } from 'react-native-unistyles';
import { foodStyles } from '@unistyles/foodStyles';

const AddButton:FC<{item:any; restaurant:any}> = ({item,restaurant}) => {
  const dispatch=useAppDispatch()
  const {styles}=useStyles(foodStyles)
  const cart=useAppSelector((state)=>state.cart.carts)
  return (
    <>
    <View style={styles.addButtonContainer(cart!=null)}>

    </View>
    </>
  )
}

export default AddButton