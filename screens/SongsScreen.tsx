import SongCard from "@/components/SongCard";
import { Song } from "@/types";
import React from "react";
import { StyleSheet } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { Text, View } from "react-native-ui-lib";

export default function SongsScreen({
  songs,
  fetchMore,
}: {
  songs: Song[];
  fetchMore: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text text40>Songs</Text>
      <FlatList
        data={songs}
        renderItem={({ item }) => <SongCard song={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <TouchableOpacity onPress={fetchMore}>
        <Text>Fetch more</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  separator: {
    height: 20,
  },
});
