import React, { Component } from "react";
import { View, Button, StyleSheet, AsyncStorage } from "react-native";
import HeaderComponent from "../components/Header";
export default class SettingsScreen extends Component {
  _signOutAsync = async () => {
    // await AsyncStorage.removeItem("isLoggedIn");
    // await AsyncStorage.removeItem("session");
    // await AsyncStorage.removeItem("token");
    // await AsyncStorage.clear();
    this.props.navigation.navigate("Login");
  };

  componentWillUnmount() {
    this.willUnmount = true;
    console.log("componentWillUnmount Logout state", this.state);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent title="Profile Settings"></HeaderComponent>
        <View style={styles.container}>
          <Button
            color="#4682B4"
            title="Logout"
            onPress={this._signOutAsync}
            style={styles.buttonStyle}
          />
        </View>
      </View>
    );
  }
}

SettingsScreen.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  buttonStyle: {
    marginTop: 20
  },
  activityIndStyle: {
    margin: 20
  }
});
