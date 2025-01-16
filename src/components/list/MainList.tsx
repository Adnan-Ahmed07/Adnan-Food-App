import {
 
  SectionList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ViewToken,
} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import ExploreSection from '@components/home/ExploreSection';
import RestaurantList from './RestaurantList';
import {useStyles} from 'react-native-unistyles';
import {restaurantStyles} from '@unistyles/restuarantStyles';
import {useSharedState} from '@features/tabs/SharedContext';
import {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import useSharedValue from 'react-native-reanimated';
const sectionedData = [
  {title: 'Explore', data: [{}], renderItem: () => <ExploreSection />},
  {title: 'Restaurants', data: [{}], renderItem: () => <RestaurantList />},
];
const MainList: FC = () => {
  const {styles} = useStyles(restaurantStyles);
  const {scrollY, scrollToTop, scrollGlobal} = useSharedState();
  const previousScrollYTopButton = useRef<number>(0);
  const prevScrollY = useRef(0);
  const sectionListRef = useRef<SectionList>(null);
  const [isRestaurantVisiable, setIsRestaurantVisiable] = useState(false);
  const [isNearEnd, setIsNearEnd] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event?.nativeEvent?.contentOffset?.y;
    const isScrollingDown = currentScrollY > prevScrollY.current;
    scrollY.value = isScrollingDown
      ? withTiming(1, {duration: 300})
      : withTiming(0, {duration: 300});
    scrollGlobal.value = currentScrollY;
    prevScrollY.current = currentScrollY;

    const containerHeight = event.nativeEvent.contentSize.height;
    const layoutHeight = event?.nativeEvent?.layoutMeasurement?.height;
    const offset = event?.nativeEvent?.contentOffset?.y;

    setIsNearEnd(offset + layoutHeight >= containerHeight - 500);
  };
  const handleScrollToTop = async () => {
    scrollToTop();
    sectionListRef.current?.scrollToLocation({
      sectionIndex: 0,
      itemIndex: 0,
      animated: true,
      viewPosition: 0,
    });
  };
  const backToTopStyle = useAnimatedStyle(() => {
    const isScrollingUp =
      scrollGlobal?.value < previousScrollYTopButton.current &&
      scrollGlobal.value > 180;
    const opacity = withTiming(
      isScrollingUp && (isRestaurantVisiable || isNearEnd) ? 1 : 0,
      {duration: 300},
    );
    const translateY = withTiming(
      isScrollingUp && (isRestaurantVisiable || isNearEnd) ? 0 : 10,
      {duration: 300},
    );
    previousScrollYTopButton.current = scrollGlobal.value;
    return {
      opacity,
      transform: [{translateY}],
    };
  });
  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 80,
  };
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: Array<ViewToken>;
  }) => {
    const restaurantVisiable = viewableItems.some(
      item => item?.section?.title === 'Restaurants' && item?.isViewable,
    );
    setIsRestaurantVisiable(restaurantVisiable);
  };
  return (
    <>
      <SectionList
        sections={sectionedData}
        overScrollMode="always"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        bounces={false}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        stickySectionHeadersEnabled={true}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
      />
    </>
  );
};

export default MainList;
