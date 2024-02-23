import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register } from "../screens";
import { ROUTES } from "../constants";
import HomeNavigator from "./HomeNavigator";
const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
        <Stack.Screen
          name={ROUTES.LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.REGISTER}
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={ROUTES.HOME}
          component={HomeNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
