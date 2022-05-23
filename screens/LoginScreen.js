import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";

import colors from "../config/colors";

function LoginScreen(props) {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.logoArea}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/KFC_logo.png")}
            style={styles.logoImage}
          />
        </View>
      </View>

      <View style={styles.loginArea}>
        <TextInput
          label="Email"
          value={text}
          onChangeText={(text) => setText(text)}
          underlineColor={"#ddd"}
          activeUnderlineColor={"red"}
          theme={{ colors: { placeholder: "black" } }}
          style={styles.textInput}
        />
        <TextInput
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={(password) => setPassword(password)}
          underlineColor={"#ddd"}
          activeUnderlineColor={"red"}
          theme={{ colors: { placeholder: "black" } }}
          style={styles.textInput}
        />

        <Button
          mode="contained"
          onPress={() => console.log("Loggin In!")}
          dark
          style={{
            backgroundColor: "#222",
            width: "90%",
            alignSelf: "center",
            borderRadius: 0,
            marginVertical: "5%",
          }}
        >
          LOGIN
        </Button>

        <Text style={styles.linktxt}>Forgot your password?</Text>

        <Text style={{ alignSelf: "center" }}>
          Don't Have an Account?{" "}
          <Text style={styles.linktxt}> Register Now</Text>
        </Text>

        <Text
          style={{ fontSize: 16, alignSelf: "center", marginVertical: "4%" }}
        >
          OR
        </Text>

        <Button
          icon={"facebook"}
          mode="contained"
          onPress={() => console.log("Loggin In!")}
          dark
          style={{
            backgroundColor: "#4267B2",
            width: "65%",
            alignSelf: "center",
            borderRadius: 0,
          }}
        >
          LOGIN WITH FACEBOOK
        </Button>

        <View style={styles.loginFacebookButtonContainer}></View>
      </View>

      <View style={styles.continueArea}>
        <Text style={{ color: "red" }}>Continue as Guest</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  logoArea: {
    height: "38%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    width: "80%",
    height: "80%",
    overflow: "hidden",
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },

  loginArea: {
    height: "50%",
    backgroundColor: "#fff",
    marginBottom: "10%",
  },
  textInput: {
    backgroundColor: "#fff",
  },
  linktxt: {
    color: "red",
    textDecorationLine: "underline",
    alignSelf: "center",
    marginVertical: "3%",
  },

  continueArea: {
    height: "7%",
    backgroundColor: "#fff",
    borderTopColor: colors.lightGray,
    borderTopWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
