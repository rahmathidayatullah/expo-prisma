import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Submission = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Submission</Text>
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

export default Submission;
