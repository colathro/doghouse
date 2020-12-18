import React from "react";
import { Button, BigButton, Logo, Main } from "../../components";

function HomeScreen({ navigation }: any) {
  return (
    <Main navigation={navigation}>
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
