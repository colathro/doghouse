import React, { useState } from "react";
import { Dice, Card, Doghouse, ScoreBoard } from "../../components";
import GameDiceRoll from "./GameDiceRoll";
import GameCardShow from "./GameCardShow";
import GameDoghouse from "./GameDoghouse";
import GameScoreboard from "./GameScoreboard";
import { View, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

function Game2() {
  const [cardShow, setCardShow] = useState(false);
  const [doghouseShow, setDoghouseShow] = useState(false);
  const [scoreShow, setScoreShow] = useState(false);

  const rollDice = () => {
    setCardShow(true);
  };

  const cardFinish = () => {
    setCardShow(false);
    setDoghouseShow(true);
  };

  const doghouseFinish = () => {
    setDoghouseShow(false);
    setScoreShow(true);
  };

  const scoreFinish = () => {
    setScoreShow(false);
  };

  return (
    <View style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
        }}
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

export default Game2;
