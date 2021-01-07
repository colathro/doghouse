import React, { useState } from "react";
import { Dice, Card, Doghouse, Scoreboard } from "../../components";
import { View, StyleSheet } from "react-native";

function Game() {
  const [cardShow, setCardShow] = useState(false);
  const [doghouseShow, setDoghouseShow] = useState(false);
  const [scoreShow, setScoreShow] = useState(false);
  const [reset, setReset] = useState(false);

  const rollDice = () => {
    setTimeout(() => {
      setCardShow(true);
    }, 700);
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
    setReset(true);
  };

  const newRound = () => {
    setReset(false);
  }

  return (
    <View style={styles.container}>
      <Card visible={cardShow} callback={cardFinish} />
      <Doghouse visible={doghouseShow} callback={doghouseFinish} />
      <Scoreboard visible={scoreShow} callback={scoreFinish} />
      <Dice resetAnimation={reset} callback={rollDice} animationCallback={newRound}/>
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
