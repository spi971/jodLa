import React, { Component } from "react";
import { Box, HStack, Spacer } from "native-base";

import CustomVstack from "./CustomVstack";
import DateData from "./DateData";
import Icon from "./Icon";

export default class Row extends Component {
  render() {
    return (
      <Box
        borderBottomWidth="1"
        _dark={{
          borderColor: "muted.50",
        }}
        borderColor="muted.800"
        pl={["0", "4"]}
        pr={["0", "5"]}
        py="2"
      >
        <HStack space={[2, 3]} justifyContent="space-between">
          <Icon url={this.props.item.day.condition.icon} />
          <CustomVstack
            temp={this.props.item.day.maxtemp_c}
            condition={this.props.item.day.condition.text}
          />
          <Spacer />
          <DateData date={this.props.item.date} />
        </HStack>
      </Box>
    );
  }
}
