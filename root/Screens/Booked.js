import React from "react";
import { View, Text } from "react-native";
import SvgImport from "../Components/SvgImport";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import Check from "../../assets/Svgs/Check";
import Button2 from "../Components/Button2";
import { Pressable } from "react-native";
import { useTheme } from "../Theme/ThemeContext";


export default function Booked({navigation}){

    const theme = useTheme();

    return(
        <View style={{flexDirection:'column', alignItems:'center', height:'100%', width:'100%'}}>
            <Pressable onPress={()=>{navigation.goBack()}}>
            <SvgImport svg={ChevronLeft} style={{marginTop:40, right:150}}/>
            </Pressable>
            <Text style={{width:345, fontSize:30, fontWeight:600, textAlign:'center', padding:5, marginTop:20, color:theme.colors.black}}>Your Digger is Successfully Booked!</Text>
            <SvgImport svg={Check} style={{marginTop:60}}/>
            <Pressable onPress={()=>{navigation.navigate('Home')}} style={{marginTop:60}}>
            <Button2 text={"Back to Home"}/>
            </Pressable>
        <View style={{width:120, height:5, backgroundColor:theme.colors.black, borderRadius:15, bottom:10, marginTop:40 }}/>
             </View>
    )
}