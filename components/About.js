import { Box } from "native-base";
import React, { Component } from "react";
import { Text, StyleSheet, Pressable } from "react-native";
import Style from "../Style";

export default class About extends Component {
  search() {
    this.props.navigation.navigate("Home");
  }
  render() {
    return (
      <Box style={Style.container}>
        <Text style={Style.title}>About JodLa</Text>
        <Text style={Style.text}>
          Sit magna anim do sit. Voluptate id quis sit amet consequat non magna
          in anim aliqua id. Incididunt proident elit aliqua Lorem exercitation
          Lorem eiusmod. Duis est voluptate do exercitation nostrud aute ea anim
          amet amet esse reprehenderit. Proident consectetur reprehenderit
          cillum veniam duis amet cupidatat aliquip nisi. Cillum excepteur sint
          deserunt aliquip sint consectetur tempor laboris.
        </Text>
        <Pressable onPress={() => this.search()}>
          <Text style={Style.button}>Back to search</Text>
        </Pressable>
      </Box>
    );
  }
}
