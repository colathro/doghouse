import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { Cards, Button, Main } from "../../components";

function GameCardShow() {
  const navigation = useNavigation();
  
  return (
    <Main navigation={navigation} title="Card" players={true} help="ingame">
      <Cards navigation={navigation} />  
    </Main>
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

export default GameCardShow;
