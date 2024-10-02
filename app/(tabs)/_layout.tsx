import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="SomeOtherPage"
        options={{
          title: "Some other page",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="cog" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="TopTab"
        options={{
          title: "Top tab",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="address-book" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
