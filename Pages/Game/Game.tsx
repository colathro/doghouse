import React, { useState } from "react";
import { Dice, Card, Doghouse, Scoreboard } from "../../components";
import { View, StyleSheet } from "react-native";

function Game() {
  const [cardShow, setCardShow] = useState(false);
  const [doghouseShow, setDoghouseShow] = useState(false);
  const [scoreShow, setScoreShow] = useState(false);
  const [diceRolled, setdiceRolled] = useState(false);

  const rollDice = () => {
    setdiceRolled(true);
    setCardShow(true);
  };

  const cardFinish = () => {
    setCardShow(false);
    setTimeout(() => {
      setDoghouseShow(true);
    }, 500);
  };

  const doghouseFinish = () => {
    setDoghouseShow(false);
    setTimeout(() => {
      setScoreShow(true);
    }, 500);
  };

  const scoreFinish = () => {
    setScoreShow(false);
    setdiceRolled(false);
  };

  return (
    <View style={styles.container}>
      <Doghouse visible={doghouseShow} callback={doghouseFinish} />
      <Card visible={cardShow} callback={cardFinish} />
      <Scoreboard visible={scoreShow} callback={scoreFinish} />
      <Dice rolled={diceRolled} callback={rollDice} />
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
