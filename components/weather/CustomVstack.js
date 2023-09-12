import React, { Component } from "react";
import { Text, VStack } from "native-base";

export default class CustomVstack extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <VStack marginTop="5">
        <Text
          _dark={{
            color: "warmGray.50",
          }}
          fontSize="3xl"
          color="coolGray.800"
          bold
        >
          {this.props.temp}
        </Text>
        <Text
          color="coolGray.600"
          fontSize="xl"
          _dark={{
            color: "warmGray.200",
          }}
        >
          {this.props.condition}
        </Text>
      </VStack>
    );
  }
}
