import React, { useState } from "react";
import {
  Dice,
  Card,
  Doghouse,
  Scoreboard,
  GameView,
  DiceSimple,
  PlayersEdit,
} from "../../components";
import { View, StyleSheet } from "react-native";
import { useKeepAwake } from 'expo-keep-awake';

function Game({ navigation }: any) {
  useKeepAwake();
  const [cardShow, setCardShow] = useState(false);
  const [scoreShow, setScoreShow] = useState(false);
  const [playersShow, setPlayerShow] = useState(false);
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

  const playersFinish = () => {
    setPlayerShow(false);
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
      showPlayers={() => {
        setPlayerShow(true);
      }}
      hideMenu={cardShow || scoreShow}
    >
      <Card visible={cardShow} callback={cardFinish} />
      <Scoreboard visible={scoreShow} callback={scoreFinish} />
      <PlayersEdit visible={playersShow} callback={playersFinish} />
      {/*       <Dice
        resetAnimation={reset}
        callback={rollDice}
        animationCallback={newRound}
      /> */}
      <DiceSimple
        resetAnimation={reset}
        callback={rollDice}
        animationCallback={newRound}
      ></DiceSimple>
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
