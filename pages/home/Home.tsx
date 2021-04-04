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
import { StyleSheet, Alert } from "react-native";

let showedWarning = false;

function HomeScreen({ navigation }: any) {
  const [show, setShow] = useState(false);

  const alert = async (cb) => {
    Alert.alert(
      "Warning",
      "Please play responsibly. By continuing to play, you agree that you are responsible for all consequences that may result from playing doghouse.",
      [
        {
          text: "Continue",
          onPress: () => {
            cb();
          },
        },
      ]
    );
  };

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
        onPress={() => {
          if (showedWarning) {
            navigation.navigate("GameSetup");
          } else {
            alert(() => {
              navigation.navigate("GameSetup");
            });
            showedWarning = true;
          }
        }}
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
