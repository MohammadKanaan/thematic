import { Song as SongType } from "@/types";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { useCallback, useRef } from "react";
import { TouchableOpacity } from "react-native";
import { View } from "react-native-ui-lib";
import PlayingBottomSheet from "./BottomSheets/PlayingBottomSheet";
import Song from "./Song";

export default function SongCard({ song }: { song: SongType }) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <View>
      {
        // @ts-ignore
      }
      <TouchableOpacity onPress={handlePresentModalPress} activeOpacity={0.8}>
        <Song
          title={song.name}
          artist={song.artist_name}
          cover={song.album_art_url}
        />
      </TouchableOpacity>
      <PlayingBottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        handleSheetChanges={handleSheetChanges}
        song={song}
      />
    </View>
  );
}
