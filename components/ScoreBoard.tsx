import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { Players } from ".";
import Modal from "react-native-modal";
import { StyleSheet, TouchableOpacity, View, SafeAreaView, ScrollView, Text, StatusBar, Dimensions } from "react-native";

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

type props = {
  visible: boolean;
  callback: any;
};

const Item = ({ name, score}) => (
  <View style={styles.item}>
    <Text style={styles.text}>{name}</Text>
    <Text style={styles.text}>{score}</Text>
  </View>
);

export const Scoreboard: React.FC<props> = observer(
  (props: props): JSX.Element => {
    const renderItem = ({ item }) => (
      <Item name={item.name} score={item.score} />
    );

    return (
      <Modal
        style={styles.modalView}
        backdropOpacity={0.0}
        isVisible={props.visible}
      >
        <View style={styles.centeredView} >
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.textContainer}
              onPress={() => {
                props.callback();
                GameState.players.forEach((player) => player.selected = false);
              }}
            >
              <Text style={styles.text}>
                Take a Drink!
              </Text>
            </TouchableOpacity>
              <ScrollView style={styles.scoreContainer}>
                {GameState.players.map((val, ind) => (
                  <View style={styles.item} key={ind}>
                    <Text style={styles.text}>{val.name}</Text>
                    <Text style={styles.text}>{val.score}</Text>
                  </View>
                ))}
              </ScrollView>
          </View>
        </View>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    width: width,
    height: height,
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    height: 160,
    width: "100%",
    backgroundColor: "#ff6700",
    alignItems: "center",
    justifyContent: "center",
  },
  player: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
  modalView: {
    backgroundColor: "yellow",
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  centeredView: {
    backgroundColor: "rgba(0,0,0,0)",
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  scoreContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: '#f9c2ff',
    width: width,
    marginVertical: 2
  },
  text: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
});
