import React, { useCallback, useState } from "react";
import { Button } from "../components";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Vibration,
  Animated,
} from "react-native";

type props = {
  visible: boolean;
  callback: any;
};

export const Timer: React.FC<props> = (props: props): JSX.Element => {
  const [animating, setAnimating] = useState(false);
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const [timerFinished, setTimerFinished] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [key, setKey] = useState(0);

  const boxInterpolation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["rgba(0, 0, 0, 0.7)", "rgba(224, 82, 99, 0.7)"],
  });

  const animatedStyle = {
    backgroundColor: boxInterpolation,
  };

  const handleAnimation = () => {
    setAnimating(true);
    Animated.timing(animation, {
      useNativeDriver: false,
      toValue: 1,
      duration: 250,
    }).start(() => {
      Animated.timing(animation, {
        useNativeDriver: false,
        toValue: 0,
        duration: 250,
      }).start(() => {
        setAnimating(false);
      });
    });
  };

  return (
    <Modal
      style={styles.modalView}
      animationType="fade"
      transparent={true}
      visible={props.visible}
    >
      <Animated.View style={{ ...styles.centeredView, ...animatedStyle }}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => {
              if (timerFinished) {
                props.callback();
              }
              if (!playing && !timerFinished) {
                setPlaying(true);
              }
              if (playing && !timerFinished) {
                setKey((prevKey) => prevKey + 1);
              }
            }}
            style={styles.timerView}
            activeOpacity={0.75}
          >
            <CountdownCircleTimer
              key={key}
              isPlaying={playing}
              duration={6}
              size={150}
              strokeWidth={12}
              initialRemainingTime={6}
              colors={[["#ff6700", 1.0]]}
              onComplete={() => {
                Vibration.vibrate();
                setTimerFinished(true);
              }}
            >
              {({ remainingTime }) => {
                if (remainingTime <= 2 && !animating && remainingTime != 0) {
                  handleAnimation();
                }
                return (
                  <Text style={styles.cardText}>
                    <Text style={styles.prompt}>
                      {playing
                        ? remainingTime == 0
                          ? ""
                          : "Tap + Pass\n"
                        : ""}
                    </Text>
                    {playing
                      ? remainingTime == 0
                        ? "Times up!"
                        : remainingTime
                      : "Tap to start"}
                  </Text>
                );
              }}
            </CountdownCircleTimer>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    borderRadius: 14,
    width: "95%",
    maxWidth: 500,
    alignItems: "center",
  },
  cardText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
  prompt: {
    color: "white",
    textAlign: "center",
    fontFamily: "Tw-Reg",
    fontSize: 22,
    margin: 0,
  },
  timerView: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
  },
});
