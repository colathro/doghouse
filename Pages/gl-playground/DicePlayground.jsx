import React, { Component, useState, useRef } from "react";
import { GameView } from "../../components";
import { View, StyleSheet, Dimensions, PanResponder, Text } from "react-native";
import MatrixMath from "react-native/Libraries/Utilities/MatrixMath";
import { TouchableOpacity } from "react-native-gesture-handler";

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

function DicePlayground({ navigation }) {
  const refViewRight = useRef(null);
  const refViewLeft = useRef(null);
  const refViewFront = useRef(null);
  const refViewBack = useRef(null);
  const refViewTop = useRef(null);
  const refViewBottom = useRef(null);

  const renderLeft = (color) => {
    return (
      <View
        ref={refViewRight}
        style={[styles.rectangle, color ? { backgroundColor: color } : null]}
      />
    );
  };

  const renderRight = (color) => {
    return (
      <View
        ref={refViewLeft}
        style={[styles.rectangle, color ? { backgroundColor: color } : null]}
      />
    );
  };

  const renderFront = (color) => {
    return (
      <View
        ref={refViewFront}
        style={[styles.rectangle, color ? { backgroundColor: color } : null]}
      />
    );
  };

  const renderBack = (color) => {
    return (
      <View
        ref={refViewBack}
        style={[styles.rectangle, color ? { backgroundColor: color } : null]}
      />
    );
  };

  const renderTop = (color) => {
    return (
      <View
        ref={refViewTop}
        style={[styles.rectangle, color ? { backgroundColor: color } : null]}
      />
    );
  };

  const renderBottom = (color) => {
    return (
      <View
        ref={refViewBottom}
        style={[styles.rectangle, color ? { backgroundColor: color } : null]}
      />
    );
  };

  const handlePanResponderMove = (dx, dy) => {
    console.log(refViewFront);
    const origin = { x: 0, y: 0, z: -50 };
    let matrix = rotateXY(dx, dy);
    transformOrigin(matrix, origin);
    refViewFront.current.setNativeProps({
      style: { transform: [{ perspective: 1000 }, { matrix: matrix }] },
    });

    matrix = rotateXY(dx + 180, dy);
    transformOrigin(matrix, origin);
    refViewBack.current.setNativeProps({
      style: { transform: [{ perspective: 1000 }, { matrix: matrix }] },
    });

    matrix = rotateXY(dx + 90, dy);
    transformOrigin(matrix, origin);
    refViewRight.current.setNativeProps({
      style: { transform: [{ perspective: 1000 }, { matrix: matrix }] },
    });

    matrix = rotateXY(dx - 90, dy);
    transformOrigin(matrix, origin);
    refViewLeft.current.setNativeProps({
      style: { transform: [{ perspective: 1000 }, { matrix: matrix }] },
    });

    matrix = rotateXZ(dx, dy - 90);
    transformOrigin(matrix, origin);
    refViewTop.current.setNativeProps({
      style: { transform: [{ perspective: 1000 }, { matrix: matrix }] },
    });

    matrix = rotateXZ(-dx, dy + 90);
    transformOrigin(matrix, origin);
    refViewBottom.current.setNativeProps({
      style: { transform: [{ perspective: 1000 }, { matrix: matrix }] },
    });
  };

  return (
    <GameView hideMenu={false} navigation={navigation} title="poekdfjo">
      <TouchableOpacity
        onPress={() => {
          handlePanResponderMove(-97, -167);
        }}
      >
        <Text>fuck</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {renderFront("#4c72e0")}
        {renderBack("#8697df")}
        {renderLeft("#b5bce2")}
        {renderRight("#e5afb9")}
        {renderTop("#de7c92")}
        {renderBottom("#d1426b")}
      </View>
    </GameView>
  );
}

const styles = {
  differentContainer: {},
  container: {
    position: "absolute",
    left: WIDTH / 2 - 50,
    top: HEIGHT / 2 - 50,
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
  },
  rectangle: {
    position: "absolute",
    left: 0,
    top: 0,
    width: 100,
    height: 100,
    zIndex: 10,
  },
};

const rotateXY = (dx, dy) => {
  const radX = (Math.PI / 180) * dy;
  const cosX = Math.cos(radX);
  const sinX = Math.sin(radX);

  const radY = (Math.PI / 180) * -dx;
  const cosY = Math.cos(radY);
  const sinY = Math.sin(radY);

  return [
    cosY,
    sinX * sinY,
    cosX * sinY,
    0,
    0,
    cosX,
    -sinX,
    0,
    -sinY,
    cosY * sinX,
    cosX * cosY,
    0,
    0,
    0,
    0,
    1,
  ];
};

const rotateXZ = (dx, dy) => {
  const radX = (Math.PI / 180) * dx;
  const cosX = Math.cos(radX);
  const sinX = Math.sin(radX);

  const radY = (Math.PI / 180) * dy;
  const cosY = Math.cos(radY);
  const sinY = Math.sin(radY);

  return [
    cosX,
    -cosY * sinX,
    sinX * sinY,
    0,
    sinX,
    cosX * cosY,
    -sinY * cosX,
    0,
    0,
    sinY,
    cosY,
    0,
    0,
    0,
    0,
    1,
  ];
};

//source: https://gist.github.com/jmurzy/0d62c0b5ea88ca806c16b5e8a16deb6a#file-foldview-transformutil-transformorigin-js
const transformOrigin = (matrix, origin) => {
  const { x, y, z } = origin;

  const translate = MatrixMath.createIdentityMatrix();
  MatrixMath.reuseTranslate3dCommand(translate, x, y, z);
  MatrixMath.multiplyInto(matrix, translate, matrix);

  const untranslate = MatrixMath.createIdentityMatrix();
  MatrixMath.reuseTranslate3dCommand(untranslate, -x, -y, -z);
  MatrixMath.multiplyInto(matrix, matrix, untranslate);
};

export default DicePlayground;
