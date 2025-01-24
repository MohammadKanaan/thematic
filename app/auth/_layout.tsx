import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="auth/signin" />
      <Stack.Screen name="auth/signup" />
    </Stack>
  );
}
