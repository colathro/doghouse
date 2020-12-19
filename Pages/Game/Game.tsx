import React from "react";
import { Players, Cards, Dice, Main } from "../../components";
import { useNavigation } from "@react-navigation/native";

function Game() {
  const navigation = useNavigation();

  return (
    <Main navigation={navigation} title={"Game"}>
      <Players allowEdit={false} />
      <Cards />
      <Dice />
    </Main>
  );
}

export default Game;
