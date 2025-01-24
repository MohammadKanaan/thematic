import getSongs from "@/actions/songs";
import SongsScreen from "@/screens/SongsScreen";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import React from "react";

export default function songs() {
  const { id } = useLocalSearchParams();
  const { data: songs } = useQuery({
    queryKey: ["songs"],
    queryFn: () => getSongs(String(id)),
  });

  return <SongsScreen songs={songs || []} />;
}
