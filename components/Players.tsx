import React, { useRef } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { action } from "mobx";
import { Button } from "../components";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from "react-native";

export const Players: React.FC = observer(
  (): JSX.Element => {
    const shake = new Animated.Value(0); // Initial value for opacity: 0

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
      <View style={styles.container}>
        {GameState.players.map((val, ind) => (
          <TouchableOpacity
            key={ind}
            onPress={() => {
              GameState.removePlayer(val.name);
            }}
          >
            <Animated.Text
              style={
                val.selected
                  ? {
                      ...styles.playerSelected,
                      transform: [
                        {
                          rotate: shake.interpolate({
                            inputRange: [-1, 1],
                            outputRange: ["-0.1rad", "0.1rad"],
                          }),
                        },
                      ],
                    }
                  : { ...styles.player }
              }
            >
              {val.name}
            </Animated.Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 160,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  player: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
  playerSelected: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
    color: "red",
  },
});
