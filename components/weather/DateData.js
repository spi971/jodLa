import React, { Component } from "react";
import { Text } from "native-base";

export default class DateData extends Component {
  constructor(props) {
    super(props);
  }

  formatDate(date) {
    const dateToformat = new Date(date);
    const dayFormated = new Intl.DateTimeFormat("en-US", { weekday: "short" });
    return `${dayFormated.format(
      dateToformat
    )} ${dateToformat.getDate()}/${dateToformat.getMonth()}`;
  }

  render() {
    return (
      <Text
        fontSize="xl"
        _dark={{
          color: "warmGray.50",
        }}
        color="coolGray.800"
        marginTop="5"
        marginRight="5"
        alignSelf="flex-start"
      >
        {this.formatDate(this.props.date)}
      </Text>
    );
  }
}
