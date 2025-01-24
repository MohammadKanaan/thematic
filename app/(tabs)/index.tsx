import useGetUser from "@/hooks/useGetUser";
import { searchAtom } from "@/lib/atoms";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { StyleSheet } from "react-native";
import { Button, Dialog, PanningProvider } from "react-native-ui-lib";
import Text from "react-native-ui-lib/text";
import View from "react-native-ui-lib/view";

export default function HomeScreen() {
  const router = useRouter();
  const currentUser = useGetUser();
  const [search] = useAtom(searchAtom);
  return (
    <View flex center>
      {/* {!!search && (
        <Dialog
          visible={!!search}
          onDismiss={() => console.log("dismissed")}
          panDirection={PanningProvider.Directions.DOWN}
        >
          <Text text60>Content</Text>
        </Dialog>
      )} */}
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
  dialogContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
