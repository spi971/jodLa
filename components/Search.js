import { Box, Input } from "native-base";
import React, { Component } from "react";
import { Text, Pressable } from "react-native";

import Style from "../Style";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "Chilly-Mazarin",
    };
  }

  submitSearch() {
    this.props.navigation.navigate("Result", { city: this.state.city });
  }

  setCity(city) {
    this.setState({ city });
  }

  render() {
    return (
      <Box style={Style.container}>
        <Input
          style={Style.searchBar}
          size="2xl"
          placeholder="Your city.."
          value={this.state.city}
          onChangeText={(text) => this.setCity(text)}
        />
        <Pressable onPress={() => this.submitSearch()}>
          <Text style={Style.button}>Search</Text>
        </Pressable>
      </Box>
    );
  }
}
