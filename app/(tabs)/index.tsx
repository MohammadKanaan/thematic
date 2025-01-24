import axiosInstance from "@/lib/axios";
import { StyleSheet } from "react-native";
import { Button } from "react-native-ui-lib";
import Text from "react-native-ui-lib/text";
import View from "react-native-ui-lib/view";

async function getAccountDetails() {
  const res = await axiosInstance.get(
    "https://staging-api.hellothematic.com/api/v2/account"
  );
  console.log(res.data);
}

export default function HomeScreen() {
  return (
    <View flex center>
      <Text text10>Welcome</Text>
      <Button onPress={getAccountDetails}>
        <Text>Test</Text>
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
