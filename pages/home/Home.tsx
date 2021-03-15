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
import { StyleSheet } from "react-native";
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
      <Logo style={logoStyle.icon} />
      <BigButton
        title="PLAY"
        onPress={() => navigation.navigate("GameSetup")}
      />
      <Button title="PACKS" onPress={() => navigation.navigate("Settings")} />
    </Main>
  );
}

const logoStyle = StyleSheet.create({
  icon: {
    height: 62,
    width: 250,
  },
});

export default HomeScreen;
