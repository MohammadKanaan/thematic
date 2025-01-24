import getMyPlaylists from "@/actions/playlists";
import DraggableList from "@/components/DraggableList";
import MovablePlaylist from "@/components/MovablePlaylist";
import { SONG_HEIGHT } from "@/constants";
import useGetUser from "@/hooks/useGetUser";
import { queuedTracksAtom } from "@/lib/atoms";
import { queryClient } from "@/lib/react-query";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import React, { useCallback } from "react";
import { ActivityIndicator } from "react-native";
import { Colors, Text, TouchableOpacity, View } from "react-native-ui-lib";

// @ts-ignore
const renderItem = ({ item, positions, scrollY, itemsCount }) => (
  <MovablePlaylist
    key={item.id || item}
    id={item.id}
    playlist={item}
    positions={positions}
    scrollY={scrollY}
    songsCount={itemsCount}
  />
);

export default function MyPlaylistsScreen() {
  const currentUserId = useGetUser()?.id;
  const [queue, setQueue] = useAtom(queuedTracksAtom);
  const { data: myPlaylists, isLoading } = useQuery({
    queryKey: ["playlist", currentUserId],
    queryFn: getMyPlaylists,
    refetchOnWindowFocus: true,
  });

  const handleReorder = useCallback(
    (newOrder: any) => {
      // Update queue with new order
      setQueue(newOrder);
    },
    [setQueue]
  );

  if (isLoading)
    return (
      <View center>
        <ActivityIndicator size={30} />
      </View>
    );

  return (
    <View flex center padding-16>
      {myPlaylists &&
        myPlaylists.length > 0 &&
        myPlaylists.map((item) => {
          return <Text>{item.id}</Text>;
        })}

      {myPlaylists && myPlaylists.length > 0 ? (
        //@ts-ignore
        // FIXME: Not displaying the elements
        <DraggableList
          data={myPlaylists}
          itemHeight={SONG_HEIGHT}
          renderItem={renderItem}
          onReorder={handleReorder}
        />
      ) : (
        <View center gap-10>
          <Text text70>You don't have any playlists</Text>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.green60,
              padding: 12,
              paddingHorizontal: 16,
              borderRadius: 5,
              alignItems: "center",
            }}
            onPress={() => {
              queryClient.refetchQueries({
                queryKey: ["playlist", currentUserId],
              });
            }}
          >
            <Text text70>Refetch</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
