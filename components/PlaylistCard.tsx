import React from "react";
import { Collection } from "@/types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Image, Text } from "react-native-ui-lib";
import View from "react-native-ui-lib/view";
import { useRouter } from "expo-router";

export default function PlaylistCard({ playlist }: { playlist: Collection }) {
  const router = useRouter();

  return (
    <TouchableOpacity
      //@ts-ignore
      onPress={() => router.push(`/playlist/${playlist.id}`)}
      activeOpacity={0.8}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 15,
          alignSelf: "flex-start",
          minWidth: 150,
        }}
      >
        <Image
          source={{
            uri: playlist?.art_file_url,
          }}
          style={{ width: 75, height: 75, borderRadius: 75 }}
        />
        <View>
          <Text text60 numberOfLines={1} marginT-10>
            {playlist.name}
          </Text>
          <Text color={Colors.grey30} text70 numberOfLines={1} marginT-10>
            Playlist
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
