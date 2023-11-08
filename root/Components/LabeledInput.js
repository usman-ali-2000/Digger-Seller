import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "../Theme/ThemeContext";
import { TextInput } from "react-native-gesture-handler";

const LabeledInput = (props) => {
  const theme = useTheme();

  return (
    <View style={[props.style, {}]}>
      <Text style={theme.textStyles.inputText}>{props.label}</Text>
      <TextInput
        style={{
          paddingVertical: 5,
          marginTop: 10,
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 5,
        }}
        value={props.value}
        onChangeText={props.onChangeText}
        keyboardType={props.keyboardType}
        placeholder={props.placeHolder}
        placeholderTextColor={"#23232399"}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

export default LabeledInput;

const styles = StyleSheet.create({});
