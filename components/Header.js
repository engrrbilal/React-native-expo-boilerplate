import React from "react";
import { Header } from "react-native-elements";

const HeaderComponent = props => (
  <Header
    placement="center"
    // backgroundColor="blue"
    leftComponent={{
      icon: props.leftIcon || null,
      color: props.color || "#fff",
      underlayColor: "steelblue",
      onPress: () =>
        props.leftIcon === "menu"
          ? props.navigation.openDrawer()
          : props.navigation.goBack()
    }}
    centerComponent={{
      text: props.title,
      style: {
        color: props.color || "#fff",
        fontWeight: "bold",
        fontSize: 18
      }
    }}
    rightComponent={{
      icon: props.rightIcon || null,
      color: props.color || "#fff",
      underlayColor: "steelblue",
      onPress: () => console.log("right icon pressed")
    }}
  />
);
export default HeaderComponent;
