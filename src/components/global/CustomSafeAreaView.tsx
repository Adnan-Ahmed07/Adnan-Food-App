import { SafeAreaView, StyleSheet, View,ViewStyle } from 'react-native'
import {FC,ReactNode} from 'react'
import { Colors } from '@unistyles/Constants';
interface CustomSafeAreaViewProps{  
  children: ReactNode;
  style?: ViewStyle;
}
const CustomSafeAreaView:FC<CustomSafeAreaViewProps> = ({children,style}) => {
  return (
    <View style={[styles.container,style]}>
      <SafeAreaView />
      {children}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background 
  },
});

export default CustomSafeAreaView