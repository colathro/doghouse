import React from "react";
import { Players, Header, Cards, Dice } from "../../components";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GameState } from "../../states";

function Game() {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        <Header title="Game Setup" navigation={navigation}></Header>
        <View style={styles.container}>
          <Players />
          <Cards />
          <Dice />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.0)",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    padding: 8,
    backgroundColor: "#fff",
    width: "95%",
    height: "91%",
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5.0,

    elevation: 8,
  },
  container: {
    marginTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Game;
