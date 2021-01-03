import React from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RemoveIcon } from "./icons/RemoveIcon";
import { BoneMartiniIcon } from "./icons/BoneMartiniIcon";
import { CardPack, Deck } from "../types";

type props = {
  deck: Deck;
};

export const SelectedPack: React.FC<props> = observer(
  (props: props): JSX.Element => {
    return (
      <View style={styles.container}>
        <View style={iconStyles.container}>
          <BoneMartiniIcon style={iconStyles.icon} />
        </View>
        <Text style={titleStyles.text}>{props.deck.name}</Text>
      </View>
    );
  }
);

const titleStyles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    textAlign: "center",
    color: "black",
    fontFamily: "Tw-Bold",
    fontWeight: "bold",
    fontSize: 14,
    margin: 4,
  },
});

const iconStyles = StyleSheet.create({
  container: {
    marginTop: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 45,
    width: 45,
  },
});

const styles = StyleSheet.create({
  container: {
    height: 108,
    width: 78,
    alignItems: "center",
    justifyContent: "space-between",
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
    margin: 10,
  },
  removeIconContainer: {
    position: "absolute",
    right: -7,
    top: -7,
    zIndex: 1,
  },
});
