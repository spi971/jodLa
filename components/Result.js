import React, { Component } from "react";
import { Box, Spinner, Center, Text, FlatList } from "native-base";
import axios from "axios";

import Style from "../Style";
import Row from "./weather/Row";

export default class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: this.props.route.params.city,
      report: null,
      name: "",
    };
    this.fetchWheather();
  }

  setReport(report) {
    return this.setState({
      report: report.forecast.forecastday,
      name: report.location,
    });
  }

  fetchWheather() {
    const API_URL = "https://api.weatherapi.com/v1/forecast.json";
    const API_KEY = "673c675812c14b1cab9161051231109";
    const API_CALL = `${API_URL}?&key=${API_KEY}&q=${this.state.city}&days=3&aqi=no&alerts=no&lang=fr`;

    axios
      .get(`${API_CALL}`)
      .then((response) => {
        this.setReport(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Box>
        {this.state.report === null ? (
          <Center>
            <Spinner
              color="#ea580c"
              size="lg"
              style={Style.spinner}
              height={500}
              width={{
                base: 500,
                lg: 250,
              }}
            />
            <Text style={Style.spinnerText}>Loading..</Text>
          </Center>
        ) : (
          <FlatList
            data={this.state.report}
            renderItem={({ item }) => <Row item={item}></Row>}
            keyExtractor={(item) => item.date_epoch}
          />
        )}
      </Box>
    );
  }
}
