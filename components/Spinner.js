import React from "react";
import { View, ActivityIndicator } from "react-native";

export default function Spinner(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ActivityIndicator size={props.size || "large"} />
    </View>
  );
}
