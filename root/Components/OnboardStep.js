import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../Theme/ThemeContext";
import { Image } from "react-native";

const OnboardStep = ({ SVG, text, heading }) => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Image style={{ zIndex: 1, height:270, width:300, bottom:70 }} source={SVG} />
      <Text
        style={[
          theme.textStyles.topHeading,
          {
            alignSelf: "flex-start",
            borderLeftWidth: 4,
            paddingLeft: 15,
            borderLeftColor: theme.colors.secondary,
          },
        ]}
      >
        {heading}
      </Text>
      <Text style={[theme.textStyles.belowHeading, {bottom:8}]}>{text}</Text>
    </View>
  );
};

export default OnboardStep;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
    gap: 10,
    paddingTop: "20%",
  },
});
