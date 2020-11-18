import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function GameSetup({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Setup</Text>
      <StatusBar style="auto" />
      <Button
        title="+ Add Player"
        onPress={AddPlayer}
      />
      <Button
        title="Play"
        onPress={() => navigation.navigate("Game")}
      />
    </View>
  );
}

function AddPlayer() {
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GameSetup;
