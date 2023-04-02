import * as React from "react";
import { View, Text } from "react-native";

export default function NativeHeader() {
  return (
    <View style={{ flex: 0.24, backgroundColor: "#F4CE14" }}>
      <Text style={{ padding: 40, fontSize: 30, color: "black" }}>
       Welcome to Little Lemon 
      </Text>
    </View>
  );
}
