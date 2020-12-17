import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Header } from "../../components";
import { useNavigation } from "@react-navigation/native";

function Settings() {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <View style={styles.wrapper}>
        <Header title="Settings" navigation={navigation}></Header>
        <View style={styles.container}>
          <Button title="Play" onPress={() => navigation.navigate("Game")} />
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
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.0,

    elevation: 4,
  },
  container: {
    marginTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Settings;
