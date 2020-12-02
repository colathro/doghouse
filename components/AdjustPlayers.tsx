import React from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { action } from "mobx";
import { Button, Players } from "../components";
import { StyleSheet, Text, TextInput, View } from "react-native";

export const AdjustPlayers: React.FC = observer(
  (): JSX.Element => {
    const [playerInput, onChangePlayerInput] = React.useState("");

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Players</Text>
        <Players />
        <TextInput
          style={styles.textbox}
          onChangeText={(player) => onChangePlayerInput(player)}
          value={playerInput}
        />
        <Button
          title="+ Player"
          onPress={() => {
            GameState.addPlayer(playerInput);
            onChangePlayerInput("");
          }}
        />
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
  textbox: {
    height: 30,
    width: 70,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
  header: {
    fontFamily: "Tw-Bold",
    fontSize: 32,
    margin: 12,
  },
});
