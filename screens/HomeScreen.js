import React, { Component } from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import HeaderComponent from "../components/Header";

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View>
        <HeaderComponent
          title="Dashboard"
          leftIcon="menu"
          rightIcon="home"
          navigation={this.props.navigation}
        />
        <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text>Home Screen</Text>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  welcomeContainer: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20
  }
});
