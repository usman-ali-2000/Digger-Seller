import React from "react";
import { View, Text } from "react-native";
import ChatItems from "../Components/ChatItems";
import { useTheme } from "../Theme/ThemeContext";

export default function ChatList(){

    const theme = useTheme();

    return(
        <View style={{ height:'100%', width:'100'}}>
            <View style={{flexDirection:'column', alignItems:'center', marginTop:33}}>
            <Text style={{fontSize:20, fontWeight:600, padding:10}}>Messages</Text>
            </View>
            <ChatItems/>
        </View>
    )
}