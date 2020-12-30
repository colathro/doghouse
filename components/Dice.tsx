import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from "react-native";

type props = {
  callback: any;
};

export const Dice: React.FC<props> = observer(
  (props: props): JSX.Element => {
    return (
      <Animated.View
        style={{
          ...styles.container,
        }}
      >
        <TouchableOpacity
          style={styles.dice}
          onPress={() => {
            GameState.rollDice();
            props.callback();
          }}
        >
          <Text style={styles.diceText}>{GameState.dice + 1}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.0)",
    alignItems: "center",
    justifyContent: "center",
  },
  dice: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    margin: 10,
    height: 60,
    width: 60,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    position: "relative",
  },
  diceText: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
});
