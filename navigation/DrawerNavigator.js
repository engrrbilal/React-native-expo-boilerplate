import { createDrawerNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import DrawerScreen from "../screens/DrawerScreen";
import screenMapping from "./drawerList";

export const DrawerNavigator = createDrawerNavigator(
  {
    // Home: HomeScreen,
    Home: MainTabNavigator
    // ...screenMapping
  },
  {
    initialRouteName: "Home",
    contentComponent: DrawerScreen,
    drawerWidth: 300
    // contentOptions: {
    //   // activeTintColor: "#e91e63",
    //   activeBackgroundColor: "#e6e6e6",
    //   itemsContainerStyle: {
    //     marginVertical: 0
    //   },
    //   iconContainerStyle: {
    //     opacity: 1
    //   }
    // }
  }
);
