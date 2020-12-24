import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { Dice, Button, Players, Main } from "../../components";
import { GameState } from "../../states";

function GameDoghouse() {
  const navigation = useNavigation();

  return (
    <Main navigation={navigation} title="Card" players={true} help="ingame">
      <Button
        title="Reset"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Game" }],
          });
        }}
      ></Button>
      <Text>Scoreboard</Text>
      <Players players={GameState.players} allowEdit={false} doghouse={false} showScore={true}></Players>
    </Main>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default GameDoghouse;
