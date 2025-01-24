import { formatDuration } from "@/lib/utility";
import { Song } from "@/types";
import Slider from "@react-native-community/slider";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { Colors, Text } from "react-native-ui-lib";
import View from "react-native-ui-lib/view";

export default function PlayerSlider({
  sliderValue,
  setSliderValue,
  track,
  isPlaying,
  setIsPlaying,
}: {
  sliderValue: number;
  setSliderValue: (value: number) => void;
  track: Song;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<boolean>;
}) {
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (isPlaying) setSliderValue(sliderValue + 1);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [sliderValue, isPlaying]);

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        value={sliderValue}
        minimumValue={0}
        maximumValue={100}
        minimumTrackTintColor={Colors.grey80}
        maximumTrackTintColor={Colors.grey20}
        thumbTintColor={Colors.transparent}
        onValueChange={(value) => setSliderValue(value)}
        tapToSeek
        // thumbImage={require("@/public/images/thumb.png")}
      />
      <View style={styles.timeContainer}>
        <Text color={Colors.textSecondary}>
          {formatDuration(Math.floor(sliderValue))}
        </Text>
        <View flexG />
        <Text color={Colors.textSecondary}>{track.duration}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  slider: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
});
