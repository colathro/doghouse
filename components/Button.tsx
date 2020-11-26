import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  NativeTouchEvent,
  NativeSyntheticEvent,
  View,
} from "react-native";

type props = {
  title: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

export const Button: React.FC<props> = (props: props): JSX.Element => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    margin: 10,
    height: 60,
    width: 180,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    position: "relative",
  },
  buttonText: {
    color: "black",
    fontFamily: "Tw-Bold",
    fontWeight: "bold",
    fontSize: 24,
  },
});
