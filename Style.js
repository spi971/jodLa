import { Center } from "native-base";
import { StyleSheet } from "react-native";

const centerPosition = "center";
const defaultMargin = 20;

export default StyleSheet.create({
  container: {
    flexShrink: 1,
  },
  searchBar: {
    backgroundColor: "#f5f5f4",
    textAlign: "auto",
    margin: 5,
  },
  title: {
    fontSize: 22,
    marginBottom: defaultMargin,
    textAlign: centerPosition,
  },
  text: {
    fontSize: 14,
    textAlign: centerPosition,
  },
  button: {
    margin: defaultMargin,
    padding: 15,
    justifyContent: centerPosition,
    backgroundColor: "#ea580c",
    textAlign: centerPosition,
    borderRadius: 20,
  },
  spinner: {
    alignContent: centerPosition,
  },
  spinnerText: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
