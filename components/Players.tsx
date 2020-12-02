import React from "react";
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
} from "react-native";

export const Players: React.FC = observer(
  (): JSX.Element => {
    const [selectedPlayer, onChangeSelectedPlayer] = React.useState(-1);

    return (
      <View style={styles.container}>
        {GameState.players.map((val, ind) => (
          <TouchableOpacity
            key={ind}
            onPress={() => {
              if (selectedPlayer == ind) {
                onChangeSelectedPlayer(-1);
                GameState.removePlayer(ind);
              }
              onChangeSelectedPlayer(ind);
            }}
          >
            <Text
              style={
                selectedPlayer == ind ? styles.playerSelected : styles.player
              }
            >
              {val}
            </Text>
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
    height: 200,
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
