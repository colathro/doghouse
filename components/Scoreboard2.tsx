import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { Players, Button } from ".";
import { Player } from "../types";
import { IObservableArray, makeAutoObservable } from "mobx";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Modal,
} from "react-native";

type props = {
  callback: any;
};


export const Scoreboard2: React.FC<props> = observer(
  (props: props): JSX.Element => {
    
    return (
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => {
            props.callback();
          }}
          >
            <View style={styles.container}>
              <Players players={GameState.players} allowEdit={false} doghouse={false} showScore={true} />
            </View>
          </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 160,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  playerDoghouse: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
    color: "red",
  },
  player: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
  modalView: {
    backgroundColor: "rgba(0,0,0,0)",
    borderRadius: 14,
    flex: 1,
    padding: 8,
    width: "90%",
    height: "90%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  centeredView: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    padding: 8,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
