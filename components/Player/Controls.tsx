import {
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react-native";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native-ui-lib";
import View from "react-native-ui-lib/view";

export default function Controls({
  isPlaying,
  setIsPlaying,
}: {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("Shuffle")}>
        <Shuffle size={24} color={Colors.grey30} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          console.log("Skip Back");
        }}
      >
        <SkipBack size={50} fill={Colors.black} color={Colors.black} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? (
          <Pause size={50} fill={Colors.black} color={Colors.black} />
        ) : (
          <Play size={50} fill={Colors.black} color={Colors.black} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Skip Forward")}>
        <SkipForward size={50} fill={Colors.black} color={Colors.black} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Repeat")}>
        <Repeat size={24} color={Colors.grey30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});
