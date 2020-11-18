import React from "react";
import {
  StyleSheet,
  Button as B,
  NativeTouchEvent,
  NativeSyntheticEvent,
} from "react-native";

type props = {
  title: string;
  onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

export const Button: React.FC<props> = (props: props): JSX.Element => {
  return <B title={props.title} onPress={props.onPress}></B>;
};
