import React from "react";
import GameDiceRoll from "./GameDiceRoll";
import GameCardShow from "./GameCardShow";
import GameDoghouse from "./GameDoghouse";
import GameScoreboard from "./GameScoreboard";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";

const Stack = createStackNavigator();

function Game() {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}
        mode="modal"
      >
        <Stack.Screen name="GameDiceRoll" component={GameDiceRoll} />
        <Stack.Screen name="GameCardShow" component={GameCardShow} />
        <Stack.Screen name="GameDoghouse" component={GameDoghouse} />
        <Stack.Screen name="GameScoreboard" component={GameScoreboard} />
      </Stack.Navigator>
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
