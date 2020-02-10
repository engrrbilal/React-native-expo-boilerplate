import React, { Component, useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
export const CustomButtonBadge = props => {
  return (
    <React.Fragment>
      <Button
        title={props.badgeStyle["title"] || ""}
        buttonStyle={{
          backgroundColor: props.badgeStyle["bgColor"] || "#53b447",
          height: props.badgeStyle["height"] || 3,
          width: props.badgeStyle["width"] || 20,
          margin: props.badgeStyle["margin"] || 5,
          marginTop: props.badgeStyle["marginTop"] || 2
        }}
      />
      <Text
        style={{
          textAlign: "center",
          fontSize: props.badgeStyle["textSize"] || 12
        }}
      >
        {props.badgeStyle["text"] || ""}
      </Text>
    </React.Fragment>
  );
};
