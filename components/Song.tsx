import React from "react";
import { SONG_HEIGHT } from "@/constants";
import View from "react-native-ui-lib/view";
import { Colors, Image, Text } from "react-native-ui-lib";

interface SongProps {
  artist: string;
  cover: string;
  title: string;
}

export default function Song({ artist, cover, title }: SongProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
        height: SONG_HEIGHT,
        padding: 10,
      }}
    >
      <Image source={{ uri: cover }} style={{ width: 75, height: 75 }} />

      <View>
        <Text text60 numberOfLines={1} marginT-10>
          {title}
        </Text>

        <Text color={Colors.grey50} text70 numberOfLines={1} marginT-10>
          {artist}
        </Text>
      </View>
    </View>
  );
}
