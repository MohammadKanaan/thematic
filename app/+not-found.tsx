import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-ui-lib";
export default function NotFoundScreen() {
  return (
    <View>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.container}>
        <Text text20>This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text text20>Go to home screen!</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
