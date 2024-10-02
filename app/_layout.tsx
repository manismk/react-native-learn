import { Stack } from "expo-router/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(WithoutTabs)/SomePage"
          options={{
            headerShown: true,
            headerTitle: "Some page",
            headerBackTitle: "Back",
          }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
