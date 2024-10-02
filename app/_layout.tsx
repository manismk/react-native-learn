import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaView>
      <View style={{ height: "95%" }}>
        <Slot />
      </View>
      <View style={{ flexDirection: "row", gap: 15 }}>
        <Link href={"/SomeOtherPage"}> Go to Some other page</Link>
        <Link href={"/"}>Go to Home</Link>
      </View>
    </SafeAreaView>
  );
}
