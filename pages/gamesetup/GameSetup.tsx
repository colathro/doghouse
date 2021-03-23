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
} from "../../components";

function GameSetup({ navigation }: any) {
  const [showHelp, setShowHelp] = useState(false);
  
  const plusRef = React.useRef<TouchableOpacity>(null);

  return (
    <Main navigation={navigation} title="Game Setup" help={setShowHelp}>
      <View style={styles.container}>
        <View>
          <Players
            players={GameState.players}
            allowEdit={true}
            doghouse={false}
            showScore={false}
            plusRef={plusRef}
          />
          <SelectedPacks linkToPurchase={true} navigation={navigation} />
        </View>
        {showHelp ? (
          <SetupHelp
            visible={true}
            callback={setShowHelp}
            helpRef={plusRef}
          />
        ) : null}
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
    justifyContent: "space-between",
  },
});

export default observer(GameSetup);
