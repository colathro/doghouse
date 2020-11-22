import React from "react";
import { GameState } from "../../states";
import { observer } from "mobx-react-lite";
import { Button, Players, Header } from "../../components";
import { StyleSheet, Text, TextInput, View } from "react-native";

function GameSetup({ navigation }: any) {
  const [playerInput, onChangePlayerInput] = React.useState("");

  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        <Header title="Game Setup" navigation={navigation}></Header>
        <View style={styles.container}>
          <Players />
          <Button title="Play" onPress={() => navigation.navigate("Game")} />
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

export default observer(GameSetup);
