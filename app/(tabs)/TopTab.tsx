import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function TopTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Settingss</Text>
    </View>
  );
}
