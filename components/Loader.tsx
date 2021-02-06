import React, { useState } from "react";
import { StyleSheet, View, Animated, Easing, Text } from "react-native";
import { Spike } from "../components";

type props = {};

export const Loader: React.FC<props> = (props: props): JSX.Element => {
  const [spinValue, setSpinValue] = useState(new Animated.Value(0));

  // First set up animation
  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1500,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  // Next, interpolate beginning and end values (in this case 0 and 1)
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ transform: [{ rotate: spin }], height: 300, width: 300 }}
      >
        <Spike></Spike>
      </Animated.View>
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  text: {
    marginTop: 30,
    color: "black",
    fontFamily: "Tw-Bold",
    fontWeight: "bold",
    fontSize: 40,
  },
});
