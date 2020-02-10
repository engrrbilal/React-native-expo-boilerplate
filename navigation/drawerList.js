import DrawerScreen1 from "../screens/DrawerMenuScreens/DrawerScreen1";
import DrawerScreen2 from "../screens/DrawerMenuScreens/DrawerScreen2";

export const menuItems = [
  {
    type: "command",
    screen: "HomeScreen",
    label: "Home",
    icon: "home"
    // group: TopNavGroup.LIST,
  },
  {
    type: "command",
    screen: "DrawerScreen1",
    label: "Drawer Screen1",
    // group: TopNavGroup.LIST,
    column: 2
  },
  {
    type: "command",
    screen: "DrawerScreen2",
    label: "Drawer Screen2",
    // group: TopNavGroup.LIST,
    column: 2
  }
];

export default {
  DrawerScreen1: {
    screen: DrawerScreen1
  },
  DrawerScreen2: {
    screen: DrawerScreen2
  },
};
