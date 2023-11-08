import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import { useTheme } from "../Theme/ThemeContext";
import LabeledInput from "../Components/LabeledInput";
import Button from "../Components/Button";

const ForgotPassword = ({ navigation }) => {
  const theme = useTheme();
  const handleButtonPress = () => {
    console.log("Button Pressed");
    navigation.navigate("SignUp");
  };
  return (
    <View style={[styles.container]}>
      <Header />
      {/* Entire View Besides Header */}
      <View
        style={[
          {
            padding: theme.screenPadding,

            flex: 1,
            justifyContent: "space-between",
          },
        ]}
      >
        <View>
          <Text
            style={{
              color: theme.colors.secondary,
              fontWeight: "700",
              fontSize: 16,
              fontFamily: "MavenPro",
            }}
          >
            GET STARTED
          </Text>
          <Text
            style={{
              color: theme.colors.black,
              fontWeight: "500",
              fontSize: 20,
            }}
          >
            Forgot Password
          </Text>
          <Text
            style={{
              color: theme.colors.tertiary,
              fontWeight: "300",
              fontSize: 14,
              marginTop: 10,
            }}
          >
            Please fill the details below to sign in to your account and get
            started
          </Text>
          <LabeledInput
            label={"Email"}
            placeHolder={"jognsmith@gmail.com"}
            style={{ marginTop: 10 }}
          />
        </View>
        <View>
          <Button
            buttonStyle={{ backgroundColor: theme.colors.secondary }}
            text={"Send"}
            onPress={handleButtonPress}
          />
        </View>
      </View>
      {/* Entire View Besides Header  End*/}
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
