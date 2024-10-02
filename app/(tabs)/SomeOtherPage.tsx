import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function SomeOtherPage() {
  return (
    <View>
      <Text>Hi from Some Other page</Text>
      <Link href="/SomePage" style={{ marginTop: 20 }}>
        <Text>Page without tab</Text>
      </Link>
    </View>
  );
}
