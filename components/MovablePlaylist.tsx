import { SCROLL_HEIGHT_THRESHOLD, SONG_HEIGHT } from "@/constants";
import { clamp, objectMove } from "@/lib/utility";
import { Collection } from "@/types";
import { BlurView } from "expo-blur";
import * as Haptics from "expo-haptics";
import React, { useState } from "react";
import { Platform, useWindowDimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PlaylistCard from "./PlaylistCard";

export default function MovablePlaylist({
  id,
  playlist,
  positions,
  scrollY,
  songsCount,
}: {
  id: string;
  playlist: Collection;
  positions: any;
  scrollY: any;
  songsCount: number;
}) {
  const dimensions = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const [moving, setMoving] = useState(false);
  const top = useSharedValue(positions.value[id] * SONG_HEIGHT);
  const dragActive = useSharedValue(false);

  useAnimatedReaction(
    () => positions.value[id],
    (currentPosition, previousPosition) => {
      if (currentPosition !== previousPosition && !dragActive.value) {
        top.value = withSpring(currentPosition * SONG_HEIGHT, {
          mass: 0.5,
          damping: 15,
          stiffness: 100,
        });
      }
    },
    [moving]
  );

  const gestureHandler = useAnimatedGestureHandler({
    onStart() {
      dragActive.value = true;
      runOnJS(setMoving)(true);
      if (Platform.OS === "ios") {
        runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Medium);
      }
    },
    onActive(event) {
      const positionY = event.absoluteY + scrollY.value;

      top.value = positionY - SONG_HEIGHT;

      if (positionY <= scrollY.value + SCROLL_HEIGHT_THRESHOLD) {
        scrollY.value = withTiming(0, {
          duration: 1000,
          easing: Easing.out(Easing.exp),
        });
      } else if (
        positionY >=
        scrollY.value + dimensions.height - SCROLL_HEIGHT_THRESHOLD
      ) {
        const contentHeight = songsCount * SONG_HEIGHT;
        const containerHeight = dimensions.height - insets.top - insets.bottom;
        const maxScroll = contentHeight - containerHeight;
        scrollY.value = withTiming(maxScroll, {
          duration: 1000,
          easing: Easing.out(Easing.exp),
        });
      }

      const newPosition = clamp(
        Math.floor((positionY + SONG_HEIGHT / 2) / SONG_HEIGHT),
        0,
        songsCount - 1
      );

      if (newPosition !== positions.value[id]) {
        positions.value = objectMove(
          positions.value,
          positions.value[id],
          newPosition
        );
        if (Platform.OS === "ios") {
          runOnJS(Haptics.impactAsync)(Haptics.ImpactFeedbackStyle.Light);
        }
      }
    },
    onFinish() {
      dragActive.value = false;
      top.value = withSpring(positions.value[id] * SONG_HEIGHT, {
        mass: 0.5,
        damping: 15,
        stiffness: 100,
      });
      runOnJS(setMoving)(false);
    },
  });

  const animatedStyle = useAnimatedStyle(
    () => ({
      position: "absolute",
      left: 0,
      right: 0,
      top: top.value,
      zIndex: moving ? 1 : 0,
      elevation: 5,
      transform: [
        {
          scale: withSpring(moving ? 1.02 : 1, {
            mass: 0.3,
            damping: 10,
          }),
        },
      ],
    }),
    [moving]
  );

  return (
    <Animated.View style={animatedStyle}>
      <BlurView intensity={moving ? 100 : 0} tint="light">
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View style={{ maxWidth: "80%" }}>
            <PlaylistCard playlist={playlist} />
          </Animated.View>
        </PanGestureHandler>
      </BlurView>
    </Animated.View>
  );
}
