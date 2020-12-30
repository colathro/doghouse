import React, { useState } from "react";
import { Dice, Card } from "../../components";
import { View, StyleSheet } from "react-native";

function Game() {
  const [cardShow, setCardShow] = useState(false);

  const rollDice = () => {
    setCardShow(true);
  };

  const cardFinish = () => {
    setCardShow(false);
  };

  return (
    <View style={styles.container}>
      <Card visible={cardShow} callback={cardFinish} />
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
