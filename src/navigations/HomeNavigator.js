import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Home, Profile, Submission } from "../screens";
import { ROUTES } from "../constants";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SimpleLineIcons, AntDesign, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function HomeNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#F29505",
        }}
        initialRouteName={ROUTES.LOGIN}
      >
        <Tab.Screen
          name={ROUTES.HOME}
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <SimpleLineIcons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={ROUTES.PROFILE}
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={ROUTES.SUBMISSION}
          component={Submission}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="git-pull-request-outline"
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigator;
