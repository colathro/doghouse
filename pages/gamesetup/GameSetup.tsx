import React, { useState } from "react";
import { GameState } from "../../states";
import { observer } from "mobx-react-lite";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  BigButton,
  Players,
  Main,
  SetupHelp,
  SelectedPacks,
  MatureSwitch,
} from "../../components";

function GameSetup({ navigation }: any) {
  const [showHelp, setShowHelp] = useState(false);

  const plusRef = React.useRef<TouchableOpacity>(null);
  const packsRef = React.useRef<TouchableOpacity>(null);

  return (
    <Main navigation={navigation} title="Game Setup" help={setShowHelp}>
      <View style={styles.container}>
        <View style={styles.secondContainer}>
          <Players
            players={GameState.players}
            allowEdit={true}
            doghouse={false}
            showScore={false}
            plusRef={plusRef}
          />
          <SelectedPacks
            linkToPurchase={true}
            navigation={navigation}
            cardRef={packsRef}
          />
        </View>
        {showHelp ? (
          <SetupHelp
            visible={true}
            callback={setShowHelp}
            playersHelpRef={plusRef}
            cardsHelpRef={packsRef}
          />
        ) : null}
        <MatureSwitch/>
        <BigButton
          title="START"
          onPress={() => {
            GameState.startGame();
            navigation.reset({
              index: 0,
              routes: [{ name: "Game" }],
            });
          }}
        />
      </View>
    </Main>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "98%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  secondContainer: {
    flexDirection: "column",
  },
});

export default observer(GameSetup);
