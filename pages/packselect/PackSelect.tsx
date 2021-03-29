import React from "react";
import { Button, Main, Packs } from "../../components";
import { useNavigation } from "@react-navigation/native";

function PackSelect() {
  const navigation = useNavigation();

  return (
    <Main navigation={navigation} title="Pack Select">
      <Packs />
    </Main>
  );
}

export default PackSelect;
