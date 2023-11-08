import { Pressable, StyleSheet, Text, View } from "react-native";

import React from "react";
import Header from "../Components/Header";
import { useTheme } from "../Theme/ThemeContext";
import LabeledInput from "../Components/LabeledInput";
import apple from "../../assets/Svgs/apple";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import Button from "../Components/Button";

const SignUp = ({ navigation }) => {
  const theme = useTheme();
  const handleButtonPress = () => {
    console.log("Button Pressed");
    navigation.navigate("ForgotPassword");
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
            Create an Account
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
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
              gap: 10,
            }}
          >
            <LabeledInput
              label={"First Name"}
              placeHolder={"John "}
              style={{ flex: 1 }}
            />
            <LabeledInput
              label={"Last Name"}
              placeHolder={"Smith"}
              style={{ flex: 1 }}
            />
          </View>
          <LabeledInput
            label={"Phone Number"}
            placeHolder={"+91 854 953 8520"}
            style={{ marginTop: 10 }}
            keyboardType={"phone-pad"}
          />
          <LabeledInput
            label={"Email"}
            placeHolder={"jognsmith@gmail.com"}
            style={{ marginTop: 10 }}
          />
          <LabeledInput
            label={"Password"}
            placeHolder={"*********"}
            secureTextEntry={true}
            style={{ marginTop: 10 }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <BouncyCheckbox
              size={25}
              fillColor="#F8AB16"
              unfillColor="#FFFFFF"
              iconStyle={{ borderColor: "#F8AB16" }}
              innerIconStyle={{ borderWidth: 1 }}
              onPress={(isChecked) => {}}
            />
            <View style={{flexDirection:'row'}}>
              <Text
                style={{
                  color: theme.colors.black,
                  fontWeight: "500",
                  fontSize: 16,
                }}
              >
                Already have an account? &nbsp;
              </Text>
            <Pressable onPress={()=>{navigation.navigate('SignUp')}}>
           <Text  style={{fontSize:16, fontWeight:'500', color: theme.colors.secondary}}>SignUp</Text>
             </Pressable>
          </View>
          </View>
        </View>

        <View>
          <Button
            buttonStyle={{ backgroundColor: theme.colors.secondary }}
            text={"Sign In"}
            onPress={handleButtonPress}
          />
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <Text
              style={{
                color: theme.colors.black,
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              Already have an account? &nbsp;
            </Text>
            <Pressable onPress={()=>{navigation.navigate('Login')}}>
           <Text  style={{fontSize:16, fontWeight:'500', color: theme.colors.secondary}}>SignIn</Text>
             </Pressable>
             </View>
        </View>
      </View>
      {/* Entire View Besides Header  End*/}
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
