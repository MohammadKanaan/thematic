import { PlatformPressable } from "@react-navigation/elements";
import { useLinkBuilder } from "@react-navigation/native";
import { HomeIcon, Library, Search } from "lucide-react-native";
import { StyleSheet } from "react-native";
import { Colors, Text } from "react-native-ui-lib";
import View from "react-native-ui-lib/view";

export default function TabBar({ state, descriptors, navigation }) {
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        if (["_sitemap", "+not-found", "auth", "index"].includes(route.name))
          return null;

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
            key={route.key}
          >
            <Text
              center
              style={{ color: isFocused ? Colors.primary : Colors.grey30 }}
            >
              {route.name === "home" ? (
                <HomeIcon
                  fill={isFocused ? "white" : ""}
                  color={isFocused ? Colors.primary : Colors.grey30}
                />
              ) : route.name === "search" ? (
                <Search color={isFocused ? Colors.primary : Colors.grey30} />
              ) : route.name === "collection" ? (
                <Library color={isFocused ? Colors.primary : Colors.grey30} />
              ) : (
                label
              )}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    padding: 10,
    paddingTop: 20,
    justifyContent: "center",
    borderTopWidth: 2,
    borderTopColor: Colors.grey10,
  },
});
