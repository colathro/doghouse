import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { Players, Button } from "../components";
import { Player } from "../types";
import { IObservableArray, makeAutoObservable } from "mobx";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";

type props = {
  navigation: any;
};


export const Doghouse: React.FC<props> = observer(
  (props: props): JSX.Element => {
    class DoghouseObject {
      constructor() {
        makeAutoObservable(this);
      }
      public players = JSON.parse(JSON.stringify(GameState.players)) as IObservableArray<Player>;
    }
    let doghouse = new DoghouseObject();

    return (
      <View style={styles.container}>
        <Players players={doghouse.players} allowEdit={false} doghouse={true} showScore={false}/>
        <Button
          title="Send to the doghouse"
          onPress={() => {
            doghouse.players.forEach((player) => player.selected = false);
            GameState.players.replace(doghouse.players);
            setTimeout(() => {
              props.navigation.navigate("GameScoreboard");
            }, 500);
          }}>
        </Button>
      </View>
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
});
