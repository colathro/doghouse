import React from "react";
import { Header } from "../../components";
import { StyleSheet, View } from "react-native";
import { GameHeader } from "../GameHeader";

export function GameView({
  navigation,
  title,
  help,
  players,
  children,
  hideMenu,
  showScores,
  showPlayers,
}: any) {
  let header;
  if (title) {
    header = (
      <GameHeader
        navigation={navigation}
        hideMenu={hideMenu}
        showScores={showScores}
        showPlayers={showPlayers}
      />
    );
  } else {
    header = <></>;
  }

  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        {header}
        <View style={styles.container}>{children}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    padding: 8,
    backgroundColor: "white",
    width: "95%",
    height: "91%",
  },
  container: {
    marginTop: 30,
    height: "91%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
