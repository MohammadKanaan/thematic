import { likedTracksAtom } from "@/lib/atoms";
import { useAtom } from "jotai";

export default function useLikeTrack(trackId: number) {
  const [likedTracks, setLikedTracks] = useAtom(likedTracksAtom);

  const isLiked = likedTracks.includes(trackId);

  const handleLike = () => {
    if (isLiked) {
      setLikedTracks(likedTracks.filter((id) => id !== trackId));
    } else {
      setLikedTracks([...likedTracks, trackId]);
    }
  };

  return { isLiked, handleLike };
}
