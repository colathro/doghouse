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
          style={styles.card}
          onPress={() => {
            GameState.nextGamePhase();
          }}
        >
          <Text
            style={styles.cardText}>
          {GameState.activeCard.text}</Text>
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
    backgroundColor: "white",
    margin: 10,
    height: 222,
    width: 320,
    borderRadius: 7,
    borderColor: "#ff6700",
    borderWidth: 3,
    position: "relative",
  },
  cardText: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
});
