import React, { useState } from "react";
import {
  Button,
  BigButton,
  Logo,
  Main,
  Spike,
  Timer,
  Doghouse,
} from "../../components";
import { GameState } from "../../states";

function HomeScreen({ navigation }: any) {
  const [show, setShow] = useState(false);
  return (
    <Main navigation={navigation}>
      {show ? (
        <Timer
          visible={true}
          callback={() => {
            setShow(false);
          }}
        />
      ) : null}
      <Spike />
      <Logo />
      <BigButton
        title="PLAY"
        onPress={() => navigation.navigate("GameSetup")}
      />
      <Button title="PACKS" onPress={() => navigation.navigate("Settings")} />
      {GameState.devMode ? 
      (
        <Button
          title="Dice Roll Test"
          onPress={() => navigation.navigate("DicePlayground")}
        />
      ) : null}
    </Main>
  );
}

export default HomeScreen;
