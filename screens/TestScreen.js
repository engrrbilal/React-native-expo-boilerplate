import React, { Component } from "react";
import { View, Button, StyleSheet, Text, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import HeaderComponent from "../components/Header";
// import axios from "axios";
// import * as apiRoutes from "../apiroutes";

export default class TestScreen extends Component {
  render() {
    const { navigation } = this.props;
    // let title = JSON.stringify(navigation.getParam("title"));
    // title = title && JSON.parse(title);
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent
          title="Test"
          // title={title && title.toUpperCase()}
          leftIcon="keyboard-arrow-left"
          navigation={navigation}
        ></HeaderComponent>
        <View style={styles.container}>
          <Text>Test </Text>
          {/* <Button
            color="#4682B4"
            title="Go to Invoices"
            onPress={() => this.props.navigation.navigate("Invoice")}
          /> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  }
});
