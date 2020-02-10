import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Button,
  Text,
  Image,
  ActivityIndicator,
  TextInput,
  Picker,
  AsyncStorage
} from "react-native";
import { showAlertMessage } from "../../utils/helpers";
import FlashMessage, { hideMessage } from "react-native-flash-message";

export default class Login extends Component {
  static navigationOptions = {
    drawerLabel: () => null
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      company: "",
      pickerItems: [],
      errorStatus: false,
      errorMsg: "",
      isLoading: false,
      loggedIn: false
    };
    this.handleLogin = this.handleLogin.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount login");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount login");
    hideMessage();
    this.willUnmount = true;
  }
  handleLogin() {
    if (!this.state.username || !this.state.password) {
      showAlertMessage("error");
      showAlertMessage("error", "Error, Some of required fields are missing!");
      this.setState({
        errorStatus: true,
        errorMsg: "Some of required fields are missing..."
      });
    } else {
      this.setState({ isLoading: true }, () => {
        let loginCred = {
          userName: this.state.username,
          password: this.state.password
        };
        this.startSignInAndSetStorage(loginCred);
      });
    }
  }
  startSignInAndSetStorage(loginCred) {
    try {
      const { navigation } = this.props;
      this.setState(
        {
          isLoading: false
        },
        () => {
          console.log("this.state: ", this.state);
          navigation.navigate("Main");
          this.willUnmount = true;
        }
      );
    } catch (error) {
      showAlertMessage(
        "error",
        "Error, Unable to validate Credationals!",
        error.message
      );
      console.log("TRY LOG IN ==>", error);
      this.setState({
        errorStatus: true,
        errorMsg: error.message,
        isLoading: false
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Image style={styles.welcome} source={logo} /> */}
        <TextInput
          style={styles.inputField}
          placeholder="User Name"
          autoFocus
          onChangeText={e => {
            this.setState({ username: e });
          }}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={e => {
            this.setState({ password: e });
          }}
        />
        {/* <Picker
          selectedValue={this.state.company}
          style={styles.pickerStyle}
          itemStyle={{ borderBottomWidth: 1 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ company: itemValue })
          }
          mode="dropdown"
        >
          <Picker.Item label="Select company" value="" />
          {this.state.pickerItems
            ? this.state.pickerItems.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.split("~")[1]}
                  // value={item}
                  value={item.split("&")[0]}
                />
              ))
            : null}
        </Picker> */}
        {this.state.isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <View style={{ width: 300, marginTop: 10 }}>
            <Button color="#2fa4e7" title="Login" onPress={this.handleLogin} />
          </View>
        )}
        <FlashMessage position="top" animated={true} />
      </View>
    );
  }
}
Login.navigationOptions = {
  header: null
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  welcome: {
    marginLeft: 30,
    marginBottom: 40,
    marginRight: 30
  },
  inputField: {
    color: "#333333",
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "#4682B4",
    marginBottom: 10,
    width: 300
  },
  pickerStyle: {
    borderBottomWidth: 1,
    width: 300,
    backgroundColor: "#ecf4fc",
    marginTop: 5,
    marginBottom: 10
  },
  activityIndStyle: {
    margin: 20
  }
});
