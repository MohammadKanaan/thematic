import useLikeTrack from "@/hooks/useLikeTrack";
import { Song } from "@/types";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import { EllipsisVertical, Heart, Share2 } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Text } from "react-native-ui-lib";
import View from "react-native-ui-lib/view";

export default function Title({
  song,
  handlePresentSheetPress,
  bottomSheetModalRef,
}: {
  song: Song;
  handlePresentSheetPress: () => void;
  bottomSheetModalRef: React.RefObject<BottomSheetModal>;
}) {
  const { isLiked, handleLike } = useLikeTrack(song.id);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        <Text text60>{song.name}</Text>
        <TouchableOpacity
          onPress={() => {
            bottomSheetModalRef.current?.close();
            // @ts-ignore
            router.push(`/(stack)/artist/${song.artist_id}`);
          }}
        >
          <Text text70 color={Colors.textSecondary}>
            {song.artist_name}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.grow} />
      <TouchableOpacity onPress={handleLike}>
        {isLiked ? (
          <Heart size={24} fill={Colors.white} color={Colors.white} />
        ) : (
          <Heart size={24} color={Colors.white} />
        )}
      </TouchableOpacity>
      <TouchableOpacity>
        <Share2 size={24} color={Colors.white} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePresentSheetPress}>
        <EllipsisVertical size={24} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    width: "100%",
    marginTop: 20,
  },
  grow: {
    flexGrow: 1,
  },
});
