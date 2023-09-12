import React, { Component } from "react";
import { Avatar } from "native-base";

export default class Icon extends Component {
  render() {
    return (
      <Avatar
        size="lg"
        bg="none"
        source={{
          uri: `https://${this.props.url}`,
        }}
      />
    );
  }
}
