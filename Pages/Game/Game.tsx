import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

function Game() {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Button
        title="Back"
        onPress={() => navigation.goBack()}
      />
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

export default Game;
