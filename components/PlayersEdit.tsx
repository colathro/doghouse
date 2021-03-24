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
import { Players } from "./Players";

type props = {
  visible: boolean;
  callback: any;
};

export const PlayersEdit: React.FC<props> = observer(
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
            <Players
              allowEdit={true}
              doghouse={false}
              showScore={false}
              players={GameState.players}
            ></Players>
            <View style={styles.spacing}></View>
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
  spacing: { height: 20 },
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
