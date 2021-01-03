import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { StyleSheet, View, Text } from "react-native";
import { SelectedPack } from "./SelectedPack";

type props = {
  linkToPurchase: boolean;
};

export const SelectedPacks: React.FC<props> = observer(
  (props: props): JSX.Element => {
    return (
      <View style={styles.container}>
        {GameState.decks.map((val, ind) => (
          <SelectedPack deck={val} key={ind}></SelectedPack>
        ))}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
