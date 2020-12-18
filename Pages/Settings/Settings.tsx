import React from "react";
import { Button, Main } from "../../components";
import { useNavigation } from "@react-navigation/native";

function Settings() {
  const navigation = useNavigation();

  return (
    <Main navigation={navigation} title="Settings">
      <Button title="Play" onPress={() => navigation.navigate("Game")} />
    </Main>
  );
}

export default Settings;
