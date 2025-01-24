import React from "react";
import { User } from "@/types";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors, Image, Text } from "react-native-ui-lib";
import View from "react-native-ui-lib/view";
import { useRouter } from "expo-router";
import { capitalizeWords } from "@/lib/utility";

export default function UserCard({ user }: { user: User }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      // @ts-ignore
      onPress={() => router.push(`/(tabs)/users/${user.id}`)}
      activeOpacity={0.8}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 15,
          alignSelf: "flex-start",
          minWidth: 150,
        }}
      >
        <Image
          source={{ uri: user.profile_image_url }}
          style={{ width: 75, height: 75, borderRadius: 75 }}
        />
        <View>
          <Text text60 numberOfLines={1} marginT-10>
            {user.profile_name}
          </Text>
          <Text color={Colors.grey30} text70 numberOfLines={1} marginT-10>
            {capitalizeWords(user.user_type)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
