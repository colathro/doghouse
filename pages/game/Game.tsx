import React, { useState } from "react";
import { Dice, Card, Doghouse, Scoreboard, GameView } from "../../components";
import { View, StyleSheet } from "react-native";
import { GameHeader } from "../../components/GameHeader";

function Game({ navigation }: any) {
  const [cardShow, setCardShow] = useState(false);
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
      setReset(true);
    }, 500);
  };

  const scoreFinish = () => {
    setScoreShow(false);
    setReset(true);
  };

  const newRound = () => {
    setReset(false);
  };

  return (
    <GameView
      style={styles.container}
      title={"t"}
      navigation={navigation}
      showScores={() => {
        setScoreShow(true);
      }}
      hideMenu={cardShow || scoreShow}
    >
      <Card visible={cardShow} callback={cardFinish} />
      <Scoreboard visible={scoreShow} callback={scoreFinish} />
      <Dice
        resetAnimation={reset}
        callback={rollDice}
        animationCallback={newRound}
      />
    </GameView>
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
