import React from "react";
import { Text, TouchableOpacity } from "react-native-ui-lib";
import View from "react-native-ui-lib/view";

export default function TrackOptionsItem({
  icon,
  title,
  onPress,
  handleClosePress,
}: {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
  handleClosePress: () => void;
}) {
  return (
    <TouchableOpacity
      padding-10
      onPress={() => {
        onPress();
        handleClosePress();
      }}
    >
      <View flex row gap-20 centerV>
        {icon}
        <Text text70>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
