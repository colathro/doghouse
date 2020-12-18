import React from "react";
import { GameState } from "../../states";
import { observer } from "mobx-react-lite";
import { Button, AdjustPlayers, Main } from "../../components";

function GameSetup({ navigation }: any) {
  return (
    <Main navigation={navigation} title="Game Setup" help="setup">
      <AdjustPlayers />
      <Button
        title="Play"
        onPress={() => {
          GameState.startGame();
          navigation.navigate("Game");
        }}
      />
    </Main>
  );
}

export default observer(GameSetup);
