import useGetUser from "@/hooks/useGetUser";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
import { Button } from "react-native-ui-lib";
import Text from "react-native-ui-lib/text";
import View from "react-native-ui-lib/view";

export default function HomeScreen() {
  const router = useRouter();
  const currentUser = useGetUser();
  return (
    <View flex center>
      <Text text10>Welcome {currentUser?.email}</Text>
      <Button onPress={() => router.push("/auth/login")}>
        <Text>Login</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
