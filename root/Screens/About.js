import React from "react";
import { Text, Pressable } from "react-native";
import { View } from "react-native";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import SvgImport from "../Components/SvgImport";
import { useTheme } from "../Theme/ThemeContext";

export default function About({navigation}){
    
    const theme = useTheme();

    return(
        <View style={[{flexDirection:'column', height:'100%', width:'100%',}]}>
        <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:theme.extraTopPadding, width:219, marginRight:120, height:40, justifyContent:'center'}}>
            <Pressable onPress={()=>{navigation.goBack()}}>
            <SvgImport svg={ChevronLeft} style={{marginTop:5}} />
            </Pressable>
            <Text style={{marginLeft:100, fontSize:20, fontWeight:600, color:theme.colors.black}}>About</Text>
        </View>
        <View style={{padding:10, marginTop:20, height:'100%', padding:theme.screenPadding}}>
        <Text style={{fontSize:14, fontWeight:600, lineHeight:20}}>These Terms and Conditions May Change</Text>
        <Text style={{fontSize:12, fontWeight:400, lineHeight:20, color:theme.colors.black}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>
        <Text style={{fontSize:14, fontWeight:600, lineHeight:20}}>Terms and Conditions</Text>
        <Text style={{fontSize:12, fontWeight:400, lineHeight:20, color:theme.colors.black}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</Text>
        <Text style={{fontSize:12, fontWeight:400, lineHeight:20, color:theme.colors.black}}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</Text>
        </View>
        </View>
    )
}