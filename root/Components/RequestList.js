import React from "react";
import {  View, Image, Text, Pressable } from "react-native";
import { useTheme } from "../Theme/ThemeContext";
import { Entypo } from '@expo/vector-icons';
import { Alert } from "react-native";



export default function RequestList(props){

    const theme = useTheme();

    const handleAccept=()=>{
        Alert.alert('Accept Order...');
    }

    const handleCancel=()=>{
        Alert.alert('Cancel Order...');
    }
    
    const handleDot=()=>{
        Alert.alert('Dots Click...');
    }
    return(
        
        <View style={{height:135, width:'100%', flexDirection:'column', alignItems:'center', marginTop:10}}>
            <View style={{height:50, width:340, flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:theme.colors.primary, borderTopRightRadius:8, borderTopLeftRadius:8}}>
                <Image source={props.image} style={{width:45, height:30}}/>
                <View style={{flexDirection:'column', width:160, marginRight:1}}>
                <Text style={{fontSize:18, fontWeight:500}} >{props.name}</Text>
                <Text style={{fontSize:12, fontWeight:400, color:theme.colors.tertiary}}>{props.date}</Text>
                </View>
                <Text style={{fontSize:18, fontWeight:600, color:theme.colors.secondary, lineHeight:22}}>₤{props.price}</Text>
                <Pressable onPress={handleDot}>
                <Entypo name="dots-three-vertical" size={14.5} color={theme.colors.tertiary} />
                </Pressable>
            </View>
            <View style={{padding:10, backgroundColor:theme.colors.primary, width:340, marginTop:2, borderBottomRightRadius:8, borderBottomLeftRadius:8}}>
            <View style={{flexDirection:'row', width:325, height:58, justifyContent:'space-between'}}>
            <Pressable onPress={handleCancel}>
            <Text style={{width:155, height:38, backgroundColor:'#EEEEEE', textAlign:'center', padding:6, fontSize:16, fontWeight:500, borderRadius:6, color:theme.colors.tertiary}}>Cancel</Text>
            </Pressable>
            <Pressable onPress={handleAccept}>
                <Text style={{width:155, height:38, textAlign:'center', padding:6, fontSize:16, fontWeight:500, borderRadius:6, color:theme.colors.tertiary, backgroundColor:theme.colors.secondary}}>Accept</Text>
            </Pressable>
            </View>
        </View>
            </View>
  )
}