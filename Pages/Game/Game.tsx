import React from "react";
import { Players, Header, Cards } from "../../components";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Game() {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        <Header title="Game Setup" navigation={navigation}></Header>
        <View style={styles.container}>
          <Players />
          <Cards />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#FF6700",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    padding: 8,
    backgroundColor: "#fff",
    width: "95%",
    height: "91%",
    borderRadius: 14,
  },
  container: {
    marginTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Game;
