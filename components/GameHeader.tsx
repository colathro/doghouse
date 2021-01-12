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
};

export const GameHeader: React.FC<props> = (props: props): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.helpButton}
        onPress={() => {
          props.navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        }}
      >
        <Text style={styles.helpButtonText}>Menu</Text>
      </TouchableOpacity>
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
    fontWeight: "bold",
    fontSize: 24,
  },
  helpButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 28,
    borderRadius: 10,
  },
  helpButtonText: {
    color: "#ffffff",
    fontFamily: "Tw-Bold",
    fontWeight: "bold",
    fontSize: 28,
  },
});
