import { View, Text, Platform, FlatList } from 'react-native'
import React, { FC } from 'react'
import { useRoute } from '@react-navigation/native'
import { useStyles } from 'react-native-unistyles';
import { restaurantHeaderStyles } from '@unistyles/restuarantStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomSafeAreaView from '@components/global/CustomSafeAreaView';

import RestaurantHeader from '@components/restaurant/RestaurantHeader';
import SortingFilters from '@components/home/SortingFilters';
import { restaurantItemsData, restaurantsItemfiltersOption } from '@utils/dummyData';
import DottedLine from '@components/ui/DottedLine';

const RestaurantScreen:FC = () => {
  const route=useRoute() as any;
  const restaurant=route?.params?.item
  const {styles}=useStyles(restaurantHeaderStyles)
  const insets=useSafeAreaInsets()
  const renderItem=({itme}:any)=>{ 
    return(
      <View>
        
      </View>
    )
  }
  return (
    <>
     <View style={{height:Platform.OS ==='android'? insets.top:0 }} />
        <CustomSafeAreaView>
        <RestaurantHeader title={restaurant?.name} />
        <View style={styles.sortingContainer}>
         <SortingFilters menuTitle='Filter' options={restaurantsItemfiltersOption}  />
        </View>

        <FlatList 
        data={restaurantItemsData}
        renderItem={renderItem}
        scrollEventThrottle={16}
        keyExtractor={(item)=>item.id}
        ItemSeparatorComponent={()=>( 
          <View style={styles.mainPadding}>
             <DottedLine/>
          </View>
        )}
        contentContainerStyle={styles.scrollContainer}
        />
        </CustomSafeAreaView>
         
     
    </>
  )
}

export default RestaurantScreen