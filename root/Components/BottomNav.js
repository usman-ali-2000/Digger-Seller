import React from "react";
import {View, TouchableOpacity} from "react-native";
import SvgImport from "./SvgImport";
import { useNavigation } from "@react-navigation/native";

export default function BottomNav(props){

    const navigation = useNavigation();

    return(
            <View style={{height:78, width: 375, backgroundColor:'white'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingTop:10, paddingLeft:10, paddingRight:20}}>         
        <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
        <View style={{flexDirection:'column'}}>
            <View style={{backgroundColor: props.houseclr , width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
        <SvgImport svg={props.house}/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Shop')}}>
        <View style={{flexDirection:'column'}}>
            <View style={{backgroundColor:props.cartclr, width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
        <SvgImport svg={props.cart}/>
        </View>
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>{navigation.navigate('Orders')}}>
        <View style={{flexDirection:'column'}}>
            <View style={{backgroundColor:props.handbagclr, width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
        <SvgImport svg={props.handbag}/>
        </View>
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>{navigation.navigate('ChatList')}}>
        <View style={{flexDirection:'column'}}>
            <View style={{backgroundColor:props.chatdotsclr, width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
        <SvgImport svg={props.chatdots}/>
        </View> 
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
        <View style={{flexDirection:'column'}}>
            <View style={{backgroundColor:props.userclr, width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
        <SvgImport svg={props.user}/>
        </View>
        </TouchableOpacity>
        </View>
        <View style={{alignItems:'center'}}>
        <View style={{width:120, height:5, backgroundColor:'black', top:20, borderRadius:15, }}/>
        </View>
        </View>
    )
}