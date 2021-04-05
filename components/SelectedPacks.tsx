import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SelectedPack } from "./SelectedPack";
import { ScrollView } from "react-native";
import { useLinkProps } from "@react-navigation/native";

type props = {
  linkToPurchase: boolean;
  navigation: any;
  cardRef: React.MutableRefObject<TouchableOpacity>;
};

export const SelectedPacks: React.FC<props> = observer(
  (props: props): JSX.Element => {
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>selected packs:</Text>
        </View>
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.selectedPackContainer}
            style={styles.selectedPacks}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <SelectedPack
              addMore={true}
              navigation={props.navigation}
              cardRef={props.cardRef}
            ></SelectedPack>
            {GameState.activePacks.map((val, ind) => (
              <SelectedPack addMore={false} pack={val} key={ind}></SelectedPack>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 20,
  },
  textContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontFamily: "Tw-Bold",
    fontSize: 36,
  },
  textMore: { color: "#FF6700", fontFamily: "Tw-Bold", fontSize: 24 },
  selectedPacks: { maxHeight: 200, width: "100%" },
  selectedPackContainer: {
    flexDirection: "row",
  },
});
