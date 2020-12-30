import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import CardFlip from "react-native-card-flip";
import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import { call } from "react-native-reanimated";

type props = {
  visible: boolean;
  callback: any;
};

export const Card: React.FC<props> = observer(
  (props: props): JSX.Element => {
    const [flipped, setFlipped] = useState(false);

    let card;

    return (
      <Modal
        style={styles.modalView}
        animationType="fade"
        transparent={true}
        visible={props.visible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <CardFlip
              ref={(cardObj) => {
                card = cardObj;
              }}
              style={styles.cardContainer}
            >
              <TouchableOpacity
                onPress={() => {
                  if (!flipped) {
                    card.flip();
                    setFlipped(true);
                  } else {
                    card.tip();
                  }
                }}
                style={styles.card}
              >
                <Text style={styles.cardText}>
                  {GameState.decks[GameState.dice].name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.flippedCard}
                onPress={() => {
                  setFlipped(false);
                  props.callback(false);
                }}
              >
                <Text style={styles.prompt}>
                  {GameState.decks[GameState.dice].prompt}
                </Text>
                <Text style={styles.cardText}>{GameState.activeCard.text}</Text>
              </TouchableOpacity>
            </CardFlip>
          </View>
        </View>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "rgba(0,0,0,0.0)",
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
  centeredView: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 14,
    width: "95%",
    alignItems: "center",
  },
});
