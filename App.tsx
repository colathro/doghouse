import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderBackButton } from "@react-navigation/stack";
import HomeScreen from "./Home";
import Settings from "./Settings";
import GameSetup from "./GameSetup";

const Stack = createStackNavigator();
const navigationOptions = ({ navigation }: any) => ({
    headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
})

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="GameSetup" component={GameSetup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
