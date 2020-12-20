import React from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BoneMartiniIcon } from "./icons/BoneMartiniIcon";

type props = {
  name: string;
};

export const AvailablePack: React.FC<props> = observer(
  (props: props): JSX.Element => {
    return (
      <View style={styles.container}>
        <View style={titleStyles.titleContainer}>
          <Text style={titleStyles.text}>{props.name}</Text>
        </View>
        <View style={iconStyles.container}>
          <BoneMartiniIcon style={iconStyles.icon} />
        </View>
        <View style={selectStyles.selectContainer}>
          <TouchableOpacity style={selectStyles.selectButton}>
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
    height: 120,
    width: 120,
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
    margin: 10,
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
