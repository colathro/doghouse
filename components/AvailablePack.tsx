import React from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RemoveIcon } from "./icons/RemoveIcon";

type props = {
  name: string;
};

export const AvailablePack: React.FC<props> = observer(
  (props: props): JSX.Element => {
    return (
      <View style={styles.container}>
        <Text>{props.name}</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    backgroundColor: "#fff",
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
  removeIconContainer: {
    position: "absolute",
    right: -7,
    top: -7,
    zIndex: 1,
  },
});
