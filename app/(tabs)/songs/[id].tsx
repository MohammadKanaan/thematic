import getSongs from "@/actions/songs";
import SongsScreen from "@/screens/SongsScreen";
import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";

export default function songs() {
  const { id } = useLocalSearchParams();
  const [offset, setOffset] = useState(0);
  const { data: songs } = useQuery({
    queryKey: ["songs", offset],
    queryFn: () => getSongs(offset, String(id)),
  });

  function fetchMore() {
    setOffset(songs?.length || 0);
  }

  return <SongsScreen songs={songs || []} fetchMore={fetchMore} />;
}
