import React, { useRef, useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "../components";

type props = {
  callback: any;
  resetAnimation: boolean;
  animationCallback: any;
};

export const DiceSimple: React.FC<props> = observer(
  (props: props): JSX.Element => {
    const [changes, setChanges] = useState(0);
    const [rolling, setRolling] = useState(false);

    const roll = () => {
      if (!rolling) {
        GameState.rollDice();
        setRolling(true);
        setChanges(20);
      }
    };

    const Dice = [
      <Dice1 style={styles.dice}></Dice1>,
      <Dice2 style={styles.dice}></Dice2>,
      <Dice3 style={styles.dice}></Dice3>,
      <Dice4 style={styles.dice}></Dice4>,
      <Dice5 style={styles.dice}></Dice5>,
      <Dice6 style={styles.dice}></Dice6>,
    ];

    var dice = GameState.visualRoll();

    if (changes == 0 && rolling) {
      dice = GameState.dice;
      setRolling(false);
      props.callback();
    } else if (changes >= 1) {
      setTimeout(() => {
        setChanges(changes - 1);
      }, 50);
    } else {
      dice = GameState.dice;
    }

    return (
      <View style={styles.height}>
        <TouchableOpacity onPress={roll}>{Dice[dice]}</TouchableOpacity>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  dice: { height: 100, width: 100 },
  height: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
