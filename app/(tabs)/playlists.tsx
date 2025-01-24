import AuthGuard from "@/components/AuthGuard";
import MyPlaylistsScreen from "@/screens/MyPlaylistsScreen";
import React from "react";

export default function playlists() {
  return (
    <AuthGuard>
      <MyPlaylistsScreen />
    </AuthGuard>
  );
}
