import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/screens/auth/Login";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./src/navigations/AuthNavigator";

export default function App() {
  return (
    // <StatusBar style="auto" />
    // <Text>Open up App.js to start working on your app!</Text>
    // <View style={styles.container}>
    <NavigationContainer>
      <AuthNavigator />
      {/* <Login />

      </AuthNavigator> */}
    </NavigationContainer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
