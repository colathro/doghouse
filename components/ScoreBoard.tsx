import React, { useState } from "react";
import { Button, Boner } from "../components";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  Modal,
} from "react-native";

type props = {
  visible: boolean;
  callback: any;
};

const Score = (name: string, val: number, index: number) => {
  let background;
  let icon;
  if (index === 0) {
    background = StyleSheet.create({
      color: {
        backgroundColor: "#ff6700",
      },
    });
  } else if (index === 1) {
    background = StyleSheet.create({
      color: {
        backgroundColor: "#ff954f",
      },
    });
  } else if (index === 2) {
    background = StyleSheet.create({
      color: {
        backgroundColor: "#ffbd91",
      },
    });
  } else {
    background = StyleSheet.create({
      color: {
        backgroundColor: "#fff",
      },
    });
  }
  return (
    <View style={{ ...styles.container, ...background.color }}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.bonerContainer}>
        <Text style={styles.text}>{val}</Text>
      </View>
    </View>
  );
};

export const Scoreboard: React.FC<props> = observer(
  (props: props): JSX.Element => {
    let localPlayers = [];
    GameState.players.forEach((val) =>
      localPlayers.push(Object.assign({}, val))
    );
    localPlayers = localPlayers.sort((a, b) => b["score"] - a["score"]);
    return (
      <Modal
        style={styles.modalView}
        transparent={true}
        animationType="fade"
        visible={props.visible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView
              style={styles.scrollableView}
              contentContainerStyle={styles.scrollableContainer}
              showsVerticalScrollIndicator={false}
            >
              {localPlayers.map((val, ind) => {
                return Score(val.name, val.score, ind);
              })}
            </ScrollView>
            <Button
              title="CLOSE"
              onPress={() => {
                props.callback();
              }}
            ></Button>
          </View>
        </View>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "white",
    borderRadius: 14,
    width: "90%",
    height: "50%",
    maxWidth: 500,
    maxHeight: "50%",
    alignItems: "center",
  },
  centeredView: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollableView: {
    margin: 20,
    width: "100%",
  },
  scrollableContainer: {
    width: "100%",
    alignItems: "center",
  },
  scoreContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width: "100%",
  },
  bonerContainer: {},
  textContainer: {},
  text: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "90%",
    height: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    elevation: 8,
    borderRadius: 6,
    margin: 8,
  },
});
