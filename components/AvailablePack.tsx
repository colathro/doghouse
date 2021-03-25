import React, { useEffect, useState } from "react";
import { GameState } from "../states";
import { observer } from "mobx-react-lite";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BoneMartiniIcon } from "./icons/BoneMartiniIcon";
import { UnlockedIcon } from "./icons/UnlockedIcon";
import { LockedIcon } from "./icons/LockedIcon";
import { CardPack } from "../types";
import { PackPreview } from "./PackPreview";
import * as StoreReview from "expo-store-review";
import { PackIconMapper } from "../components";

type props = {
  pack: CardPack;
};

export const AvailablePack: React.FC<props> = observer(
  (props: props): JSX.Element => {
    const [modalVisible, setModalVisible] = useState(false);

    const active =
      GameState.activePacks.filter((val) => {
        return val.name === props.pack.name;
      }).length > 0;

    const ratePack = () => {
      StoreReview.requestReview();
      setTimeout(() => {
        GameState.giveRatePack();
        GameState.syncPurchasedPacks();
      }, 5000);
    };

    let button;

    if (active) {
      button = (
        <TouchableOpacity
          style={selectStyles.selectButtonInactive}
          onPress={() => {
            GameState.removeActivePack(props.pack);
          }}
        >
          <Text style={selectStyles.selectButtonText}>{"disable"}</Text>
        </TouchableOpacity>
      );
    } else if (props.pack.purchased) {
      button = (
        <TouchableOpacity
          style={selectStyles.selectButton}
          onPress={() => {
            GameState.addActivePack(props.pack);
          }}
        >
          <Text style={selectStyles.selectButtonText}>{"enable"}</Text>
        </TouchableOpacity>
      );
    } else if (props.pack.ratePack && !props.pack.purchased) {
      button = (
        <TouchableOpacity
          style={selectStyles.selectButtonRate}
          onPress={ratePack}
        >
          <Text style={selectStyles.selectButtonText}>{"rate"}</Text>
        </TouchableOpacity>
      );
    } else {
      button = (
        <TouchableOpacity
          style={selectStyles.selectButtonBuy}
          onPress={() => {
            GameState.addActivePack(props.pack);
          }}
        >
          <Text style={selectStyles.selectButtonText}>{"$0.99"}</Text>
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>
        <PackPreview
          visible={modalVisible}
          callback={() => {
            setModalVisible(false);
          }}
          pack={props.pack}
        ></PackPreview>
        <View style={infoStyle.container}>
          {props.pack.purchased ? (
            <UnlockedIcon style={infoStyle.icon} />
          ) : (
            <LockedIcon style={infoStyle.icon} />
          )}
          <TouchableOpacity
            style={infoStyle.helpButton}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text style={infoStyle.helpButtonText}>!</Text>
          </TouchableOpacity>
        </View>
        <View style={iconStyles.container}>
          <PackIconMapper packName={props.pack.name} style={iconStyles.icon} />
        </View>
        <View style={titleStyles.titleContainer}>
          <Text style={titleStyles.text}>{props.pack.name}</Text>
        </View>
        <View style={selectStyles.selectContainer}>{button}</View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    justifyContent: "space-between",
    maxWidth: 148,
    height: 200,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.0,
    elevation: 8,
    borderRadius: 6,
    margin: 8,
  },
});

const titleStyles = StyleSheet.create({
  titleContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    textAlign: "center",
    color: "black",
    fontFamily: "Tw-Bold",

    fontSize: 22,
  },
});

const iconStyles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    height: 80,
    width: 80,
  },
});

const infoStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    margin: 6,
  },
  icon: {
    height: 18,
    width: 18,
  },
  helpButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 18,
    width: 18,
    borderRadius: 50,
  },
  helpButtonText: {
    color: "#ffffff",
    fontFamily: "Tw-Bold",

    fontSize: 18,
  },
});

const selectStyles = StyleSheet.create({
  selectContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  selectButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 30,
    width: 100,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    position: "relative",
  },
  selectButtonInactive: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 30,
    width: 100,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    position: "relative",
  },
  selectButtonBuy: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00ff00",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 30,
    width: 100,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    position: "relative",
  },
  selectButtonRate: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff6700",
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    height: 30,
    width: 100,
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    position: "relative",
  },
  selectButtonText: {
    color: "black",
    fontFamily: "Tw-Bold",

    fontSize: 24,
  },
});
