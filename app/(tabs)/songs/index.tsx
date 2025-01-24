import getSongs from "@/actions/songs";
import SongsScreen from "@/screens/SongsScreen";
import { useQuery } from "@tanstack/react-query";
import React from "react";

export default function songs() {
  const { data: songs } = useQuery({
    queryKey: ["songs"],
    queryFn: () => getSongs(),
  });

  return <SongsScreen songs={songs || []} />;
}
