import React from "react";
import { game } from "states";
import { observer } from "mobx-react-lite";
import { Button, StyleSheet, Text, View } from "react-native";

function GameSetup({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Button title="Back" onPress={() => navigation.goBack()} />
      <Text>Setup{game.players.join()}</Text>
      <Button
        title="+ Player"
        onPress={() => {
          game.addPlayer("test");
        }}
      />
      <Button
        title="- Player"
        onPress={() => {
          game.removePlayer();
        }}
      />
      <Button title="Play" onPress={() => navigation.navigate("Game")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default observer(GameSetup);
