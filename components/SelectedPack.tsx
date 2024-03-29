import React from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BoneMartiniIcon } from "./icons/BoneMartiniIcon";
import { CardPack, Deck } from "../types";
import { Joker } from "./icons/Joker";
import { PackIconMapper } from "./PackIconMapper";
import { AddIcon } from "./icons/AddIcon";

type props = {
  pack?: CardPack;
  addMore: boolean;
  navigation?: any;
  cardRef?: React.MutableRefObject<TouchableOpacity>;
};

export const SelectedPack: React.FC<props> = observer(
  (props: props): JSX.Element => {
    if (props.addMore) {
      return (
        <TouchableOpacity
          ref={props.cardRef}
          activeOpacity={0.5}
          style={getMoreStyles.container}
          onPress={() => props.navigation.navigate("Settings")}
        >
          <Text style={titleStyles.text}>Get More Packs</Text>
          <AddIcon />
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={iconStyles.container}>
            <PackIconMapper
              packName={props.pack.name}
              style={iconStyles.icon}
              watermark={false}
            />
          </View>
          <Text style={titleStyles.text}>{props.pack.name}</Text>
        </View>
      );
    }
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
    height: 60,
    width: 60,
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
    margin: 6,
  },
  removeIconContainer: {
    position: "absolute",
    right: -7,
    top: -7,
    zIndex: 1,
  },
});

const getMoreStyles = StyleSheet.create({
  container: {
    height: 108,
    width: 78,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 6,
    margin: 6,
  },
  text: {
    textAlign: "center",
    color: "black",
    fontFamily: "Tw-Bold",

    fontSize: 48,
  },
});
