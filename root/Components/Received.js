import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import { useTheme } from "../Theme/ThemeContext";
import { useNavigation } from "@react-navigation/native";


export default function Received(props){

    const theme = useTheme();
    const navigation = useNavigation();


    return(

        <View style={{height:115, width:'100%', flexDirection:'column', alignItems:'center'}}>
            <View style={{height:60, width:340, flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:theme.colors.primary, borderTopRightRadius:8, borderTopLeftRadius:8, padding:20}}>
                <Image source={props.image} style={{width:50, height:50, borderRadius:8}} />
                <View style={{flexDirection:'column', width:160, marginRight:1}}>
                <Text style={{fontSize:18, fontWeight:500}} >{props.name}</Text>
                <Text style={{fontSize:12, fontWeight:400, color:theme.colors.tertiary}}>{props.date}</Text>
                </View>
                <Text style={{fontSize:18, fontWeight:600, color:theme.colors.secondary, lineHeight:22}}>₤{props.price}</Text>
            </View>
            <View style={{flexDirection:'row', height:40, width:340, alignItems:'center', justifyContent:'center', padding:10, marginTop:2, backgroundColor:theme.colors.primary, borderBottomRightRadius:8, borderBottomLeftRadius:8}}>
            <Pressable onPress={()=>{navigation.navigate('AddItem')}}>
            <Text style={{fontSize:14, fontWeight:400, color: theme.colors.secondary}}>View Bill</Text>
            </Pressable>
            </View>
            </View>
    )
}