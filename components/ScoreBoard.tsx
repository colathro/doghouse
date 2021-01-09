import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { Players } from ".";
import Modal from "react-native-modal";
import { StyleSheet, TouchableOpacity, View, SafeAreaView, FlatList, Text, StatusBar} from "react-native";

type props = {
  visible: boolean;
  callback: any;
};

const Item = ({ name }) => (
  <View style={styles.item}>
    <Text style={styles.text}>{name}</Text>
  </View>
);

export const Scoreboard: React.FC<props> = observer(
  (props: props): JSX.Element => {
    const renderItem = ({ item }) => (
      <Item name={item.name} />
    );

    return (
      <Modal
        style={styles.modalView}
        backdropOpacity={0.0}
        isVisible={props.visible}
      >
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => {
            props.callback();
            GameState.players.forEach((player) => player.selected = false);
          }}
        >
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>
                Take a Drink!
              </Text>
            </View>
            <SafeAreaView style={styles.scoreContainer}>
              <FlatList
                data={GameState.players}
                renderItem={renderItem}
                keyExtractor={item => item.name}
              />
            </SafeAreaView>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    width: "100%",
    height: "100%",
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
    backgroundColor: '#f9c2ff',
    width: "100%",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  text: {
    fontFamily: "Tw-Bold",
    fontSize: 28,
    margin: 12,
  },
});
