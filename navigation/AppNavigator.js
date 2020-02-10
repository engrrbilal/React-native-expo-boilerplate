import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { AppNav } from "./StackNavigator";
import Login from "../screens/Authentication/LoginScreen";
import AuthLoadingScreen from "../screens/Authentication/AuthLoadingScreen";

const App = createSwitchNavigator(
  {
    AuthLoading: { screen: AuthLoadingScreen },
    Login: { screen: Login },
    App: {
      screen: AppNav
    }
  },
  {
    // Default config for all screens
    initialRouteName: "AuthLoading"
  }
);
export default createAppContainer(App);
