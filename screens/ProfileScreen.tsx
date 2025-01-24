import Divider from "@/components/Divider";
import { queryClient } from "@/lib/react-query";
import { CurrentUser } from "@/types";
import { useRouter } from "expo-router";
import { ArrowRightCircle, Bookmark, Cog, LogOut } from "lucide-react-native";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Colors, Image, Text } from "react-native-ui-lib";
import View from "react-native-ui-lib/view";

export default function ProfileScreen({
  currentUser,
}: {
  currentUser: CurrentUser;
}) {
  const router = useRouter();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{ uri: currentUser.profile_image_url }}
          style={styles.image}
        />
        <Text text70>{currentUser.email}</Text>
        <TouchableOpacity style={styles.addChannelButton}>
          <Text color={Colors.white}>Add Channel</Text>
          <ArrowRightCircle size={24} color={Colors.white} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listElementButton}
          onPress={() => {
            //@ts-ignore
            router.push("+not-found");
          }}
        >
          <Text text70>✅</Text>
          <Text text70>Licenses & Downloads</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listElementButton}
          onPress={() => {
            //@ts-ignore
            router.push("+not-found");
          }}
        >
          <Bookmark size={24} color={Colors.black} />
          <Text text70>My Playlists</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listElementButton}
          onPress={() => {
            //@ts-ignore
            router.push("+not-found");
          }}
        >
          <Text text70>🔥</Text>
          <Text text70>Trackfluencer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listElementButton}
          onPress={() => {
            //@ts-ignore
            router.push("+not-found");
          }}
        >
          <Cog size={24} color={Colors.black} />
          <Text text70>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listElementButton}
          onPress={() => {
            queryClient.invalidateQueries({
              queryKey: ["currentUser"],
            });
            router.replace("/auth/login");
          }}
        >
          <LogOut size={24} color={Colors.black} />
          <Text text70>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 10,
    alignItems: "center",
  },
  image: {
    borderRadius: 12,
    width: 300,
    height: 300,
  },
  addChannelButton: {
    backgroundColor: Colors.black,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: "100%",
    maxWidth: 300,
  },
  listElementButton: {
    backgroundColor: Colors.grey60,
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: "100%",
    maxWidth: 300,
  },
});
