import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./Pages/Home/Home";
import Settings from "./Pages/Settings/Settings";
import GameSetup from "./Pages/GameSetup/GameSetup";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false,
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="GameSetup" component={GameSetup} />
        <Stack.Screen name="GameSetup" component={GameSetup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
