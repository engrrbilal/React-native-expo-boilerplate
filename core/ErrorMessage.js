import React from "react";
import { showMessage } from "react-native-flash-message";
import { Text } from "react-native";

export default class ErrorMessage extends React.Component {
  render() {
    const Message = props => {
      if (props.errors && props.errors.status === 413) {
        return "Request payload size exceeds";
      } else if (props.errors) {
        return "Some of required fields are missing or overflow max size.";
      } else {
        return props.errors.description;
      }
    };

    return this.props.errors
      ? showMessage({
          message: "Some of required fields are missing or overflow max size.",
          // message: Message(this.props),
          // description: "This is our second message",
          type: "danger",
          icon: "info"
        })
      : null;
  }
}
