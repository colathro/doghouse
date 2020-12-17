import React from "react";
import { Button, Logo } from "../../components";
import { StyleSheet, Text, View } from "react-native";

function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Logo />
          <Button
            title="Settings"
            onPress={() => navigation.navigate("Settings")}
          />
          <Button
            title="Play"
            onPress={() => navigation.navigate("GameSetup")}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.0)",
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    padding: 8,
    backgroundColor: "#fff",
    width: "95%",
    height: "91%",
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5.0,

    elevation: 8,
  },
  container: {
    marginTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
