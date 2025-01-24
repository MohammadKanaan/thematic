import useGetUser from "@/hooks/useGetUser";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Text, View } from "react-native-ui-lib";

export default function AuthGuard({ children }: any) {
  const router = useRouter();
  const currentUser = useGetUser();
  if (!currentUser) {
    return (
      <View flex center gap-10>
        <Text text60>You should be logged in to access this page.</Text>
        <TouchableOpacity
          onPress={() => router.replace("/auth/login")}
          style={styles.button}
        >
          <Text text70>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return children;
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.green60,
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});
