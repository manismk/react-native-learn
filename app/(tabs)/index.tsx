import BottomSheetComp from "@/components/BottomSheet";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function () {
  const [isOpen, setOpen] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Text>Hello From Home</Text>
      <Button
        title="Open bottom sheet"
        onPress={() => setOpen((prev) => !prev)}
      />
      {isOpen && <BottomSheetComp onClose={() => setOpen(false)} />}
    </View>
  );
}
