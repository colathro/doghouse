import React, { useState } from "react";
import { GameView } from "../../components";
import { View, StyleSheet, Text } from "react-native";

function DicePlayground({ navigation }: any) {
  let timeout;

  React.useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <GameView
      style={styles.container}
      title={"GL Playground Boi"}
      navigation={navigation}
      hideMenu={false}
    >
      <View>
        <Text>Fuck</Text>
      </View>
    </GameView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default DicePlayground;
