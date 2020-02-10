import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Icon, Button } from "react-native-elements";
import _ from "lodash";
import * as lac from "../../utils/lac";
import * as apiRoutes from "../../apiroutes";
import HeaderComponent from "../../components/Header";
import Layout from "../../constants/Layout";
import Colors from "../../constants/Colors";
import { SpinnerOverlay } from "../../components/Loader";

export default class ReportsPageScreen extends Component {
  state = {
    loading: false,
    errors: null
  };
  componentDidMount() {
    console.log("componentDidMount Report pagescreen");
  }
  render() {
    const { navigation } = this.props;
    const title = JSON.parse(JSON.stringify(navigation.getParam("title")));
    const reportId = JSON.parse(
      JSON.stringify(navigation.getParam("reportId"))
    );
    const variant =
      JSON.parse(JSON.stringify(navigation.getParam("variant"))) || "";
    console.log("reportId: ", reportId);
    console.log("variant: ", variant);
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent
          title={title && title.toUpperCase()}
          leftIcon="keyboard-arrow-left"
          navigation={navigation}
        ></HeaderComponent>
        {this.state.loading && !this.state.errors ? (
          <Text>Loading ...</Text>
        ) : (
          <ScrollView persistentScrollbar={true} style={{ marginBottom: 10 }}>
            <View>
              <Text>Report Page</Text>
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}

ReportsPageScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
