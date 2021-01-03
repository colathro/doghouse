import React, { useEffect } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { SelectedPacks } from "../components";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { AvailablePack } from "./AvailablePack";

export const Packs: React.FC = observer(
  (): JSX.Element => {
    useEffect(() => {
      GameState.loadActivePacks();
    }, []);

    return (
      <View>
        <View style={styles.container2}>
          <Text style={styles.text2}>Packs:</Text>
          <ScrollView
            contentContainerStyle={styles.packSelectionContainer}
            showsVerticalScrollIndicator={false}
          >
            {GameState.cardPacks.map((val, ind) => (
              <AvailablePack pack={val} key={ind}></AvailablePack>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container2: { flex: 100 },
  text: {
    fontFamily: "Tw-Bold",
    fontSize: 24,
  },
  text2: {
    fontFamily: "Tw-Bold",
    fontSize: 24,
  },
  selectedPackContainer: { flexDirection: "row" },
  packSelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});
