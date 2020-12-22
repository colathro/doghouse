import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { Players, Button } from "../components";
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

export const Doghouse: React.FC<props> = observer(
  (props: props): JSX.Element => {
    return (
      <View style={styles.container}>
        <Players allowEdit={false} doghouse={true} showScore={false}/>
        <Button
          title="Send to the doghouse"
          onPress={() => {
            GameState.resetDoghouse();
            setTimeout(() => {
              props.navigation.navigate("GameScoreboard");
            }, 500);
          }}>
        </Button>
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
  },
  playerDoghouse: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
    color: "red",
  },
  player: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
});
