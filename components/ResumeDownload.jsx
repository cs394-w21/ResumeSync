import React from "react";
import { StyleSheet, Button, View } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    maxWidth: 600,
    width: "100%",
  },
  button: {
    width: "100%",
    borderRadius: 15,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

/**
 * TODO: Figure out how get resume typed properly
 */
/* eslint-disable react/prop-types */
const ResumeDownload = (props) => {
  if (typeof document === "undefined") return null;
  const { resume } = props;
  console.log(resume);
  return (
    <View style={styles.buttonContainer}>
      <Button style={styles.button} title="Download Resume" />
    </View>
  );
};
/* eslint-enable react/prop-types */

export default ResumeDownload;