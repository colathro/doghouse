import React from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BoneMartiniIcon } from "./icons/BoneMartiniIcon";
import { UnlockedIcon } from "./icons/UnlockedIcon";
import { LockedIcon } from "./icons/LockedIcon";
import { CardPack } from "../types";

type props = {
  pack: CardPack;
};

export const AvailablePack: React.FC<props> = observer(
  (props: props): JSX.Element => {
    return (
      <View style={styles.container}>
        <View style={infoStyle.container}>
          <UnlockedIcon style={infoStyle.icon} />
          <TouchableOpacity style={infoStyle.helpButton} onPress={() => {}}>
            <Text style={infoStyle.helpButtonText}>!</Text>
          </TouchableOpacity>
        </View>
        <View style={iconStyles.container}>
          <BoneMartiniIcon style={iconStyles.icon} />
        </View>
        <View style={titleStyles.titleContainer}>
          <Text style={titleStyles.text}>{props.pack.name}</Text>
        </View>
        <View style={selectStyles.selectContainer}>
          <TouchableOpacity
            style={selectStyles.selectButton}
            onPress={() => {
              GameState.addActivePack(props.pack);
            }}
          >
            <Text style={selectStyles.selectButtonText}>Select</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "space-between",
    width: 148,
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
});

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
    fontSize: 22,
  },
});

const iconStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 80,
    width: 80,
  },
});

const infoStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 6,
  },
  icon: {
    height: 18,
    width: 18,
  },
  helpButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 18,
    width: 18,
    borderRadius: 50,
  },
  helpButtonText: {
    color: "#ffffff",
    fontFamily: "Tw-Bold",
    fontWeight: "bold",
    fontSize: 18,
  },
});

const selectStyles = StyleSheet.create({
  selectContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  selectButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 30,
    width: 100,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    position: "relative",
  },
  selectButtonText: {
    color: "black",
    fontFamily: "Tw-Bold",
    fontWeight: "bold",
    fontSize: 24,
  },
});
