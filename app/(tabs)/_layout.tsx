import SearchHeader from "@/components/Headers/SearchHeader";
import { searchAtom } from "@/lib/atoms";
import themeInit from "@/lib/themeInit";
import { Tabs } from "expo-router";
import { useAtom } from "jotai";
import React from "react";

export default function TabLayout() {
  themeInit();
  const [search] = useAtom(searchAtom);
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
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
    </Tabs>
  );
}
