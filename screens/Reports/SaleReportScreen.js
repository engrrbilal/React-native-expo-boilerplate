import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import HeaderComponent from "../../components/Header";

export default class SalesReportScreen extends Component {
  render() {
    console.log("this : ", this);
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent
          title="Sales Report"
          leftIcon="keyboard-arrow-left"
          navigation={this.props.navigation}
        />
        <Text>Sales Reports</Text>
        {/* <ScrollView style={styles.container}>
        </ScrollView> */}
      </View>
    );
  }
}

SalesReportScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
