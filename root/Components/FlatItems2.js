import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import SvgImport from "./SvgImport";
import Rectangle from "../../assets/Rectangle.png";
import { useTheme } from "../Theme/ThemeContext";

export default function FlatItems(props){
       const theme = useTheme();

    return(
        <View style={{flexDirection:'column', borderWidth:1.2, width:160, height:187, borderColor:'#F9AC16', borderRadius:8, backgroundColor:'white', elevation:10 }}>
            <Image source={props.image} style={{width:153, height:93, marginLeft:5, marginTop:20}}/>
            <Text style={{fontSize:16, fontWeight:'500', marginLeft:11, marginTop:15}}>{props.text}</Text>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
            <SvgImport svg={props.star} style={{ borderRadius:8}}/>
            <Text style={{fontWeight:'500', fontSize:14, marginBottom:5}}>{props.rate}</Text>
            <ImageBackground
            source={Rectangle}
            style={{height:30, width:91, marginLeft:14, marginTop:7, justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:'white', fontSize:16, fontWeight:'500'}}>₤{props.price}/<Text style={{fontSize:13}}>pd</Text></Text>
            </ImageBackground>
            </View>
        </View>
    )
}