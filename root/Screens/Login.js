import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Header from "../Components/Header";
import { useTheme } from "../Theme/ThemeContext";
import LabeledInput from "../Components/LabeledInput";
import apple from "../../assets/Svgs/apple";
import facebook from "../../assets/Svgs/fb";
import SvgImport from "../Components/SvgImport";
import Google from "../../assets/Svgs/google";
import Button from "../Components/Button";

const Login = ({ navigation }) => {
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
            Account Details
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
          <LabeledInput
            label={"Password"}
            placeHolder={"*********"}
            secureTextEntry={true}
            style={{ marginTop: 10 }}
          />
          <Pressable onPress={handleButtonPress}>
          <Text
            style={{
              color: theme.colors.secondary,
              fontWeight: "500",
              fontSize: 18,
              alignSelf: "flex-end",

              marginTop: 10,
            }}
          >
            Forgot Password?
          </Text>
          </Pressable>
          {/* make Or in between two lines "Centered" */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#DCDCDC",
              }}
            />
            <Text
              style={{
                color: theme.colors.black,
                fontWeight: "500",
                fontSize: 14,
                marginHorizontal: 10,
              }}
            >
              or
            </Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#DCDCDC",
              }}
            />
          </View>
          {/* Line Out  */}
          {/* Social Media Buttons */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 20,
              marginTop: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 20,
                backgroundColor: "white",
              }}
            >
              <SvgImport svg={Google} />
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 20,
                backgroundColor: "white",
              }}
            >
              <SvgImport svg={facebook} />
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 20,
                backgroundColor: "white",
              }}
            >
              <SvgImport svg={apple} />
            </View>
          </View>
        </View>
        {/* Social Media Buttons End */}
        <View>
          <Button
            buttonStyle={{ backgroundColor: theme.colors.secondary }}
            text={"Sign In"}
            onPress={()=>{navigation.navigate('Home')}}
          />
        </View>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
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
            <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
           <Text  style={{fontSize:16, fontWeight:'500', color: theme.colors.secondary}}>SignUp</Text>
             </TouchableOpacity>
          </View>
          </View>
      </View>
      {/* Entire View Besides Header  End*/}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
