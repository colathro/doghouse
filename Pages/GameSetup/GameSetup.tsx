import React from "react";
import { GameState } from "../../states";
import { observer } from "mobx-react-lite";
import { Button, Header, AdjustPlayers } from "../../components";
import { StyleSheet, Text, TextInput, View } from "react-native";

function GameSetup({ navigation }: any) {
  const [playerInput, onChangePlayerInput] = React.useState("");

  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        <Header title="Game Setup" navigation={navigation}></Header>
        <View style={styles.container}>
          <AdjustPlayers />
          <Button
            title="Play"
            onPress={() => {
              GameState.startGame();
              navigation.navigate("Game");
            }}
          />
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
});

export default observer(GameSetup);
