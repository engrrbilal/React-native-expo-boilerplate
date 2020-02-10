import axios from "axios";
import { AsyncStorage } from "react-native";

export default function errorController(props, errors) {
  if (errors.data.code === "auth-error") {
    console.log("Authorization failed.....");
    // AsyncStorage.clear("session");
    // axios.defaults.headers.common["Authorization"] = undefined;
    // props.navigation.navigate("Auth");
    return true;
  } else if (errors.data.code === "session-error") {
    // AsyncStorage.clear("session");
    // axios.defaults.headers.common["Authorization"] = undefined;
    // props.navigation.navigate("Auth");
    return true;
  }
  // ToDo check authorization Error
  return false;
}
