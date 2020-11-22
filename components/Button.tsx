import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  NativeTouchEvent,
  NativeSyntheticEvent,
} from "react-native";

type props = {
  title: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

export const Button: React.FC<props> = (props: props): JSX.Element => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  },
  buttonText: {
    color: "black",
    fontFamily: "Tw-Bold",
    fontWeight: "bold",
    fontSize: 24,
  },
});
