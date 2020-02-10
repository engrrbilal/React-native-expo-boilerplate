import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log("Error: ", error);
    console.log("ErrorInfo: ", errorInfo);
    //   logErrorToMyService(error, errorInfo);
  }

  render() {
    if (!this.state.hasError) {
      return this.props.children;
    } else {
      // You can render any custom fallback UI
      return (
        <View style={styles.container}>
          <Text style={{ color: Colors.errorText }}>Something wrong</Text>
        </View>
      );
    }
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
