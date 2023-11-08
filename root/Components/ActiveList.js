import React from "react";
import {  View, Image, Text, Pressable } from "react-native";
import { useTheme } from "../Theme/ThemeContext";
import { Entypo } from '@expo/vector-icons';

export default function ActiveList(props){

    const theme = useTheme();

    return(

        <View style={{height:135, width:'100%', flexDirection:'column', alignItems:'center'}}>
            <View style={{height:60, width:340, flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:theme.colors.primary, borderTopRightRadius:8, borderTopLeftRadius:8}}>
                <Image source={props.image} style={{width:45, height:30}}/>
                <View style={{flexDirection:'column', width:160, marginRight:1}}>
                <Text style={{fontSize:18, fontWeight:500}} >{props.name}</Text>
                <Text style={{fontSize:12, fontWeight:400, color:theme.colors.tertiary}}>{props.date}</Text>
                </View>
                <Text style={{fontSize:18, fontWeight:600, color:theme.colors.secondary, lineHeight:22}}>₤{props.price}</Text>
                <Pressable>
                <Entypo name="dots-three-vertical" size={14.5} color={theme.colors.tertiary} />
                </Pressable>
            </View>
            <View style={{flexDirection:'row', height:50, width:340, alignItems:'center', justifyContent:'space-between', padding:10, marginTop:2, backgroundColor:theme.colors.primary, borderBottomRightRadius:8, borderBottomLeftRadius:8}}>
                <View style={{flexDirection:'row', alignItems:'center', width:115, justifyContent:'space-between'}}>
                    <Image source={props.profile} style={{width:30, height:30, borderRadius:30}}/>
                    <Text style={{color:theme.colors.tertiary, textAlign:'left', width:120, fontSize:14, fontWeight:500, paddingLeft:10}}>{props.userName}</Text>
                </View>
                <Text style={{width:96, height:28, color:theme.colors.primary, backgroundColor:'#3F33D3', textAlign:'center', padding:4, fontSize:12, fontWeight:500, borderRadius:5}}>IN PROGRESS</Text>
            </View>
            </View>
    )
}