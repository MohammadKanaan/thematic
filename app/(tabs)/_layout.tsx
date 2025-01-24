import { Tabs } from "expo-router";
import React from "react";
import themeInit from "@/lib/themeInit";
import { auth_token } from "@/constants";
import { setBearerToken } from "@/lib/axios";

export default function TabLayout() {
  themeInit();
  setBearerToken(auth_token);

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />
    </Tabs>
  );
}
