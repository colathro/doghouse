import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import CardFlip from "react-native-card-flip";
import Modal from "react-native-modal";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

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
        backdropOpacity={0.0}
        isVisible={props.visible}
        swipeDirection={["left", "right", "up", "down"]}
        useNativeDriverForBackdrop
        onSwipeComplete={() => {
          props.callback();
          setFlipped(false);
        }}
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
                  card.flip();
                  setFlipped(true);
                }}
                style={styles.card}
                activeOpacity={1}
              >
                <Text style={styles.cardText}>
                  {GameState.decks[GameState.dice].name}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.card} 
                activeOpacity={1}
                onPress={() => {
                  card.tip();
                }}
              >
                <View style={styles.cardInner}>
                  <Text style={styles.prompt}>
                    {GameState.decks[GameState.dice].prompt}
                  </Text>
                  <Text style={styles.cardText}>
                    {GameState.activeCard.text}
                  </Text>
                </View>
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
    height: "70%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardInner: {
    backgroundColor: "#fff",
    height: "85%",
    width: "85%",
    borderRadius: 9,
    alignContent: "center",
    justifyContent: "center",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    height: "100%",
    width: "100%",
    borderRadius: 9,
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
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalView: {
    backgroundColor: "rgba(0,0,0,0.0)",
    borderRadius: 14,
    width: "90%",
    height: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
});
