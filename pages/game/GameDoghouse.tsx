import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { Dice, Button, Doghouse2, Main } from "../../components";
import { GameState } from "../../states";

function GameDoghouse() {
  const navigation = useNavigation();

  const navigateScoreboard = () => {
    navigation.navigate("GameScoreboard");
  };

  return (
    <View style={styles.container}>
      <Doghouse2 callback={navigateScoreboard} />
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
