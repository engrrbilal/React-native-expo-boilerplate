import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import HeaderComponent from "../components/Header";

export default function LinksScreen() {
  return (
    <View style={{ flex: 1 }}>
      <HeaderComponent title="Links" />
      <ScrollView style={styles.container}></ScrollView>
    </View>
  );
}

LinksScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
