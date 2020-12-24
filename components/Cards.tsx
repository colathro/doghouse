import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import CardFlip from "react-native-card-flip";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type props = { navigation: any };

export const Cards: React.FC<props> = observer(
  (props: props): JSX.Element => {
    const [flipped, setFlipped] = useState(false);
    let card;
    return (
      <CardFlip
        style={styles.cardContainer}
        ref={(cardObj) => {
          card = cardObj;
        }}
      >
        <TouchableOpacity
          style={styles.card}
          onPress={() => {
            if (!flipped) {
              card.flip();
            } else {
              card.tip();
            }
          }}
        >
          <Text style={styles.cardText}>
            {GameState.activePacks[GameState.dice].name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.flippedCard}
          onPress={() => {
            card.tip();
            setTimeout(() => {
              props.navigation.navigate("GameDoghouse");
            }, 500);
          }}
        >
          <Text style={styles.prompt}>
            {GameState.activePacks[GameState.dice].prompt}
          </Text>
          <Text style={styles.cardText}>
            {GameState.activeCard.text}
          </Text>
        </TouchableOpacity>
      </CardFlip>
    );
  }
);

const styles = StyleSheet.create({
  cardContainer: {
    height: "95%",
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    height: "100%",
    width: "100%",
    borderRadius: 7,
    borderColor: "#ff6700",
    borderWidth: 3,
    position: "relative",
  },
  flippedCard: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    borderRadius: 7,
    borderColor: "#ff6700",
    borderWidth: 3,
    position: "relative",
  },
  prompt: {
    textAlign: "center",
    fontFamily: "Tw-Reg",
    color: "#808080",
    fontSize: 22,
    margin: 0,
  },
  cardText: {
    textAlign: "center",
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
});
