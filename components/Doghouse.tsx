import React, { useState, useEffect } from "react";
import { GameState } from "../states";
import { Arrow, ArrowRight, Timer } from ".";
import { observer } from "mobx-react-lite";
import CheckBox from "react-native-checkbox-animated";
import {
  StyleSheet,
  View,
  Animated,
  Text,
  TouchableOpacity,
  ScrollView,
  Easing,
} from "react-native";
import { DoghouseIcon } from "./icons/DoghouseIcon";
import { PlayerIcon } from "./icons/PlayerIcon";

type props = {
  timer: boolean;
  limitDoghouse: boolean;
  onPressDone: (players: any[]) => void;
};

export const Doghouse: React.FC<props> = observer(
  (props: props): JSX.Element => {
    const [timerFinished, setTimerFinished] = useState(false);
    const [timerShowing, setTimerShowing] = useState(false);
    const [selectedName, setSelect] = useState("");
    const [multiSelectedNames, setMultiSelect] = useState([]);

    const Player = (
      name: string,
      handleChecked: (n: string, checked: boolean) => boolean
    ) => {
      return (
        <View style={styles.playerContainer}>
          <CheckBox
            label={name}
            onValueChange={(val) => handleChecked(name, val)}
            checked={
              props.limitDoghouse
                ? selectedName === name
                : multiSelectedNames.includes(name)
            }
            size={30}
            touchableLabel={true}
            checkedBackgroundColor={"#ff6700"}
            unCheckedBackgroundColor={"white"}
            checkedBorderColor={"black"}
            unCheckedBorderColor={"grey"}
            borderWidth={true}
            rippleEffect={true}
            rippleColor={"black"}
            checkPosition={"left"}
            checkBoxRadius={4}
            rounded={false}
            checkMarkSize={15}
            checkMarkColor={"transparent"}
            animationType={"scale"}
            checkStyle={styles.text}
            labelStyle={styles.text}
          />
        </View>
      );
    };

    const handleCheck = (name: string, checked: boolean) => {
      if (props.limitDoghouse) {
        if (checked) {
          setSelect(name);
        } else {
          setSelect("");
        }
      } else {
        if (checked) {
          setMultiSelect((multiSelectedNames) => [...multiSelectedNames, name]);
        } else {
          var array = [...multiSelectedNames]; // make a separate copy of the array
          var index = array.indexOf(name);
          if (index !== -1) {
            array.splice(index, 1);
            setMultiSelect(array);
          }
        }
      }
      return checked;
    };

    const [animatedValue, setAnimatedValue] = useState(new Animated.Value(1));
    const [dropdownOpen, setDropdownOpen] = useState(true);

    const openAnimation = () => {
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
    };

    const closeAnimation = () => {
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 1000,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start();
    };

    const dropdownAnimatedStyle = {
      transform: [
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [75, 0],
          }),
        },
        {
          scaleY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ],
    };

    const doghouseAnimatedStyle = {
      transform: [
        {
          translateY: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [150, 0],
          }),
        },
      ],
    };

    const arrowAnimatedStyle = {
      transform: [
        {
          rotate: animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: ["180deg", "0deg"],
          }),
        },
      ],
    };

    const shake = new Animated.Value(0); // Initial value for opacity: 0

    const shakeAnimation = () => {
      Animated.sequence([
        // start rotation in one direction (only half the time is needed)
        Animated.timing(shake, {
          toValue: 0.5,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        // rotate in other direction, to minimum value (= twice the duration of above)
        Animated.timing(shake, {
          toValue: -0.5,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        // return to begin position
        Animated.timing(shake, {
          toValue: 0.0,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start();
    };

    const shakeAnimatedStyle = {
      transform: [
        {
          rotate: shake.interpolate({
            inputRange: [-1, 1],
            outputRange: ["-0.1rad", "0.1rad"],
          }),
        },
      ],
    };

    return (
      <View style={styles.container}>
        {timerShowing ? (
          <Timer
            visible={true}
            callback={() => {
              setTimerShowing(false);
              setTimerFinished(true);
            }}
          />
        ) : null}
        <View style={styles.menuContainer}>
          <View style={styles.textContainer}>
            <Animated.Text
              style={[
                selectedName == "" && multiSelectedNames.length == 0
                  ? styles.doghouseTextGrey
                  : styles.selectedText,
                shakeAnimatedStyle,
              ]}
            >
              {props.limitDoghouse
                ? selectedName == ""
                  ? "Select a Player"
                  : selectedName
                : multiSelectedNames.toString().length >= 16
                ? multiSelectedNames.toString().substring(0, 13) + "..."
                : multiSelectedNames.length == 0
                ? "Select Players"
                : multiSelectedNames.toString()}
            </Animated.Text>
            <TouchableOpacity
              style={styles.dropButton}
              onPress={() => {
                if (!dropdownOpen) {
                  openAnimation();
                } else {
                  closeAnimation();
                }
                setDropdownOpen(!dropdownOpen);
              }}
            >
              <Animated.View
                style={[styles.arrowContainer, arrowAnimatedStyle]}
              >
                <Arrow />
              </Animated.View>
            </TouchableOpacity>
          </View>
        </View>
        <Animated.View
          style={[styles.openMenuContainer, dropdownAnimatedStyle]}
        >
          <ScrollView
            style={styles.scrollableView}
            contentContainerStyle={styles.scrollableContainer}
            showsVerticalScrollIndicator={false}
          >
            {GameState.players.map((val, ind) => {
              return Player(val.name, handleCheck);
            })}
          </ScrollView>
        </Animated.View>
        <Animated.View
          style={[styles.doneButtonContainer, doghouseAnimatedStyle]}
        >
          {props.timer && !timerFinished ? (
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => {
                setTimerShowing(true);
              }}
            >
              <Text style={styles.doghouseText}>Start Timer</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => {
                if (selectedName == "" && multiSelectedNames.length == 0) {
                  shakeAnimation();
                  closeAnimation();
                  setDropdownOpen(false);
                } else {
                  if (props.limitDoghouse) {
                    props.onPressDone([selectedName]);
                  } else {
                    props.onPressDone(multiSelectedNames);
                  }
                }
              }}
            >
              <PlayerIcon />
              <View style={styles.arrowRightContainer}>
                <ArrowRight />
              </View>
              <DoghouseIcon />
            </TouchableOpacity>
          )}
        </Animated.View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
    marginBottom: 50,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  openMenuContainer: {
    position: "absolute",
    top: -8,
    height: 150,
    width: "100%",
    backgroundColor: "white",
  },
  dropButton: {
    borderRadius: 7,
    borderColor: "transparent",
    borderWidth: 3,
    justifyContent: "center",
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
    backgroundColor: "#ffe0cc",
    borderRadius: 7,
    height: 50,
    borderColor: "transparent",
    borderWidth: 3,
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedText: {
    marginLeft: 10,
    marginRight: 10,
    color: "black",
    fontFamily: "Tw-Bold",
    fontSize: 24,
  },
  doghouseText: {
    marginLeft: 10,
    marginRight: 10,
    color: "black",
    fontFamily: "Tw-Bold",
    fontSize: 24,
    textAlign: "center",
  },
  doghouseTextGrey: {
    marginLeft: 10,
    marginRight: 10,
    color: "grey",
    fontFamily: "Tw-Bold",
    fontSize: 24,
    textAlign: "center",
  },
  scrollableView: {
    width: "100%",
    height: "100%",
  },
  scrollableContainer: {
    width: "100%",
  },
  text: {
    color: "black",
    fontFamily: "Tw-Bold",
    fontSize: 28,
  },
  playerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10,
    width: "100%",
  },
  checkboxContainerStyle: {
    width: 250,
  },
  checkbox: {
    padding: 10,
  },
  arrowContainer: {
    justifyContent: "center",
  },
  arrowImageStyle: {
    width: 20,
    height: 20,
  },
  doneButtonContainer: {
    position: "absolute",
    top: 60,
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 9,
  },
  doneButton: {
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    height: 50,
    backgroundColor: "#ff6700",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  arrowRightContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
});
