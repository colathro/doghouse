import React from "react";
import { Button, Players} from ".";
import { GameState } from "../states";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type props = {
  visible: boolean;
  callback: any;
};

export const PlayerDropdown: React.FC<props> = (props: props): JSX.Element => {
  return (
    <Modal
      style={styles.modalView}
      animationType="top"
      transparent={true}
      visible={props.visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Players players={GameState.players} allowEdit={true} doghouse={false} showScore={false}/>
          <Button
            title="CLOSE"
            onPress={() => {
              props.callback(false);
            }}
          ></Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
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