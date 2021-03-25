import React, { useState } from "react";
import { StyleSheet, View, Animated, Easing, Text } from "react-native";
import { Spike } from "../components";

type props = {};

export const Loader: React.FC<props> = (props: props): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: "100%",
    minHeight: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    marginTop: 30,
    color: "black",
    fontFamily: "Tw-Bold",
    fontSize: 40,
  },
});
