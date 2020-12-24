import React from "react";
import { Button, BigButton, Logo, Main, Spike } from "../../components";

function HomeScreen({ navigation }: any) {
  return (
    <Main navigation={navigation}>
      <Spike />
      <Logo />
      <BigButton
        title="PLAY"
        onPress={() => navigation.navigate("GameSetup")}
      />
      <Button title="PACKS" onPress={() => navigation.navigate("Settings")} />
    </Main>
  );
}

export default HomeScreen;
