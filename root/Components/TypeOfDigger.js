import React from "react";
import { Image } from "react-native";
import { Text, View } from "react-native";

export default function TypeOfDigger(){

    return(
        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:20, fontWeight:600, top:10}}>
                Select a Type of digger
            </Text>
            <View style={{flexDirection:'column'}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:345, height:70, borderWidth:1.2, alignItems:'center', padding:10, borderColor:'#F9AC16', borderRadius:10, top:30}}>
                <Image source={require('../../assets/WheelExcavator.png')} style={{height:60, width:92.26}}/>
                <Text style={{fontSize:16, fontWeight:500, textAlign:'left', width:200}}>Wheel Excavator</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:345, height:70, borderWidth:1.2, alignItems:'center', padding:10, borderColor:'#F9AC16', borderRadius:10, top:30, marginTop:20}}>
                <Image source={require('../../assets/MiniLoader.png')} style={{height:60, width:92.26}}/>
                <Text style={{fontSize:16, fontWeight:500, textAlign:'left', width:200}}>Mini Front Loader</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:345, height:70, borderWidth:1.2, alignItems:'center', padding:10, borderColor:'#F9AC16', borderRadius:10, top:30, marginTop:20}}>
                <Image source={require('../../assets/BullDozer.png')} style={{height:60, width:92.26}}/>
                <Text style={{fontSize:16, fontWeight:500, textAlign:'left', width:200}}>BullDozer</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:345, height:70, borderWidth:1.2, alignItems:'center', padding:10, borderColor:'#F9AC16', borderRadius:10, top:30, marginTop:20}}>
                <Image source={require('../../assets/Excavator.png')} style={{height:65.15, width:92.26}}/>
                <Text style={{fontSize:16, fontWeight:500, textAlign:'left', width:200}}>Excavator</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:345, height:70, borderWidth:1.2, alignItems:'center', padding:10, borderColor:'#F9AC16', borderRadius:10, top:30, marginTop:20}}>
                <Image source={require('../../assets/FrontLoader.png')} style={{height:60, width:92.26}}/>
                <Text style={{fontSize:16, fontWeight:500, textAlign:'left', width:200}}>Front Loader</Text>
            </View>
        </View>
        </View>
    )
}