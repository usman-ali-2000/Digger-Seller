import React from "react";
import { View, Text, Pressable} from "react-native";
import SvgImport from "../Components/SvgImport";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";

export default function BillingHistory({navigation}){

    return(
        <View style={{flexDirection:'column', alignItems:'center', height:'100%'}}>
        <View style={{flexDirection:'row', alignItems:'center', marginTop:40, justifyContent:'space-between', width:345, padding:5}}>
            <Pressable onPress={()=>{navigation.goBack()}}>
            <SvgImport svg={ChevronLeft}/>
            </Pressable>
            <Text style={{fontSize:20, fontWeight:600}}>Billing History</Text>
            <Text style={{fontSize:16, fontWeight:500}}></Text>
            </View>
        </View>
    )
}