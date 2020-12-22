import React from "react";
import { GameState } from "../../states";
import { observer } from "mobx-react-lite";
import { Button, Players, Main } from "../../components";

function GameSetup({ navigation }: any) {
  return (
    <Main navigation={navigation} title="Game Setup" help="setup">
      <Players players={GameState.players} allowEdit={true} doghouse={false} showScore={false}/>
      <Button
        title="Play"
        onPress={() => {
          GameState.startGame();
          navigation.reset({
            index: 0,
            routes: [{ name: "Game" }],
          });
        }}
      />
    </Main>
  );
}

export default observer(GameSetup);
