import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { Dice } from "../../components";

function GameDiceRoll() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Dice Roll</Text>
      <Dice navigation={navigation} />
    </View>
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
