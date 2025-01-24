import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import {
  CircleDot,
  CirclePlus,
  Heart,
  Info,
  MicVocal,
} from "lucide-react-native";
import React from "react";
import { Colors, Text } from "react-native-ui-lib";
import View from "react-native-ui-lib/view";
import useLikeTrack from "@/hooks/useLikeTrack";
import { useRouter } from "expo-router";
import { Song } from "@/types";
import Divider from "@/components/Divider";
import TrackOptionsItem from "@/components/TrackOptionsItem";

function TrackOptionsHead({ song }: { song: Song }) {
  return (
    <View flex row gap-20 centerV>
      {/* <Image
        source={{
          uri: song.expand?.album?.image || song.expand?.artist?.image,
        }}
        style={{ height: 200 }}
      /> */}
      <View style={{ height: 75, width: 75, backgroundColor: Colors.grey20 }} />
      <View flex>
        <Text>{song.name}</Text>
        <Text color={Colors.grey40}>{song.artist_name}</Text>
      </View>
    </View>
  );
}

export default function TrackOptionsScreen({
  song,
  handleClosePress,
}: {
  song: Song;
  handleClosePress: () => void;
}) {
  const { isLiked, handleLike } = useLikeTrack(song.id);
  const router = useRouter();
  return (
    <View flex padding-10>
      <BottomSheetScrollView>
        <View gap-20>
          <TrackOptionsHead song={song} />
          <Divider color={Colors.grey10} />
          <TrackOptionsItem
            handleClosePress={handleClosePress}
            title={
              isLiked ? "Remove from My Collection" : "Add to My Collection"
            }
            icon={
              isLiked ? (
                <Heart size={24} fill={Colors.white} color={Colors.white} />
              ) : (
                <Heart size={24} color={Colors.white} />
              )
            }
            onPress={handleLike}
          />
          <TrackOptionsItem
            handleClosePress={handleClosePress}
            title="Add to Playlist"
            icon={<CirclePlus size={24} color={Colors.white} />}
            onPress={() => {
              console.log("Add to playlist");
            }}
          />
          <TrackOptionsItem
            handleClosePress={handleClosePress}
            title="Credits"
            icon={<Info size={24} color={Colors.white} />}
            onPress={() => {
              // router.push(``);
            }}
          />
          <TrackOptionsItem
            handleClosePress={handleClosePress}
            title="Go to album"
            icon={<CircleDot size={24} color={Colors.white} />}
            onPress={() => {
              // @ts-ignore
              router.push(`album/${song.album_id}`);
            }}
          />
          <TrackOptionsItem
            handleClosePress={handleClosePress}
            title="Go to Artist"
            icon={<MicVocal size={24} color={Colors.white} />}
            onPress={() => {
              // @ts-ignore
              router.push(`artist/${song.artist_id}`);
            }}
          />
        </View>
      </BottomSheetScrollView>
    </View>
  );
}
