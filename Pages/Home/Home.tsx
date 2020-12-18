import React from "react";
import { Button, Logo, Main } from "../../components";

function HomeScreen({ navigation }: any) {
  return (
    <Main navigation={navigation}>
      <Logo />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button title="Play" onPress={() => navigation.navigate("GameSetup")} />
    </Main>
  );
}

export default HomeScreen;
