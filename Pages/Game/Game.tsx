import React from "react";
import { Dice } from "../../components";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";

function Game() {
  return (
    <View style={styles.container}>
      <Dice />
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

export default Game;
