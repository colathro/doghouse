import React from "react";
import { GameState } from "../../states";
import { observer } from "mobx-react-lite";
import { View, StyleSheet, Text } from "react-native";
import {
  BigButton,
  Players,
  Main,
  Spike,
  SelectedPacks,
} from "../../components";

function GameSetup({ navigation }: any) {
  return (
    <Main navigation={navigation} title="Game Setup" help="Doghouse is the party game that makes failure fun. Find some friends, pick your punishment for going to the doghouse, and start playering! Each game is a unique and has a different way of getting sent to the doghouse. There are no winners, but atleast one loser per round, and you guessed it... loser go to the doghouse!">
      <View style={styles.container}>
        <View>
          <Players
            players={GameState.players}
            allowEdit={true}
            doghouse={false}
            showScore={false}
          />
          <SelectedPacks linkToPurchase={true} navigation={navigation} />
        </View>
        <BigButton
          title="START"
          onPress={() => {
            GameState.startGame();
            navigation.reset({
              index: 0,
              routes: [{ name: "Game" }],
            });
          }}
        />
      </View>
    </Main>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "98%",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default observer(GameSetup);
