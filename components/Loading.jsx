import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#808080",
    fontSize: 20,
  },
});

const Loading = () => (
  <View style={styles.container}>
    <Text style={styles.text}>I am loading!</Text>
  </View>
);

export default Loading;