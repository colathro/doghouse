import React, { useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { StyleSheet, View, Text } from "react-native";
import { SelectedPack } from "./SelectedPack";
import { ScrollView } from "react-native";

type props = {
  linkToPurchase: boolean;
  navigation: any;
};

export const SelectedPacks: React.FC<props> = observer(
  (props: props): JSX.Element => {
    return (
      <View style={styles.spacing}>
        <Text style={styles.text}>Selected Packs:</Text>
        <View style={styles.container}>
          <ScrollView
            contentContainerStyle={styles.selectedPackContainer}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <SelectedPack addMore={true} navigation={props.navigation} />
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
    width: "90%",
  },
  spacing: {
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    fontFamily: "Tw-Bold",
    fontSize: 24,
  },
  selectedPackContainer: {
    flexDirection: "row",
  },
});
