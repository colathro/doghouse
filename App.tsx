import React, { useEffect, useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import HomeScreen from "./pages/home/Home";
import Settings from "./pages/packselect/PackSelect";
import GameSetup from "./pages/gamesetup/GameSetup";
import Game from "./pages/game/Game";
import DicePlayground from "./pages/gl-playground/DicePlayground";
import { LogBox, Alert, View } from "react-native";
import { GameState } from "./states";
import * as SplashScreen from "expo-splash-screen";

LogBox.ignoreLogs(["Require cycle:", "Require cycles"]);

const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        //await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await loadResources();
      } catch (e) {
        Alert.alert("error", e.message);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ height: "100%", width: "100%" }} onLayout={onLayoutRootView}>
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
          <Stack.Screen name="DicePlayground" component={DicePlayground} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const loadResources = async () => {
  await Font.loadAsync({
    "Tw-Reg": require("./assets/fonts/tccm.ttf"),
    "Tw-Bold": require("./assets/fonts/tccb.ttf"),
    ShowCardGothic: require("./assets/fonts/scg.ttf"),
  });
  await GameState.loadActivePacks();
};
