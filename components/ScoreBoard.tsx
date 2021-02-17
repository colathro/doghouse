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

const Score = (name: string, val: number) => {
  return (
    <View style={styles.scoreContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
      <View style={styles.bonerContainer}>
        {Array.from({ length: val }, (x, i) => i).map((v) => {
          const specStyle = StyleSheet.create({
            boner: {
              width: 48,
              height: 48,
              position: "absolute",
              left: v * 10 + (v % 5 == 0 && v != 0 ? 30 : 0),
            },
          });
          return <Boner style={specStyle.boner}></Boner>;
        })}
      </View>
    </View>
  );
};

export const Scoreboard: React.FC<props> = observer(
  (props: props): JSX.Element => {
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
              {GameState.players.map((val, ind) => {
                return Score(val.name, val.score);
              })}
            </ScrollView>
            <Button
              title="Next Turn"
              onPress={() => {
                props.callback();
                GameState.players.forEach(
                  (player) => (player.selected = false)
                );
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
    width: "95%",
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
  },
  scrollableContainer: {
    width: "100%",
  },
  scoreContainer: {
    flexDirection: "row",
    marginBottom: 20,
    width: "100%",
  },
  bonerContainer: {
    flexDirection: "row",
    flex: 65,
  },
  textContainer: { flex: 30 },
  text: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
  },
});
