import getSearchResults from "@/actions/search";
import ResultGroup from "@/components/ResultGroup";
import useDebounce from "@/hooks/useDebounce";
import { isSearchingAtom, searchAtom } from "@/lib/atoms";
import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { FlatList } from "react-native";
import { Colors, LoaderScreen, Text } from "react-native-ui-lib";
import View from "react-native-ui-lib/view";

export default function SearchScreen() {
  const [search] = useAtom(searchAtom);
  const [isSearching] = useAtom(isSearchingAtom);
  const debouncedSearch = useDebounce(search, 500);

  const { data: searchResult, isLoading } = useQuery({
    queryKey: ["Search", debouncedSearch],
    queryFn: () => getSearchResults(search),
    enabled: !!debouncedSearch,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const getSections = () => {
    if (!searchResult) return [];
    console.log("searchResult", searchResult);
    const sections = [];
    if (searchResult.artists && searchResult.artists.length > 0) {
      sections.push({
        type: "artists",
        title: "Artists",
        data: searchResult.artists,
      });
    }
    if (searchResult.creators && searchResult.creators.length > 0) {
      sections.push({
        type: "creators",
        title: "Creators",
        data: searchResult.creators,
      });
    }
    if (searchResult.songs && searchResult.songs.length > 0) {
      sections.push({
        type: "songs",
        title: "Songs",
        data: searchResult.songs,
      });
    }
    if (searchResult.collcetions && searchResult.collcetions.length > 0) {
      sections.push({
        type: "collcetions",
        title: "Collections & Playlists",
        data: searchResult.collcetions,
      });
    }
    return sections;
  };

  console.log("getSections", getSections());
  return (
    <View flex gap-16 padding-16>
      {searchResult == undefined ||
        (searchResult?.artists &&
          searchResult?.songs &&
          searchResult?.collcetions &&
          searchResult?.artists.length === 0 &&
          // searchResult?.albums.length === 0 &&
          searchResult?.songs.length === 0 &&
          searchResult?.collcetions.length === 0 && (
            <Text text60 center>
              No results found
            </Text>
          ))}
      {isLoading ? (
        <LoaderScreen color={Colors.grey40} />
      ) : (
        <FlatList
          data={getSections()}
          keyExtractor={(item) => item.type}
          renderItem={({ item }) => (
            <ResultGroup title={item.title} data={item.data} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
