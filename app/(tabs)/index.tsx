import useGetUser from "@/hooks/useGetUser";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "react-native-ui-lib";
import Text from "react-native-ui-lib/text";
import View from "react-native-ui-lib/view";

export default function HomeScreen() {
  const router = useRouter();
  const currentUser = useGetUser();
  return (
    <View flex center>
      <Text text10>Welcome {currentUser?.email}</Text>
      <TouchableOpacity
        onPress={() => router.push("/profile")}
        style={styles.button}
      >
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.green60,
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});
