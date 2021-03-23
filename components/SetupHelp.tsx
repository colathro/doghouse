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
  helpRef: React.MutableRefObject<TouchableOpacity>;
};

export const SetupHelp: React.FC<props> = (props: props): JSX.Element => {
  const [xPage, setXPage] = useState(null);
  const [yPage, setYPage] = useState(null);
  const [hWidth, setHWidth] = useState(null);
  const [hHeight, setHHeight] = useState(null);

  useEffect(() => {
    props.helpRef.current.measure((fx, fy, width, height, px, py) => {
      console.log("Component width is: " + width);
      console.log("Component height is: " + height);
      console.log("X offset to frame: " + fx);
      console.log("Y offset to frame: " + fy);
      console.log("X offset to page: " + px);
      console.log("Y offset to page: " + py);
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
          <View style={styles.item}>
            <View
              style={[
                styles.balloon,
                { backgroundColor: "#ffe0cc", minHeight: yPage },
              ]}
            >
              <Text style={styles.helpText}>Add Players</Text>
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
                    fill="#ffe0cc"
                    x="0"
                    y="0"
                  />
                </Svg>
              </View>
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
  },
  arrowContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
});
