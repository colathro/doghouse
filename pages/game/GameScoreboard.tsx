import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { Dice, Button, Scoreboard2, Main } from "../../components";
import { GameState } from "../../states";

function GameDoghouse() {
  const navigation = useNavigation();

  const navigateDice = () => {
    navigation.navigate("GameDiceRoll");
  };
  return (
    <View style={styles.container}>
      <Scoreboard2 callback={navigateDice} />
    </View>
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
