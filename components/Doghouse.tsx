import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { Players, Button } from "../components";
import { Player } from "../types";
import { IObservableArray, makeAutoObservable } from "mobx";
import Modal from "react-native-modal";
import { StyleSheet, View } from "react-native";

type props = {
  visible: boolean;
  callback: any;
};

export const Doghouse: React.FC<props> = observer(
  (props: props): JSX.Element => {
    class DoghouseObject {
      constructor() {
        makeAutoObservable(this);
      }
      public players = JSON.parse(
        JSON.stringify(GameState.players)
      ) as IObservableArray<Player>;
    }
    let doghouse = new DoghouseObject();

    return (
      <Modal backdropOpacity={0.0} isVisible={props.visible}>
        <View style={styles.centeredView}>
          <View style={styles.container}>
            <Players
              players={doghouse.players}
              allowEdit={false}
              doghouse={true}
              showScore={false}
            />
            <Button
              title="Send to the doghouse"
              onPress={() => {
                doghouse.players.forEach((player) => (player.selected = false));
                GameState.players.replace(doghouse.players);
                setTimeout(() => {
                  props.callback();
                }, 500);
              }}
            ></Button>
          </View>
        </View>
      </Modal>
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
