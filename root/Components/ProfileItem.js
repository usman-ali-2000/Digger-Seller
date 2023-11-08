import React from "react";
import { View, Text } from "react-native";
import SvgImport from "./SvgImport";
import Right from "../../assets/Svgs/Right";

export default function ProfileItem(props){

    return(
        <View style={{flexDirection:'row', justifyContent:'space-between', width:335.2, height:50, alignItems:'center', padding:10, marginVertical:10, backgroundColor:'#ECEDEE',}}>
            <SvgImport svg={props.image}/>
            <Text style={{fontSize:16, fontWeight:500, textAlign:'left', width:200}}>{props.text}</Text>
            <SvgImport svg={Right}/>
        </View>
    )
}