import React, { Component, useState, useRef, useEffect } from "react";
import { GameView } from "../../components";
import { View, StyleSheet, Dimensions, PanResponder, Text, Animated, Easing} from "react-native";
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

  const renderLeft = (
      <Animated.View
        ref={refViewRight}
        style={[styles.rectangle, { backgroundColor: "#ff6700" }]}
      >
        <Text style={styles.text}>5</Text>
      </Animated.View>
    );

  const renderRight = (
      <Animated.View
        ref={refViewLeft}
        style={[styles.rectangle, { backgroundColor: "#ff6700" }]}
      >
        <Text style={styles.text}>2</Text>
      </Animated.View>
    );

  const renderFront = (
      <Animated.View
        ref={refViewFront}
        style={[styles.rectangle,{ backgroundColor: "#ff6700" }]}
      >
        <Text style={styles.text}>4</Text>
      </Animated.View>
    );

  const renderBack = (
      <Animated.View
        ref={refViewBack}
        style={[styles.rectangle, { backgroundColor: "#ff6700" } ]}
      >
        <Text style={styles.text}>3</Text>
      </Animated.View>
    );

  const renderTop =  (
      <Animated.View
        ref={refViewTop}
        style={[styles.rectangle, { backgroundColor: "#ff6700" }]}
      >
        <Text style={styles.text}>1</Text>
      </Animated.View>
    );

  const renderBottom = (
      <Animated.View
        ref={refViewBottom}
        style={[styles.rectangle, {backgroundColor: "#ff6700" }]}
      >
        <Text style={styles.text}>6</Text>
      </Animated.View>
    );

  const setRotation = (dx, dy, scale) => {
    const origin = { x: 0, y: 0, z: -50 };
    let matrix = rotateXY(dx, dy, scale);
    transformOrigin(matrix, origin);
    refViewFront.current.setNativeProps({
      style: { transform: [{ perspective: 1000 }, { matrix: matrix }] },
    });

    matrix = rotateXY(dx + 180, dy, scale);
    transformOrigin(matrix, origin);
    refViewBack.current.setNativeProps({
      style: { transform: [{ perspective: 1000 }, { matrix: matrix }] },
    });

    matrix = rotateXY(dx + 90, dy, scale);
    transformOrigin(matrix, origin);
    refViewRight.current.setNativeProps({
      style: { transform: [{ perspective: 1000 }, { matrix: matrix }] },
    });

    matrix = rotateXY(dx - 90, dy, scale);
    transformOrigin(matrix, origin);
    refViewLeft.current.setNativeProps({
      style: { transform: [{ perspective: 1000 }, { matrix: matrix }] },
    });

    matrix = rotateXZ(dx, dy - 90, scale);
    transformOrigin(matrix, origin);
    refViewTop.current.setNativeProps({
      style: { transform: [{ perspective: 1000 }, { matrix: matrix }] },
    });

    matrix = rotateXZ(-dx, dy + 90, scale);
    transformOrigin(matrix, origin);
    refViewBottom.current.setNativeProps({
      style: { transform: [{ perspective: 1000 }, { matrix: matrix }] },
    });
  };

  const [x, setDX] = useState(new Animated.Value(0));
  const [y, setDY] = useState(new Animated.Value(0));
  const [scale, setScale] = useState(new Animated.Value(1));
  const [curX, setCurX] = useState(0);
  const [curY, setCurY] = useState(0);

  let dx = 0;
  let dy = 0;
  const [rolling, setRolling] = useState(false);
  x.addListener(({value}) => {
    dx = value;
    setRotation(value, dy, 1);
  });
  y.addListener(({value}) => {
    dy = value;
    setRotation(dx, value, 1);
  });

  const roll = () => {
    let spinX = getRandomInt(2,7);
    let spinY = getRandomInt(2,7);
    let dirX = getRandomInt(0,2) == 0 ? -1 : 1;
    let dirY = getRandomInt(0,2) == 0 ? -1 : 1;

    Animated.sequence([
      Animated.parallel([
        Animated.timing(x, {
          toValue: (spinX * dirX)*90,
          duration: 800,
          easing: Easing.bounce,
          useNativeDriver: true,
        }),
        Animated.timing(y, {
          toValue: (spinY * dirY)*90,
          duration: 800,
          easing: Easing.bounce,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      setRolling(false);
      setDX(new Animated.Value(0));
      setDY(new Animated.Value(0));
      setCurX(spinX * dirX);
      setCurY(spinY * dirY);
      setCurX(0);
      setCurY(0);
    });
  };

  return (
    <GameView hideMenu={false} navigation={navigation} title="poekdfjo">
      <TouchableOpacity
        onPress={() => {
            if(!rolling){
              setRolling(!rolling);
              roll();
            }
        }}
      >
        <Text>fuck</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {renderFront}
        {renderBack}
        {renderLeft}
        {renderRight}
        {renderTop}
        {renderBottom}
      </View>
    </GameView>
  );
}

const styles = StyleSheet.create({
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
    borderRadius: 7,
    borderColor: "black",
    borderWidth: 3,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: "Tw-Bold",
    fontSize: 28,
  }
});

const rotateXY = (dx, dy, scale) => {
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
    scale, // 1 is normal, 2 is half size
  ];
};

const rotateXZ = (dx, dy, scale) => {
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
    scale,
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

function getRandomInt(min, max) { // [min, max)
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomBounce(setCurX, setCurY, curX, curY, x, y, scale) { // dir -1 or 1 for direction
  let spinX = getRandomInt(6,10);
  let spinY = getRandomInt(6,10);
  let dirX = getRandomInt(0,2) == 0 ? -1 : 1;
  let dirY = getRandomInt(0,2) == 0 ? -1 : 1;
  setCurX(curX.current + (spinX * dirX));
  setCurY(curY.current + (spinY * dirY));
  return Animated.parallel([
    Animated.parallel([
      Animated.timing(x, {
        toValue: curX.current*90,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(y, {
        toValue: curY.current*90,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]),
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: .75,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]),
  ]);
}

export default DicePlayground;
