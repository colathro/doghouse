import React from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const Dice: React.FC = observer(
  (): JSX.Element => {
    return (
      <View style={styles.container}>
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
      </View>
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
