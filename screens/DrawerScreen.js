import React, { Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  AsyncStorage,
  Button
} from "react-native";
import { Divider } from "react-native-elements";
// import { DrawerItems, NavigationActions } from "react-navigation";
import { ListItem } from "react-native-elements";
import { menuItems } from "../navigation/drawerList";
import logo from "../assets/images/robot-dev.png";
// import { DrawerItems } from "react-navigation";

export default class DrawerScreen extends Component {
  companyId = "";

  navigateToScreen = item => () => {
    if (item.screen == "HomeScreen") {
      this.props.navigation.closeDrawer();
    } else {
      this.props.navigation.navigate(item.screen, {
        title: item.label,
        ...this.props
      });
    }
  };

  render() {
    AsyncStorage.getItem("session").then(resp => {});
    return (
      <SafeAreaView
        style={styles.SafeAreaFlex}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <View style={styles.ViewStyling}><Image source={logo} width={40} height={40}/></View>
        <Divider />
        <ScrollView>
          {/*<DrawerItems {...this.props}/> */}
          <View>
            {menuItems.length > 0
              ? menuItems.map((item, i) => (
                  <ListItem
                    key={i}
                    title={item.label}
                    titleStyle={{
                      color: item.screen == "HomeScreen" ? "blue" : "black"
                    }}
                    leftIcon={{ name: item.icon || null }}
                    bottomDivider
                    chevron
                    onPress={this.navigateToScreen(item)}
                  />
                ))
              : ""}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  SafeAreaFlex: {
    flex: 1
  },
  ViewStyling: {
    marginTop: 25,
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
