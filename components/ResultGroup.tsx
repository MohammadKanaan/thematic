import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { Text, View } from "react-native-ui-lib";
import PlaylistCard from "./PlaylistCard";
import SongCard from "./SongCard";
import UserCard from "./UserCard";

export default function ResultGroup({
  title,
  data,
}: {
  title: string;
  data: any[];
}) {
  const renderItem = ({ item }: { item: any }) => {
    if (
      title.toLowerCase() === "artists" ||
      title.toLowerCase() === "creators"
    ) {
      return <UserCard user={item} />;
    } else if (title.toLowerCase() === "playlists") {
      return <PlaylistCard playlist={item} />;
    } else {
      return <SongCard song={item} />;
    }
  };

  return (
    <View style={styles.group}>
      <Text text40>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  group: {
    marginBottom: 10,
    gap: 8,
  },
});
