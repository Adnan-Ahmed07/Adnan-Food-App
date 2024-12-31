import DeliveryFocused from '@assets/tabicons/delivery_focused.png';
import Delivery from '@assets/tabicons/delivery.png';
import ReorderFocused from '@assets/tabicons/reorder_focused.png';
import Reorder from '@assets/tabicons/reorder.png';
import LiveFocused from '@assets/tabicons/live_focused.png';
import Live from '@assets/tabicons/live.png';
import Dining from '@assets/tabicons/dining.png';
import DiningFocused from '@assets/tabicons/dining_focused.png';

import CustomText from '@components/global/CustomText';
import {Colors} from '@unistyles/Constants';
import {FC, memo} from 'react';
import {Image, TextStyle, View, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import { useAppSelector } from '@states/reduxHook';


interface TabProps {
  name: string;
}
interface IconProps {
  focused: boolean;
}
const styles = {
  width: RFValue(18),
  height: RFValue(18),
};
const tabStyles: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};
const textStyleInActive: TextStyle = {
  textAlign: 'center',
  marginTop: 4,
  color: Colors.lightText,
  fontSize: RFValue(9.5),
};
const textStylenActive: TextStyle = {
  textAlign: 'center',
  marginTop: 4,
  color: Colors.active,
  fontSize: RFValue(9.5),
};
const TabIcon: FC<TabProps> = memo(({name}) => {
  return (
    <View style={tabStyles}>
      <Image
        source={
          name === 'Devivery'
            ? Delivery
            : name === 'Dining'
            ? Dining
            : name === 'Reorder'
            ? Reorder
            : Live
        }
        style={styles}
      />
      <CustomText style={textStyleInActive}>{name}</CustomText>
    </View>
  );
});

const TabIconFocused: FC<TabProps> = memo(({name}) => {
 
  
  const isVegMode = useAppSelector((state)=>state.user.isVegMode)
  return (
    <View style={tabStyles}>
      <Image
        source={
          name === 'Devivery'
            ? DeliveryFocused
            : name === 'Dining'
            ? DiningFocused
            : name === 'Reorder'
            ? ReorderFocused
            : LiveFocused
        }
        style={[styles, {tintColor:(name ==='Live')? undefined : isVegMode ? Colors.active : Colors.primary}]}
      />
      <CustomText style={textStylenActive}>{name}</CustomText>
    </View>
  );
})
export const DeliveryTabIcon:FC<IconProps> = ({focused}) => {

  return focused ? <TabIconFocused name="Devivery" /> : <TabIcon name="Devivery" />;
} 
export const ReorderTabIcon:FC<IconProps> = ({focused}) => {

  return focused ? <TabIconFocused name="Devivery" /> : <TabIcon name="Devivery" />;
} 
export const DiningTabIcon:FC<IconProps> = ({focused}) => {

  return focused ? <TabIconFocused name="Devivery" /> : <TabIcon name="Devivery" />;
} 
export const LiveTabIcon:FC<IconProps> = ({focused}) => {

  return focused ? <TabIconFocused name="Devivery" /> : <TabIcon name="Devivery" />;
} 