import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import _ from "lodash";
import HeaderComponent from "../../components/Header";

export default class ReportsListScreen extends Component {
  state = {
    loading: false,
    errors: false
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent title={"Reports"} />
        {this.state.loading && !this.state.errors ? (
          <SpinnerOverlay />
        ) : (
          <View>
            <Text>Reports</Text>
          </View>
        )}
      </View>
    );
  }
}

ReportsListScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
