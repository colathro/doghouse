import React, { useState } from "react";
import { Help } from "../components";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PlayerDropdown } from "./PlayerDropdown";

type props = {
  title: string;
  navigation: any;
  help?: any;
  players: boolean;
  allowBack: boolean;
};

export const Header: React.FC<props> = (props: props): JSX.Element => {
  let help;
  if (props.help) {
    help = (
      <>
        <TouchableOpacity
          style={styles.helpButton}
          onPress={() => {
            props.help(true);
            console.log("here");
          }}
        >
          <Text style={styles.helpButtonText}>?</Text>
        </TouchableOpacity>
      </>
    );
  }
  let players;
  if (props.players) {
    const [modalVisible, setModalVisible] = useState(false);
    players = (
      <>
        <TouchableOpacity
          style={styles.helpButton}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Text style={styles.helpButtonText}>P</Text>
        </TouchableOpacity>
        <PlayerDropdown visible={modalVisible} callback={setModalVisible} />
      </>
    );
  }
  let back;
  if (props.allowBack) {
    back = (
      <>
        <TouchableOpacity
          style={styles.button}
          onPress={props.navigation.goBack}
        >
          <Text style={styles.buttonText}>back</Text>
        </TouchableOpacity>
      </>
    );
  }

  return (
    <View style={styles.container}>
      {back}
      {players}
      {help}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  title: {},
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 35,
    width: 70,
    borderRadius: 7,
    borderColor: "#ff6700",
    borderWidth: 3,
  },
  buttonText: {
    color: "#ff6700",
    fontFamily: "Tw-Bold",
    fontSize: 24,
  },
  helpButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 28,
    width: 28,
    borderRadius: 50,
  },
  helpButtonText: {
    color: "#ffffff",
    fontFamily: "Tw-Bold",
    fontSize: 28,
  },
});
