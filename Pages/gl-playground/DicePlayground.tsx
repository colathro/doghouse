import React, { useState } from "react";
import { GameView } from "../../components";
import { View, StyleSheet, Text, Animated, Easing, TouchableOpacity } from "react-native";

function DicePlayground({ navigation }: any) {
  let timeout;

  React.useEffect(() => {
    // Clear the animation loop when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  const [animatedValue, setAnimatedValue] = useState(new Animated.Value(0));

  const startRoll = () => {
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ]).start()
  };

  const oneAnimated = {
    transform: [
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["0deg", "90deg"],
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 50],
        }),
      },
    ],
  };

  const twoAnimated = {
    transform: [
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["90deg", "0deg"],
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-50, 0],
        }),
      },
    ],
  };
  
  const threeAnimated = {
    transform: [
      {
        rotateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["90deg", "0deg"],
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-50, 0],
        }),
      },
      {
        rotateZ: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["90deg", "0deg"],
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-50, 0],
        }),
      },
    ],
  };

  return (
    <GameView
      style={styles.container}
      title={"GL Playground Boi"}
      navigation={navigation}
      hideMenu={false}
    >
      <TouchableOpacity
        onPress={() => {
          startRoll();
        }}>
        <Animated.View style={[styles.box, oneAnimated]}/>
        <Animated.View style={[styles.box, twoAnimated]}/>
        {/* <Animated.View style={[styles.box]}/>
        <Animated.View style={[styles.box]}/>
        <Animated.View style={[styles.box]}/>
        <Animated.View style={[styles.box]}/> */}
      </TouchableOpacity>
    </GameView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignContent: "center",
  },
  box: {
    position: "absolute",
    height: 50,
    width: 50,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
  }
});

export default DicePlayground;
