import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';

type props = {
  callback: any;
  resetAnimation: boolean;
  animationCallback: any;
};

export const Dice: React.FC<props> = observer(
  (props: props): JSX.Element => {

    const [moveY, setMoveY] = useState(new Animated.Value(0));
    const [moveX, setMoveX] = useState(new Animated.Value(0));

    const startAnimation=()=>{
      Animated.timing(moveY,{
        toValue : 270,
        duration : 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
      Animated.timing(moveX,{
        toValue : -125,
        duration : 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
    }

    const resetAnimation=()=>{
      Animated.timing(moveY,{
        toValue : 0,
        duration : 1000,
        easing: Easing.bezier(0.25,0.1,0.25,1),
        useNativeDriver: true,
      }).start();
      Animated.timing(moveX,{
        toValue : 0,
        duration : 1000,
        easing: Easing.bezier(0.25,0.1,0.25,1),
        useNativeDriver: true,
      }).start();
      props.animationCallback();
    }

    if (props.resetAnimation) {
      resetAnimation();
    }

    const animatedStyle = {
      transform: [
        { 
          translateY : moveY
        },
        {
          translateX: moveX
        }
      ],
     }

    return (
      <View>
        <DropDownPicker
          items={[
              {label: '1', value: 0},
              {label: '2', value: 1},
              {label: '3', value: 2},
              {label: '4', value: 3},
              {label: '5', value: 4},
              {label: '6', value: 5},
          ]}
          defaultValue={0}

          isVisible={GameState.devMode}
          containerStyle={{height: 40, position: "absolute", top: -100 , left: 20}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
              justifyContent: 'flex-start'
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={item => {
            GameState.dice = item.value
          }}
        />
        <Animated.View
          style={[styles.container, animatedStyle]}
        >
          <TouchableOpacity
            style={styles.dice}
            onPress={() => {
              if (!GameState.devMode) {
                GameState.rollDice();
              } else {
                GameState.drawCard();
              }
              startAnimation();
              props.callback();
            }}
          >
            <Text style={styles.diceText}>{GameState.dice + 1}</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.0)",
    alignItems: "center",
    justifyContent: "center",
  },
  dice: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    margin: 10,
    height: 60,
    width: 60,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    position: "relative",
  },
  diceText: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
});
