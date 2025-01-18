import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@states/reduxHook';
import { useStyles } from 'react-native-unistyles';
import { foodStyles } from '@unistyles/foodStyles';
import { selectRestaurantCartItem } from '@states/reducers/cartSlice';
import CustomText from '@components/global/CustomText';
import { Colors } from '@unistyles/Constants';

const AddButton:FC<{item:any; restaurant:any}> = ({item,restaurant}) => {
  const dispatch=useAppDispatch()
  const {styles}=useStyles(foodStyles)
  const cart=useAppSelector(selectRestaurantCartItem(restaurant?.id,item?.id))
  const addCartHandler=useCallback(()=>{ 
        if(item?.isCustomizable){ 
          if(cart!=null){ 
            console.log('open modal')
            return
          }
        } else{ 
          dispatch(addItemToCart(item,restaurant))
        }
  },[dispatch,item,restaurant,cart])
  return (
    <>
    <View style={styles.addButtonContainer(cart!=null)}>
    
    {cart?(null):(
      <TouchableOpacity onPress={addCartHandler} style={styles.noSelectionContainer} activeOpacity={0.6} accessibilityLabel='Add item to cart'>
        <CustomText fontFamily='Okra-Bold' variant='h5' color={Colors.primary}>ADD</CustomText>
        <CustomText  variant='h5' color={Colors.primary} style={styles.plusSmallIcon} >+</CustomText>
      </TouchableOpacity>
    )}

   
    
  
    </View>
    {item?.isCustomizable &&( 
    <CustomText fontFamily='Okra-Medium' style={styles.customizeText}>
   customisable
    </CustomText>

   )}
    </>
  )
}

export default AddButton