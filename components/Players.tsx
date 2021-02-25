import React, { useRef, useState } from "react";
import { IObservableArray } from "mobx";
import { Player } from "../types";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from "react-native";
import { AddIcon } from "./icons/AddIcon";

type props = {
  allowEdit: boolean;
  doghouse: boolean;
  showScore: boolean;
  players: IObservableArray<Player>;
};

export const Players: React.FC<props> = observer(
  (props: props): JSX.Element => {
    const shake = new Animated.Value(0); // Initial value for opacity: 0
    const [currentDoghouseCount, setCount] = useState(0);

    React.useEffect(() => {
      Animated.loop(
        // Animation consists of a sequence of steps
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
        ])
      ).start();
    }, [shake]);

    return (
      <View style={styles.spacing}>
        <View style={styles.playerContainer}>
          <View style={styles.container}>
            {props.players.map((val, ind) => (
              <TouchableOpacity
                key={ind}
                onPress={() => {
                  if (props.allowEdit) {
                    GameState.removePlayer(val.name);
                  } else if (props.doghouse) {
                    if (val.selected) {
                      setCount(currentDoghouseCount - 1);
                      val.score -= 1;
                      val.selected = false;
                    } else {
                      let maxDoghouse =
                        GameState.decks[GameState.dice].maxDoghouse;
                      if (
                        currentDoghouseCount < maxDoghouse ||
                        maxDoghouse == -1
                      ) {
                        setCount(currentDoghouseCount + 1);
                        val.score += 1;
                        val.selected = true;
                      }
                    }
                  }
                }}
              >
                <Animated.Text
                  style={
                    val.selected
                      ? {
                          ...styles.playerSelected,
                          transform: [
                            {
                              rotate: shake.interpolate({
                                inputRange: [-1, 1],
                                outputRange: ["-0.1rad", "0.1rad"],
                              }),
                            },
                          ],
                        }
                      : { ...styles.player }
                  }
                >
                  {props.showScore ? val.name + ": " + val.score : val.name}
                </Animated.Text>
              </TouchableOpacity>
            ))}
            {props.allowEdit ? <AddPlayer></AddPlayer> : <></>}
          </View>
        </View>
        {!props.doghouse ? null : (
          <Text>
            {currentDoghouseCount +
              "/" +
              (GameState.decks[GameState.dice].maxDoghouse == -1
                ? "-"
                : GameState.decks[GameState.dice].maxDoghouse)}
          </Text>
        )}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  playerContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  spacing: {
    marginTop: 10,
    marginBottom: 10,
    minHeight: 150,
  },
  text: {
    fontFamily: "Tw-Bold",
    fontSize: 24,
  },
  player: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
  playerSelected: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
    color: "red",
  },
  addbutton: {
    marginLeft: 12,
    marginRight: 12,
  },
});

const AddPlayer: React.FC = observer(
  (): JSX.Element => {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState("");

    const submit = (name: string) => {
      GameState.addPlayer(name);
    };

    return (
      <View>
        {!editing ? (
          <TouchableOpacity
            onPress={() => {
              setEditing(true);
              setText("");
            }}
            style={styles.addbutton}
          >
            <AddIcon />
          </TouchableOpacity>
        ) : (
          <TextInput
            style={styles.player}
            autoFocus
            onChangeText={(curText) => {
              setText(curText);
            }}
            onBlur={() => {
              setEditing(false);
            }}
            onSubmitEditing={() => {
              submit(text);
            }}
          />
        )}
      </View>
    );
  }
);
