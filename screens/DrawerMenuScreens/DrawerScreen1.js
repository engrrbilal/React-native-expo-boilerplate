import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import HeaderComponent from "../../components/Header";

export default class DrawerScreen1 extends Component {
  render() {
    console.log("this : ", this);
    return (
      <View style={{ flex: 1 }}>
        <HeaderComponent
          title="Screen 1"
          leftIcon="keyboard-arrow-left"
          navigation={this.props.navigation}
        />
        <Text>Screen 1</Text>
        {/* <ScrollView style={styles.container}>
        </ScrollView> */}
      </View>
    );
  }
}

DrawerScreen1.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
