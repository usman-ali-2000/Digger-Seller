import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../Theme/ThemeContext";
import { FlatList } from "react-native";
import Button from "../Components/Button";

import OnboardStep from "../Components/OnboardStep";
import BullDozer from "../../assets/VectorSplash.png";
import SplashCalendar from "../../assets/SplashCalendar.png";
import CreditCard from "../../assets/CreditCard.png";

const Steps = ({ steps, currentIndex }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        marginVertical: 30,

        justifyContent: "center",
      }}
    >
      {steps.map((step, index) => (
        <View
          key={index}
          style={{
            height: 5,
            borderRadius: 10,
            width: currentIndex == index ? 20 : 5,

            backgroundColor: currentIndex == index ? "#F8AB16" : "#F8AB1666",
          }}
        ></View>
      ))}
    </View>
  );
};

const viewconfigRef = { viewAreaCoveragePercentThreshold: 95 };

const OnBoarding = ({ navigation, route }) => {
  const theme = useTheme();
  const width = Dimensions.get("window");
  let flatListRef = React.useRef();

  // current index of element in the flat list
  const [currentIndex, setCurrentIndex] = React.useState(0);
  // changing the viewable area will trigger this
  const onViewRef = React.useRef(({ changed }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });

  //================= Onboarding Steps =================
  const onboardingSteps = [
    // Flat list ref
    {
      SVG: BullDozer,
      heading: "Introducing The DIGGER BY DAY",

      text: "Privacy is one of life’s requirements Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      SVG: SplashCalendar,
      heading: "Easy To Book Digger For Day",
      text: "Our Commitment is Keeping you Safe.",
    },
    {
      SVG: CreditCard,
      heading: "Online And Secure Payment",
      text: "Privacy is one of life’s requirements Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tel",
    },
  ];

  // ==================== handle next step ===================
  const handleNextStep = () => {
    if (currentIndex < onboardingSteps.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      navigation.navigate("Login");
    }
  };

  //========================================================

  return (
    <View
      style={[
        {
          padding: theme.screenPadding,
          backgroundColor: theme.colors.primary,
        },
        styles.container,
      ]}
    >
      <View
        style={{
          alignItems: "flex-end",
          paddingTop: theme.extraTopPadding,
          paddingBottom: 30,
        }}
      >
        <Pressable onPress={()=>{navigation.navigate('Login')}}>
        <Text style={[theme.textStyles.darkHeading, { textAlign: "right" }]}>
          Skip
        </Text>
        </Pressable>
      </View>

      <View style={styles.centerContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          ref={(ref) => {
            flatListRef.current = ref;
          }}
          // viewabilityConfig={viewconfigRef}
          onViewableItemsChanged={onViewRef.current}
          scrollEnabled={false}
          data={onboardingSteps}
          renderItem={({ item, index }) => (
            <View style={{ width: width.width - 40 }}>
              <OnboardStep
                SVG={item.SVG}
                text={item.text}
                heading={item?.heading}
              />
            </View>
          )}
        />
      </View>
      <Steps steps={[1, 2, 3]} currentIndex={currentIndex} />
      <View style={styles.buttonContainer}>
        <Button
          buttonStyle={{ backgroundColor: theme.colors.secondary }}
          text={currentIndex === onboardingSteps.length - 1 ? "Finish" : "Next"}
          onPress={handleNextStep}
          postTextLogo={
            currentIndex === onboardingSteps.length - 1 ? null : null
          }
        />
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {},
});
