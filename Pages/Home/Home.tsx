import React from "react";
import { Button } from "components";
import { StyleSheet, Text, View } from "react-native";

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Hello, Turtle!</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
      <Button title="Play" onPress={() => navigation.navigate("GameSetup")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
