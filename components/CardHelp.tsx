import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  LayoutRectangle,
} from "react-native";

import Svg, { Path } from "react-native-svg";

type props = {
  visible: boolean;
  callback: any;
  help: string;
  helpRef: React.MutableRefObject<TouchableOpacity>;
};

export const CardHelp: React.FC<props> = (props: props): JSX.Element => {
  const [xPage, setXPage] = useState(-500);
  const [yPage, setYPage] = useState(-500);
  const [hWidth, setHWidth] = useState(-500);
  const [hHeight, setHHeight] = useState(-500);

  useEffect(() => {
    props.helpRef.current.measure((fx, fy, width, height, px, py) => {
      setHWidth(width);
      setHHeight(height);
      setXPage(px);
      setYPage(py);
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
            { left: xPage + hWidth, width: width - xPage - hWidth },
          ]}
        >
          <View style={[styles.item, { paddingRight: 10, paddingTop: 20 }]}>
            <View style={[styles.arrowContainer, { height: yPage }]}>
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
              <Text style={styles.helpText}>{props.help}</Text>
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
  item: {
    marginVertical: moderateScale(7, 2),
    flexDirection: "row",
    paddingRight: 10,
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
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  arrowContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
});
