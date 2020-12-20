import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { Players } from "../components";
import {
  StyleSheet,
  Animated,
} from "react-native";

type props = {
  navigation: any;
};

export const Doghouse: React.FC<props> = observer(
  (props: props): JSX.Element => {
    return (
      <Animated.View
        style={styles.container}
      >
        <Players allowEdit={false} />
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
