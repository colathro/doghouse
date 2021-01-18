import React from "react";
import { Button } from "../components";
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
  help: string;
};

export const Help: React.FC<props> = (props: props): JSX.Element => {
  return (
    <Modal
      style={styles.modalView}
      animationType="fade"
      transparent={true}
      visible={props.visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {contents[props.help]}
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
    maxWidth: 500,
    alignItems: "center",
  },
});

interface IIndexable {
  [key: string]: any;
}

const contents: IIndexable = {
  setup: (
    <View>
      <Text>setup help!</Text>
    </View>
  ),
  packs: (
    <View>
      <Text>packs help!</Text>
    </View>
  ),
  ingame: (
    <View>
      <Text>ingame help!</Text>
    </View>
  ),
};
