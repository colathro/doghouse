import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";

import Svg, { Path } from "react-native-svg";

type props = {
  visible: boolean;
  callback: any;
  playersHelpRef: React.MutableRefObject<TouchableOpacity>;
  cardsHelpRef: React.MutableRefObject<TouchableOpacity>;
};

export const SetupHelp: React.FC<props> = (props: props): JSX.Element => {
  const [playersXPage, setplayersXPage] = useState(null);
  const [playersYPage, setplayersYPage] = useState(null);
  const [playersHWidth, setplayersHWidth] = useState(null);
  const [playersHHeight, setplayersHHeight] = useState(null);

  const [cardsXPage, setcardsXPage] = useState(null);
  const [cardsYPage, setcardsYPage] = useState(null);
  const [cardsHWidth, setcardsHWidth] = useState(null);
  const [cardsHHeight, setcardsHHeight] = useState(null);

  useEffect(() => {
    props.playersHelpRef.current.measure((fx, fy, width, height, px, py) => {
      setplayersHWidth(width);
      setplayersHHeight(height);
      setplayersXPage(px);
      setplayersYPage(py);
    });
    props.cardsHelpRef.current.measure((fx, fy, width, height, px, py) => {
      setcardsHWidth(width);
      setcardsHHeight(height);
      setcardsXPage(px);
      setcardsYPage(py);
    });
  }, []);

  return (
    <Modal animationType="fade" transparent={true} visible={props.visible}>
      <TouchableOpacity
        style={styles.centeredView}
        onPress={() => {
          props.callback(false);
        }}
      >
        <View
          style={[
            styles.helpView,
            {
              alignItems: "flex-end",
              justifyContent: "flex-end",
              right: width - playersXPage,
              width: playersXPage,
              bottom: height - playersYPage - playersHHeight,
              height: height - playersYPage - playersHHeight,
            },
          ]}
        >
          <View style={[styles.item]}>
            <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
              <Svg
                style={styles.arrowRight}
                width={moderateScale(15.5, 0.6)}
                height={moderateScale(17.5, 0.6)}
                viewBox="32.485 17.5 15.515 17.5"
                enable-background="new 32.485 17.5 15.515 17.5"
              >
                <Path
                  d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                  fill="black"
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
            <View style={[styles.balloon]}>
              <Text style={styles.helpText}>Add some players here!</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.helpView,
            {
              justifyContent: "flex-end",
              left: cardsXPage + (cardsHWidth / 4) * 3,
              width: width - cardsXPage - (cardsHWidth / 4) * 3,
              bottom: height - cardsYPage - cardsHHeight / 2,
              height: height - cardsYPage - cardsHHeight / 2,
            },
          ]}
        >
          <View style={[styles.item, { paddingRight: 10 }]}>
            <View style={[styles.arrowContainer, styles.arrowLeftContainer]}>
              <Svg
                style={styles.arrowLeft}
                width={moderateScale(15.5, 0.6)}
                height={moderateScale(17.5, 0.6)}
                viewBox="32.484 17.5 15.515 17.5"
                enable-background="new 32.485 17.5 15.515 17.5"
              >
                <Path
                  d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                  fill="black"
                  x="0"
                  y="0"
                />
              </Svg>
            </View>
            <View style={[styles.balloon]}>
              <Text style={styles.helpText}>Get more packs here!</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

const { width, height } = Dimensions.get("window");
//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;
const screenSize = Math.sqrt(width * height) / 100;

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

const styles = StyleSheet.create({
  centeredView: {
    backgroundColor: "transparent",
    flex: 1,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  helpView: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  helpText: {
    textAlign: "center",
    fontFamily: "Tw-Bold",
    fontSize: 20,
    margin: 12,
  },
  arrowLeft: {
    left: moderateScale(-6, 0.5),
  },
  arrowRight: {
    right: moderateScale(-6, 0.5),
  },
  item: {
    marginVertical: moderateScale(7, 2),
    flexDirection: "row",
  },
  balloon: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20,
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 3,
    backgroundColor: "#ff6700",
  },
  arrowContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
  },
  arrowLeftContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  arrowRightContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});
