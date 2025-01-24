import { Song as SongType } from "@/types";
import React from "react";
import Song from "./Song";

export default function SongCard({ song }: { song: SongType }) {
  return (
    <Song
      title={song.name}
      artist={song.artist_name}
      cover={song.album_art_url}
    />
  );
}
