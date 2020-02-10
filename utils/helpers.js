import { Alert } from "react-native";
import { showMessage } from "react-native-flash-message";

export const _alert = async text =>
  new Promise(resolve => {
    Alert.alert(
      "Confirm ?",
      text,
      [
        {
          text: "Cancel",
          onPress: () => {
            resolve(false);
          },
          style: "cancel"
        },
        {
          text: "ok",
          onPress: () => {
            resolve(true);
          }
        }
      ],
      { cancelable: false }
    );
  });
export const showAlertMessage = (type, message, messageDescription) => {
  return type === "error" || "warning"
    ? showMessage({
        message: message || "ERROR: Something went wrong !",
        description:
          messageDescription ||
          "Some of required fields are missing or duplicate key value or overflow max size.",
        type: type === "error" ? "danger" : "warning",
        icon: type === "error" ? "danger" : "warning",
        autoHide: false
      })
    : showMessage({
        message: "Successfully Done !",
        description: messageDescription || "",
        type: "success",
        icon: "success"
      });
};

export const validator = (fieldValue, length) => {
  if (!fieldValue) {
    return "This field is required";
  } else if (length && fieldValue.length < length) {
    return "The min length required is: " + length;
  } else {
    return "";
  }
};
