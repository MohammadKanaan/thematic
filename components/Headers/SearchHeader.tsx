import { isSearchingAtom, searchAtom } from "@/lib/atoms";
import { useRouter } from "expo-router";
import { useAtom } from "jotai";
import { Search, X } from "lucide-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Colors, TouchableOpacity } from "react-native-ui-lib";

export default function SearchHeader() {
  const [search, setSearch] = useAtom(searchAtom);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <TextInput
          placeholder="Search"
          placeholderTextColor="black"
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={styles.input}
          onKeyPress={(e) => {
            // TODO: Route to 404 with search keyword as params
            // if (e.nativeEvent.key === "Enter")
            // router.push("");
          }}
        />
        {search.length > 0 && (
          <TouchableOpacity onPress={() => setSearch("")}>
            <X size={16} color={Colors.grey20} />
          </TouchableOpacity>
        )}
        <View style={styles.searchIcon}>
          <Search size={20} color={Colors.white} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: Colors.transparent,
  },
  search: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingRight: 0,
    height: 50,
    borderRadius: 100,
    backgroundColor: Colors.white,
  },
  input: {
    flex: 1,
    color: "black",
    height: 40,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 2,
  },
  searchIcon: {
    height: 50,
    padding: 10,
    backgroundColor: Colors.green40,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
  },
});
