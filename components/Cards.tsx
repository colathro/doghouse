import React from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const Cards: React.FC = observer(
  (): JSX.Element => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={
            GameState.activePhase == GameState.gamePhase.DRAW
              ? { ...styles.card }
              : { ...styles.flippedCard }
          }
          onPress={() => {
            GameState.nextGamePhase();
          }}
        >
          <Text
            style={styles.prompt}
          >
            {GameState.activePhase == GameState.gamePhase.DRAW || GameState.activeCard.text == null
              ? ""
              : GameState.activePacks[GameState.activeDeck].prompt}
          </Text>
          <Text
            style={styles.cardText}>
            {GameState.activePhase == GameState.gamePhase.DRAW
              ? GameState.activePacks[GameState.activeDeck].name
              : (GameState.activeCard.text != null) 
                ? GameState.activeCard.text
                : ""}
          </Text>
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
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    margin: 10,
    height: 222,
    width: 320,
    borderRadius: 7,
    borderColor: "#ff6700",
    borderWidth: 3,
    position: "relative",
  },
  flippedCard: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    margin: 10,
    height: 222,
    width: 320,
    borderRadius: 7,
    borderColor: "#ff6700",
    borderWidth: 3,
    position: "relative",
  },
  prompt: {
    textAlign: "center",
    fontFamily: "Tw-Reg",
    color: "#808080",
    fontSize: 22,
    margin: 0,
  },
  cardText: {
    textAlign: "center",
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
});
