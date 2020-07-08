import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Onboarding from "./scr/nav/auth";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const customFonts = {
  "SF-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  "SF-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  "SF-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
};

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => (
  <AuthenticationStack.Navigator>
    <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
  </AuthenticationStack.Navigator>
);

export default function App() {
  const [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <AuthenticationNavigator />
    </NavigationContainer>
  );
}
