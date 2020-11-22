import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type props = {
  title: string;
  navigation: any;
};

export const Header: React.FC<props> = (props: props): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.navigation.goBack}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {},
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    height: 35,
    width: 70,
    borderRadius: 7,
    borderColor: "#ff6700",
    borderWidth: 3,
  },
  buttonText: {
    color: "#ff6700",
    fontFamily: "Tw-Bold",
    fontWeight: "bold",
    fontSize: 24,
  },
});
