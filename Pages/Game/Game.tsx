import React, { useState } from "react";
import { Dice, Card, Doghouse, Scoreboard } from "../../components";
import { View, StyleSheet } from "react-native";

function Game() {
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
      <Card visible={cardShow} callback={cardFinish} />
      <Doghouse visible={doghouseShow} callback={doghouseFinish} />
      <Scoreboard visible={scoreShow} callback={scoreFinish} />
      <Dice callback={rollDice} />
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
