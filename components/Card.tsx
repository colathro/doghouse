import React, { useRef, useState } from "react";
import { GameState } from "../states";
import { Doghouse, Timer } from "../components";
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
    const [showTimer, setShowTimer] = useState(false);
    return (
      <Modal
        backdropOpacity={0.0}
        isVisible={props.visible}
        useNativeDriverForBackdrop
        propagateSwipe={true}
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
              <TouchableOpacity style={styles.card} activeOpacity={1}>
                <View style={styles.cardInner}>
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => {
                      setFlipped(false);
                      props.callback();
                    }}
                  >
                    <Text style={styles.closeButtonText}>X</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.helpButton}
                    onPress={() => {
                      setFlipped(false);
                      props.callback();
                    }}
                  >
                    <Text style={styles.helpButtonText}>?</Text>
                  </TouchableOpacity>
                  <Text style={styles.prompt}>
                    {GameState.decks[GameState.dice].prompt}
                  </Text>
                  <Text style={styles.cardText}>
                    {GameState.activeCard.text}
                  </Text>
                  {showTimer ? (
                    <Timer
                      visible={true}
                      callback={() => {
                        setShowTimer(false);
                      }}
                    />
                  ) : null}
                  <View style={styles.arrowContainer}>
                    <Doghouse
                      timer={GameState.decks[GameState.dice].useTimer}
                      limitDoghouse={
                        GameState.decks[GameState.dice].maxDoghouse != -1
                      }
                      onPressDone={(players: []) => {
                        setFlipped(false);
                        players.forEach((player) =>
                          GameState.adjustScore(player)
                        );
                        props.callback();
                      }}
                    />
                  </View>
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
    height: "80%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  playAreaContainer: {
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  cardInner: {
    backgroundColor: "#fff",
    height: "90%",
    width: "90%",
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
  centeredView: {
    flex: 1,
    padding: 8,
    justifyContent: "flex-start",
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
  timerView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
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
  doghouseDropDown: {
    height: 40,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 18,
    width: 18,
    borderRadius: 50,
  },
  closeButtonText: {
    color: "#ffffff",
    fontFamily: "Tw-Bold",
    fontWeight: "bold",
    fontSize: 15,
  },
  helpButton: {
    position: "absolute",
    top: 10,
    left: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 18,
    width: 18,
    borderRadius: 50,
  },
  helpButtonText: {
    color: "#ffffff",
    fontFamily: "Tw-Bold",
    fontWeight: "bold",
    fontSize: 18,
  },
  arrowContainer: {
    width: "100%",
    position: "absolute",
    bottom: 5,
  },
  arrow: {
    fontFamily: "Tw-Bold",
    fontSize: 46,
  },
  arrowDisabled: {
    fontFamily: "Tw-Bold",
    color: "#d9d9d9",
    fontSize: 46,
  },
});
