import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { Dice, Button, Game} from "../../components";

function GameDiceRoll() {
  const navigation = useNavigation();

  const navigateCard = () => {
    navigation.navigate("GameCardShow");
  };

  return (
    <View style={styles.container}>
      <Dice callback={navigateCard}/>
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
