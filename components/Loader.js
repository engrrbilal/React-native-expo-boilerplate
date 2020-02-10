import React from "react";
import { Overlay } from "react-native-elements";
import { ActivityIndicator, View, Text } from "react-native";

export function SpinnerOverlay(props) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Overlay
        isVisible={true}
        // windowBackgroundColor="rgba(255, 255, 255, .5)"
        // overlayBackgroundColor="red"
        width={props.text ? (props.width ? props.width : "auto") : "auto"}
        height={props.text ? (props.height ? props.height : "auto") : "auto"}
        borderRadius={props.text ? 3 : 100}
        onBackdropPress={() => (isVisible = false)}
      >
        <View style={{ alignSelf: "center" }}>
          <ActivityIndicator size={props.size || "small"} />
          {props.text ? <Text>{props.text}</Text> : undefined}
        </View>
      </Overlay>
    </View>
  );
}

export function Spinner(props) {
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
