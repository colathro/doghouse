import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import CardFlip from "react-native-card-flip";
import Modal from "react-native-modal";
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  Animated,
  Easing, 
} from "react-native";

type props = {
  visible: boolean;
  callback: any;
};

export const Card: React.FC<props> = observer(
  (props: props): JSX.Element => {
    const [moveY, setMoveY] = useState(new Animated.Value(0));
    const [moveX, setMoveX] = useState(new Animated.Value(0));
    const [scale, setScale] = useState(new Animated.Value(1));

    const startAnimation=()=>{
      Animated.timing(moveY,{
        toValue : 175,
        duration : 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
      Animated.timing(moveX,{
        toValue : 75,
        duration : 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
      Animated.timing(scale,{
        toValue : 0.75,
        duration : 1000,
        easing: Easing.bezier(0.25,0.1,0.25,1),
        useNativeDriver: true,
      }).start();
    }
    let card;

    const animatedStyle = {
      transform: [
        { 
          translateY : moveY
        },
        {
          translateX: moveX
        },
        {
          scale: scale
        },
      ],
     }

    return (
        <Modal
          backdropOpacity={0.0}
          isVisible={props.visible}
          swipeDirection={["left", "right", "down", "up"]}
          useNativeDriverForBackdrop
          onSwipeComplete={() => {
            props.callback();
          }}
        >
          <Animated.View style={[styles.centeredView, animatedStyle]}>
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
                    startAnimation();
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
          </Animated.View>
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
