import React from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import CardFlip from 'react-native-card-flip';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export const Cards: React.FC = observer(
  (): JSX.Element => {
    return (
      <View style={styles.container}>
        <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} >
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => 
              { 
                if (GameState.activePhase == GameState.gamePhase.DRAW) {
                  GameState.nextGamePhase();
                  this.card.flip();
                } else {
                  this.card.tip();
                }
              }}>
            <Text
              style={styles.cardText}>
              { 
                GameState.activePhase == GameState.gamePhase.ROLL 
                  ? ""
                  :GameState.activePacks[GameState.activeDeck].name
              }
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.flippedCard} 
            onPress={() => 
              {
                GameState.nextGamePhase();
                GameState.activePhase == GameState.gamePhase.ROLL 
                  ? this.card.flip()
                  : this.card.tip()
              }} >
            <Text
              style={styles.prompt}
            >
              {GameState.activeCard.text != null
                  ? GameState.activePacks[GameState.activeDeck].prompt
                  : ""}
            </Text>
            <Text
              style={styles.cardText}>
              {GameState.activeCard.text != null
                  ? GameState.activeCard.text
                  : ""}
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
