import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { Players } from ".";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";

type props = {
  navigation: any;
};

export const DoghouseStaging: React.FC<props> = observer(
  (props: props): JSX.Element => {

    return (
      <View style={styles.container}>
        {GameState.doghouseStaging.map((val1, ind1) => (
          <TouchableOpacity
            key={ind1}
            onPress={() => {
              GameState.sendPlayerToDoghouse(val1);
            }}
          >
            <Text style={styles.player}>
              {val1}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    height: 160,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
  },
  player: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
});
