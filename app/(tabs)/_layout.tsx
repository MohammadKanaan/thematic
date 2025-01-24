import SearchHeader from "@/components/Headers/SearchHeader";
import TabBar from "@/components/TabBar";
import themeInit from "@/lib/themeInit";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  themeInit();
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="songs/index"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="songs/[id]"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          header: () => <SearchHeader />,
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
