import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, ROUTES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import Logo from "../../components/svg/logo";
import { Feather } from "@expo/vector-icons";

const Login = (props) => {
  // const {navigation} = props;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.wFull}>
          <View style={styles.row}>
            {/* <View style={styles.mr7}>
              <Logo />
            </View>
            <Text style={styles.brandName}>Olors</Text> */}
            <View>
              <Text
                style={{
                  color: "#585858",
                  fontSize: 32,
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: 40,
                }}
              >
                LOGO
              </Text>
              <Text
                style={{
                  color: "#585858",
                  fontSize: 32,
                  fontWeight: "600",
                  textAlign: "center",
                  marginBottom: 40,
                }}
              >
                Prisma Properties
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 2,
              width: "100%",
              backgroundColor: "#ECECEC",
              marginBottom: 20,
            }}
          ></View>

          <Text style={styles.loginContinueTxt}>Sign In</Text>
          <View style={{ marginTop: 15 }}>
            <Text style={{ color: "#585858" }}>Email</Text>
            <View style={{ position: "relative", flexDirection: "row" }}>
              <Feather
                style={{
                  position: "absolute",
                  left: 15,
                  top: "32%",
                }}
                name="mail"
                size={22}
                color="#B8B8B8"
              />
              <TextInput
                style={styles.input}
                placeholder="Please input email"
              />
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "#585858" }}>Password</Text>
            <View style={{ position: "relative", flexDirection: "row" }}>
              <Feather
                style={{
                  position: "absolute",
                  left: 15,
                  top: "32%",
                }}
                name="lock"
                size={22}
                color="#B8B8B8"
              />
              <TextInput
                style={styles.input}
                placeholder="Please input password"
              />
            </View>
          </View>

          <View style={styles.loginBtnWrapper}>
            {/* <LinearGradient
              colors={[COLORS.gradientForm, COLORS.primary]}
              style={styles.linearGradient}
              start={{ y: 0.0, x: 0.0 }}
              end={{ y: 1.0, x: 0.0 }}
            > */}
            {/******************** LOGIN BUTTON *********************/}
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.HOME)}
              activeOpacity={0.7}
              style={styles.loginBtn}
            >
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
            {/* </LinearGradient> */}
          </View>

          {/***************** FORGOT PASSWORD BUTTON *****************/}
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ROUTES.FORGOT_PASSWORD, {
                userId: "X0001",
              })
            }
            style={styles.forgotPassBtn}
          >
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Don't have an account? </Text>
          {/******************** REGISTER BUTTON *********************/}
          <TouchableOpacity
            onPress={() => navigation.navigate(ROUTES.REGISTER)}
          >
            <Text style={styles.signupBtn}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  container: {
    padding: 15,
    width: "100%",
    position: "relative",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  brandName: {
    fontSize: 42,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 24,
    textAlign: "center",
    // color: COLORS.gray,
    color: "#585858",
    marginBottom: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    marginVertical: 10,
    borderRadius: 16,
    height: 50,
    paddingVertical: 0,
    flex: 1,
  },
  // Login Btn Styles
  loginBtnWrapper: {
    height: 50,
    marginTop: 12,
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.4,
    // shadowRadius: 3,
    elevation: 5,
    backgroundColor: "#FFA10E",
    borderRadius: 16,
  },
  linearGradient: {
    width: "100%",
    borderRadius: 50,
  },
  loginBtn: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 50,
  },
  loginText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  forgotPassText: {
    // color: COLORS.primary,
    color: "#FFA10E",
    textAlign: "center",
    fontWeight: "600",
    marginTop: 15,
  },
  // footer
  footer: {
    position: "absolute",
    bottom: 20,
    textAlign: "center",
    flexDirection: "row",
  },
  footerText: {
    // color: COLORS.gray,
    color: "#B8B8B8",
    fontWeight: "bold",
  },
  signupBtn: {
    // color: COLORS.primary,
    color: "#FFA10E",
    fontWeight: "bold",
  },
  // utils
  wFull: {
    width: "100%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
  imageContainer: {
    width: 50,
    height: 50,
    // borderRadius: 200,
    // borderWidth: 3,
    // borderColor: Colors.gray900,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
