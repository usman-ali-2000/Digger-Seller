import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useTheme } from '../Theme/ThemeContext'
import { Ionicons } from '@expo/vector-icons';

const Button = ({ preTextLogo, postTextLogo, iconSize, iconColor, text, textStyle, buttonStyle, onPress, gradient }) => {

    const theme = useTheme();
    const handleOnPress = () => {
        onPress ? onPress() : null;
    }

    return (
        <Pressable onPress={handleOnPress} style={[styles.container ,buttonStyle]} >
                {preTextLogo && <Ionicons name={preTextLogo} size={iconSize || 24} color={iconColor || "black"} />}
                <Text style={[theme.textStyles.defaultButtonText, textStyle]}>{text}</Text>
                {postTextLogo && <Ionicons name={postTextLogo} size={iconSize || 24} color={iconColor || "black"} />}
        </Pressable>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 20,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        elevation: 2,
    },
})