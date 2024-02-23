import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
});

export default Home;
