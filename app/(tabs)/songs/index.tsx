import getSongs from "@/actions/songs";
import SongsScreen from "@/screens/SongsScreen";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

export default function songs() {
  const [offset, setOffset] = useState(0);
  const { data: songs } = useQuery({
    queryKey: ["songs", offset],
    queryFn: () => getSongs(offset),
  });

  function fetchMore() {
    setOffset(songs?.length || 0);
  }

  return <SongsScreen songs={songs || []} fetchMore={fetchMore} />;
}
