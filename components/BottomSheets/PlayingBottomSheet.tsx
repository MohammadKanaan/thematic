import PlayScreen from "@/screens/PlayScreen";
import { Song } from "@/types";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import React, { RefObject } from "react";
import { Colors } from "react-native-ui-lib";

interface PlayingBottomSheetProps {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  handleSheetChanges: (index: number) => void;
  song: Song;
}

export default function PlayingBottomSheet({
  bottomSheetModalRef,
  handleSheetChanges,
  song,
}: PlayingBottomSheetProps) {
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      onChange={handleSheetChanges}
      snapPoints={["100%"]}
      style={{ backgroundColor: "black", flex: 1 }}
      enableContentPanningGesture={false}
      enableOverDrag={false}
      backgroundStyle={{ backgroundColor: Colors.black }}
      handleIndicatorStyle={{
        backgroundColor: Colors.white,
      }}
    >
      <BottomSheetView style={{ backgroundColor: "black", flex: 1 }}>
        <PlayScreen song={song} />
      </BottomSheetView>
    </BottomSheetModal>
  );
}
