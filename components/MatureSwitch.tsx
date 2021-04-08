import React from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import {
  View,
  Switch,
  Text,
  StyleSheet,
} from "react-native";

export const MatureSwitch: React.FC = observer(
  () : JSX.Element => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>use mature cards</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#ff6700" }}
          thumbColor={GameState.mature ? "#f4f3f4" : "#f4f3f4"}
          onValueChange={(value) => {
            GameState.mature = value;
          }}
          value={GameState.mature}
        />
      </View>
    );
  }
);


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "black",
    fontFamily: "Tw-Bold",
    fontSize: 30,
    marginRight: 20,
  },
});