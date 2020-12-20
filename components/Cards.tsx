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
      <View style={styles.container}>
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
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    margin: 20,
    height: 208,
    width: 300,
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    margin: 10,
    height: 208,
    width: 300,
    borderRadius: 7,
    borderColor: "#ff6700",
    borderWidth: 3,
    position: "relative",
  },
  flippedCard: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    margin: 10,
    height: 208,
    width: 300,
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
