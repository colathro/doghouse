import React from "react";
import { Button } from "../components";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { CardPack, Card } from "../types";
import { DeckPrompts } from "../constants";

type props = {
  visible: boolean;
  callback: any;
  pack: CardPack;
};

const cardPreview = (prompt: string, card: Card) => {
  return (
    <View style={cardStyles.background}>
      <View style={cardStyles.body}>
        <Text style={cardStyles.prompt}>{prompt}</Text>
        <Text style={cardStyles.text}>{card.text}</Text>
      </View>
    </View>
  );
};

export const PackPreview: React.FC<props> = (props: props): JSX.Element => {
  return (
    <Modal
      style={styles.modalView}
      animationType="fade"
      transparent={true}
      visible={props.visible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView
            style={styles.cardScrollView}
            contentContainerStyle={styles.cardContainer}
            showsVerticalScrollIndicator={false}
          >
            {cardPreview(DeckPrompts.barkOrBite, props.pack.barkOrBite[0])}
            {cardPreview(DeckPrompts.breeds, props.pack.breeds[0])}
            {cardPreview(DeckPrompts.dogFight, props.pack.dogFight[0])}
            {cardPreview(DeckPrompts.teachersPet, props.pack.teachersPet[0])}
            {cardPreview(DeckPrompts.throwABone, props.pack.throwABone[0])}
            {cardPreview(
              DeckPrompts.doghouseOrDare,
              props.pack.doghouseOrDare[0]
            )}
          </ScrollView>
          <Button
            title="CLOSE"
            onPress={() => {
              props.callback(false);
            }}
          ></Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 14,
    width: "95%",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  cardScrollView: {
    height: 350,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
});

const cardStyles = StyleSheet.create({
  background: {
    margin: 16,
    width: 120,
    height: 180,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    borderRadius: 4,
  },
  body: {
    backgroundColor: "#fff",
    height: "90%",
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  prompt: {
    textAlign: "center",
    fontFamily: "Tw-Reg",
    color: "#808080",
    fontSize: 16,
    margin: 0,
  },
  text: {
    textAlign: "center",
    fontFamily: "Tw-Bold",
    fontSize: 16,
    margin: 12,
  },
});
