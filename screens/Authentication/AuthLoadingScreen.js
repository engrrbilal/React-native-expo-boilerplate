import React from "react";
import { AsyncStorage, StatusBar, View } from "react-native";
import Spinner from "../../components/Spinner";

export default class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    console.log("componentDidMount AuthLoadingScreen");
    this._redirect();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _redirect = async () => {
    const userToken = await AsyncStorage.getItem("token");
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
    const host = await AsyncStorage.getItem("host");
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    // console.log("userToken: ", userToken);
    console.log("isLoggedIn: ", isLoggedIn);
    this.props.navigation.navigate("Main");
    // this.props.navigation.navigate(userToken && isLoggedIn ? "Main" : "Login");
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner />
        {/* <StatusBar barStyle="default" /> */}
      </View>
    );
  }
}
