import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import { Card2, Button, Game } from "../../components";

function GameCardShow() {
  const navigation = useNavigation();

  const navigateDoghouse = () => {
    navigation.navigate("GameDoghouse");
  };
  
  return (
    <View style={styles.container}>
      <Card2 callback={navigateDoghouse} />  
    </View>
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
