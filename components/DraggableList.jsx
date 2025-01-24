import { listToObject } from "@/lib/utility";
import React from "react";
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

const DraggableList = ({
  data,
  itemHeight,
  renderItem,
  containerStyle,
  scrollViewStyle,
  onReorder,
}) => {
  const positions = useSharedValue(listToObject(data));
  const scrollY = useSharedValue(0);
  const scrollViewRef = useAnimatedRef();

  // Watch for position changes
  useAnimatedReaction(
    () => positions.value,
    (newPositions, prevPositions) => {
      if (
        prevPositions &&
        JSON.stringify(newPositions) !== JSON.stringify(prevPositions)
      ) {
        // Get new order based on positions
        const newOrder = Object.entries(newPositions)
          .sort(([, a], [, b]) => a - b)
          .map(([id]) => id);

        // Call onReorder with new order
        runOnJS(onReorder)(newOrder);
      }
    }
  );

  useAnimatedReaction(
    () => scrollY.value,
    (scrolling) => {
      scrollViewRef.current?.scrollTo({ y: scrolling, animated: false });
    }
  );

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <Animated.ScrollView
      ref={scrollViewRef}
      onScroll={handleScroll}
      scrollEventThrottle={16}
      style={[
        {
          flex: 1,
          position: "relative",
          backgroundColor: "black",
        },
        scrollViewStyle,
      ]}
      contentContainerStyle={{
        height: data.length * itemHeight,
        ...containerStyle,
      }}
    >
      {data.map((item) =>
        renderItem({
          key: item.id,
          item,
          positions,
          scrollY,
          itemsCount: data.length,
        })
      )}
    </Animated.ScrollView>
  );
};

export default DraggableList;
