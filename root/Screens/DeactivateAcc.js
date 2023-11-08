import React from "react";
import { View, Text } from "react-native";
import SvgImport from "../Components/SvgImport";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import RemoveAccount from "../../assets/Svgs/RemoveAccount";
import Button2 from "../Components/Button2";
import { Pressable } from "react-native";
import { useTheme } from "../Theme/ThemeContext";

export default function DeactivateAcc({navigation}){

    const theme =  useTheme();

    return(
        <View style={{flexDirection:'column', height:'100%', marginTop:40, padding:10, width:'100%'}}>
            <Pressable onPress={()=>{navigation.goBack()}}>
            <SvgImport svg={ChevronLeft} style={{marginLeft:10}}/>
            </Pressable>
            <Text style={{fontSize:30, fontWeight:600, marginTop:10}}>Deactivate Account</Text>
            <Text style={{fontSize:15, fontWeight:400, width:345, lineHeight:21.75, color:theme.colors.tertiary}}>Are you want to sure to deactivate your account because after once deactivate you can't backup your account</Text>
            <SvgImport svg={RemoveAccount}/>
            <Pressable style={{marginTop:120, marginBottom:20}}>
            <Button2 text={"Deactivate My Account"}/>
            </Pressable>
        </View>
    )
}