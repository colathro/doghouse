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
import { StyleSheet, Alert  } from "react-native";
import { useKeepAwake } from 'expo-keep-awake';
import { GameState } from "../../states";

function Game({ navigation }: any) {
  useKeepAwake();
  const [cardShow, setCardShow] = useState(false);
  const [scoreShow, setScoreShow] = useState(false);
  const [playersShow, setPlayerShow] = useState(false);
  const [reset, setReset] = useState(false);

  const alert = async (cb) => {
    Alert.alert(
      "oops! you ran out of cards",
      "We reshuffled your cards for you so you can keep playing. Return to the menu to get more packs.",
      [
        {
          text: "Continue",
          onPress: () => {
            cb();
          },
        },
      ]
    );
  };

  const rollDice = () => {
    setTimeout(() => {
      setCardShow(true);
    }, 700);
  };

  const cardFinish = () => {
    setCardShow(false);
    setTimeout(() => {
      if (GameState.decks.length == GameState.emptyDecks) {
        alert(() => {
          GameState.startGame();
        });
      } else {
        setReset(true);
      }
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
