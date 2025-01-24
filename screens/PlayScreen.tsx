import TrackOptionsBottomSheet from "@/components/BottomSheets/TrackOptionsBottomSheet";
import Controls from "@/components/Player/Controls";
import Title from "@/components/Player/Title";
import PlayerSlider from "@/components/PlayerSlider";
import { Song } from "@/types";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { TableOfContents } from "lucide-react-native";
import React, { useCallback, useRef, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "react-native-ui-lib";
import View from "react-native-ui-lib/view";

export default function PlayScreen({ song }: { song: Song }) {
  const [sliderValue, setSliderValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Options Bottom Sheet
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentSheetPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    if (index === -1) {
      bottomSheetModalRef.current?.close();
    }
  }, []);

  return (
    <View flex gap-10 centerH padding-20>
      <Image
        source={{
          uri: song.album_art_url || song.artist_image_url,
        }}
        style={{ width: 350, height: 350, borderRadius: 12 }}
      />
      <Title
        song={song}
        handlePresentSheetPress={handlePresentSheetPress}
        bottomSheetModalRef={bottomSheetModalRef}
      />
      <Controls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <PlayerSlider
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        track={song}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <TrackOptionsBottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        handleSheetChanges={handleSheetChanges}
        song={song}
      />
    </View>
  );
}
