import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { Dice, Button, Main} from "../../components";

function GameDiceRoll() {
  const navigation = useNavigation();

  return (
    <Main navigation={navigation} title="Dice" players={true} help="ingame">
      <Button
        title="Reset"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        }}
      ></Button>
      <Dice navigation={navigation} />
    </Main>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default GameDiceRoll;
