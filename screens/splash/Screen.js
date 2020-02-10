import React, { Component } from "react";
import { ThemeProvider, Image } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";

import logo from "../assets/img/ledgermax-logo-login.png";

class AppSplashScreen extends Component {
  render() {
    return (
      <ThemeProvider>
        <Animatable.View
          animation="pulse"
          easing="ease-in"
          iterationCount="infinite"
          style={styles.viewFlex}
        >
          <Image source={logo} />
        </Animatable.View>
      </ThemeProvider>
      // <View>
      //   <Image source={logo} />
      // </View>
    );
  }
}

var styles = StyleSheet.create({
  viewFlex: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default SplashScreen;
