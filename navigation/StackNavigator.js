import { createStackNavigator, createSwitchNavigator } from "react-navigation";
import { DrawerNavigator } from "./DrawerNavigator";
import screenMapping from "./drawerList";

export const AppNav = createStackNavigator(
  {
    Main: { screen: DrawerNavigator },
    ...screenMapping
  },
  {
    // Default config for all screens
    headerMode: "none"
    // initialRouteName: "AuthLoading"
  }
);
