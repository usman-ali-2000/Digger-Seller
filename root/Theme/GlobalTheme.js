import { Platform } from "react-native";

const theme = {
  textStyles: {
    whiteHeading: {
      fontFamily: "MavenPro",
      fontSize: 24,
      fontWeight: "700",
      color: "#fff",
    },
    darkHeading: {
      fontSize: 18,
      fontWeight: "500",
      color: "#232323",
    },
    belowHeading: {
      fontSize: 16,
      fontWeight: "400",
      color: "#23232399",
    },
    topHeading: {
      fontSize: 26,
      fontWeight: "600",
      color: "#F8AB16",
    },
    defaultButtonText: {
      fontSize: 18,
      fontWeight: "700",
      color: "#fff",
    },
    regular: {
      fontFamily: "MavenPro",
      fontSize: 16,
      fontWeight: "400",
      color: "#1F375B",
    },
    smallText: {
      fontFamily: "MavenPro",
      fontSize: 14,
      fontWeight: "400",
      color: "#4A5A71",
    },
    inputText: {
      fontSize: 16,
      fontWeight: "500",
      color: "#232323",
    },
  },
  colors: {
    primary: "#fff",
    secondary: "#F8AB16",
    tertiary: "#23232399",
    black: "#232323",
  },
  screenPadding: Platform.select({
    ios: 20,
    android: 20,
  }),
  extraTopPadding: Platform.select({
    ios: 40,
    android: 40,
  }),
};

export default theme;
