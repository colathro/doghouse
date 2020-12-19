import React from "react";
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

export const Dice: React.FC = observer(
  (): JSX.Element => {

    const shake = new Animated.Value(0);

    React.useEffect(() => {
      Animated.loop(
        // Animation consists of a sequence of steps
        Animated.sequence([
          // start rotation in one direction (only half the time is needed)
          Animated.timing(shake, {
            toValue: 0.5,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          // rotate in other direction, to minimum value (= twice the duration of above)
          Animated.timing(shake, {
            toValue: -0.5,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
          // return to begin position
          Animated.timing(shake, {
            toValue: 0.0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }, [shake]);

    return (
      <Animated.View
        style={
          GameState.activePhase == GameState.gamePhase.ROLL
            ? {
                ...styles.container,
                transform: [
                  {
                    rotate: shake.interpolate({
                      inputRange: [-1, 1],
                      outputRange: ["-0.1rad", "0.1rad"],
                    }),
                  },
                ],
              }
            : { ...styles.container }
          }
          >
        <TouchableOpacity
          style={styles.dice}
          onPress={() => {
            GameState.nextGamePhase();
          }}
        >
          <Text
            style={styles.diceText}>
          {GameState.activeDeck + 1}</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dice: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
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
