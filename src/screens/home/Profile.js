import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Profile</Text>
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

export default Profile;
