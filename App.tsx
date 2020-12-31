import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import HomeScreen from "./pages/home/Home";
import Settings from "./pages/packselect/PackSelect";
import GameSetup from "./pages/gamesetup/GameSetup";
import Game from "./pages/game/Game";
import Game2 from "./pages/game/Game2";
import { LogBox, View, StyleSheet, FlexAlignType } from "react-native";
import { GameState } from "./states";
import { observer } from "mobx-react-lite";

LogBox.ignoreLogs(["Require cycle:"]);

const Stack = createStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadResources}
        onFinish={() => setIsReady(true)}
      ></AppLoading>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerShown: false,
          cardStyle: {
            backgroundColor: "rgba(0,0,0,0.0)",
          },
        }}
        mode="modal"
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="GameSetup" component={GameSetup} />
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Game2" component={Game2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const loadResources = async () => {
  await Font.loadAsync({
    "Tw-Reg": require("./assets/fonts/tccm.ttf"),
    "Tw-Bold": require("./assets/fonts/tccb.ttf"),
  });
  GameState.loadActivePacks();
};
