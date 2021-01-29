import React, { useEffect, useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { RefreshIcon } from "../components";
import { AvailablePack } from "./AvailablePack";

export const Packs: React.FC = observer(
  (): JSX.Element => {
    const refresh = () => {
      setLoading(true);
      GameState.syncPurchasedPacks().then(() => {
        setLoading(false);
      });
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      GameState.loadActivePacks();
      refresh();
    }, []);

    return (
      <View>
        <View style={styles.container2}>
          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.refresh} onPress={refresh}>
              <RefreshIcon />
            </TouchableOpacity>
            {GameState.devMode ? (
              <>
                <TouchableOpacity
                  style={styles.devButton}
                  onPress={GameState._resetRate}
                >
                  <Text style={styles.text}>Reset Rate</Text>
                </TouchableOpacity>
              </>
            ) : (
              <></>
            )}
          </View>
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
    marginLeft: 10,
    marginRight: 10,
  },
  text2: {
    fontFamily: "Tw-Bold",
    fontSize: 24,
  },
  refresh: {
    alignItems: "center",
    marginRight: 10,
  },
  selectedPackContainer: { flexDirection: "row" },
  packSelectionContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  optionsContainer: {
    flexDirection: "row-reverse",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  devButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 30,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    position: "relative",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 30,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    position: "relative",
  },
});
