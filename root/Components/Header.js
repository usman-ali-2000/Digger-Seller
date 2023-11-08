import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Offset from "../Theme/Offset";
import { Entypo } from "@expo/vector-icons";
import MainLogo from "../../assets/Svgs/MainLogo";
import SvgImport from "./SvgImport";
import { useNavigation } from "@react-navigation/native";

const Header = (props) => {

  const navigation = useNavigation();

  return (
    <View style={[styles.container, props.style]}>
      <Pressable
        style={{ padding: 10, backgroundColor: "white", borderRadius: 20 }}
        onPress={()=>{navigation.goBack()}}
      >
        <Entypo name="chevron-left" size={24} color="black" />
      </Pressable>
      <SvgImport svg={MainLogo} />
      <View style={{ width: 50 }}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: Offset.AndroidSafeArea.paddingTop + 10,
    paddingHorizontal: 20,
  },
});
