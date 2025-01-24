import TrackOptionsScreen from "@/screens/TrackOptionsScreen";
import { Song } from "@/types";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import React, { RefObject } from "react";
import { Colors } from "react-native-ui-lib";

interface TrackOptionsBottomSheetProps {
  bottomSheetModalRef: RefObject<BottomSheetModal>;
  handleSheetChanges: (index: number) => void;
  song: Song;
}

export default function TrackOptionsBottomSheet({
  bottomSheetModalRef,
  handleSheetChanges,
  song,
}: TrackOptionsBottomSheetProps) {
  const handleClosePress = () => bottomSheetModalRef?.current?.close();
  return (
    <BottomSheetModal
      ref={bottomSheetModalRef}
      snapPoints={["60%"]}
      enableDynamicSizing={false}
      onChange={handleSheetChanges}
      stackBehavior="push"
      enableOverDrag={false}
      backgroundStyle={{ backgroundColor: Colors.black }}
      handleIndicatorStyle={{
        backgroundColor: Colors.white,
      }}
    >
      <TrackOptionsScreen song={song} handleClosePress={handleClosePress} />
    </BottomSheetModal>
  );
}
