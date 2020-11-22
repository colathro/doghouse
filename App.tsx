import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import HomeScreen from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
import GameSetup from "./pages/GameSetup/GameSetup";
import Game from "./pages/Game/Game";
import { LogBox, View, StyleSheet } from "react-native";

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
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="GameSetup" component={GameSetup} />
        <Stack.Screen name="Game" component={Game} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const loadResources = async () => {
  await Font.loadAsync({
    "Tw-Reg": require("./assets/fonts/tccm.ttf"),
    "Tw-Bold": require("./assets/fonts/tccb.ttf"),
  });
};
