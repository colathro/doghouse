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

type props = {
  navigation: any;
  hideMenu: boolean;
  showScores: any;
};

export const GameHeader: React.FC<props> = (props: props): JSX.Element => {
  return (
    <View style={styles.container}>
      {!props.hideMenu ? (
        <TouchableOpacity
          style={styles.helpButton}
          onPress={() => {
            props.navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            });
          }}
        >
          <Text style={styles.helpButtonText}>menu</Text>
        </TouchableOpacity>
      ) : null}
      {!props.hideMenu ? (
        <TouchableOpacity
          style={styles.helpButton}
          onPress={() => {
            props.showScores();
          }}
        >
          <Text style={styles.helpButtonText}>scores</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    minHeight: 35,
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
    height: 28,
    width: 65,
    borderRadius: 10,
  },
  helpButtonText: {
    color: "#000000",
    fontFamily: "Tw-Bold",

    fontSize: 28,
  },
});
