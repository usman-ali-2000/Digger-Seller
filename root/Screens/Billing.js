import React from "react";
import { Pressable } from "react-native";
import { View, Text, Image } from "react-native";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import SvgImport from "../Components/SvgImport";
import { useTheme } from "../Theme/ThemeContext";
import Mail from "../../assets/Svgs/Mail";
import ChatCircle1 from "../../assets/Svgs/ChatCircle1";
import Vector from "../../assets/Svgs/Vector";
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";

export default function Billing({navigation}){

    const [showItems, setShowItem] = useState(false);

    const theme = useTheme();

    const handleItems=()=>{
    if(showItems){
        setShowItem(false);
    }else{
        setShowItem(true);
    }
    }

    return(
        <View style={{flexDirection:'column', height:'100%', width:'100%', alignItems:'center'}}>
        <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:40, width:'100%', marginRight:120, height:40, justifyContent:'center'}}>
            <Pressable onPress={()=>{navigation.goBack()}}>
            <SvgImport svg={ChevronLeft} style={{marginTop:5}} />
            </Pressable>
            <Text style={{marginLeft:100, fontSize:20, fontWeight:600}}>Bill details</Text>
        </View>
        <View style={{backgroundColor:theme.colors.primary, flexDirection:'column', alignItems:'center', width:'100%', padding:10, justifyContent:'center', borderRadius:8}}>
        <View style={{flexDirection:'row', alignItems:'center', width:'100%', padding:10, justifyContent:'center'}}>
            <Image source={require('../../assets/DiannePic.png')} style={{height:50, width:50, borderRadius:8}}/>
            <View style={{flexDirection:'column', justifyContent:'center', marginLeft:10}}>
            <Text style={{fontSize:18, fontWeight:600, color: theme.colors.black, width:180}}>Alex bravo</Text>
            <Text style={{fontSize:12, fontWeight:400, color: theme.colors.tertiary, width:180}}>@super_customer</Text>
            </View>
            <Pressable onPress={()=>{navigation.navigate('Chat')}}>
            <SvgImport svg={Mail} style={{margin:5}}/>
            </Pressable>
            <Pressable onPress={()=>{navigation.navigate('Chat')}}>
            <SvgImport svg={ChatCircle1} style={{margin:5}}/>
            </Pressable>
            <Pressable onPress={()=>{navigation.navigate('Chat')}}>
            <SvgImport svg={Vector} style={{margin:5}}/>
            </Pressable>
        </View>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:10}}>
          <View style={{flexDirection:'column', alignItems:'center'}}>
            <Text style={{fontSize:14, fontWeight:400, color: theme.colors.black, width:170, textAlign:'left', padding:5}}>Order number</Text>
            <Text style={{fontSize:14, fontWeight:400, color: theme.colors.black, width:170, textAlign:'left', padding:5}}>Order placed</Text>
            <Text style={{fontSize:14, fontWeight:400, color: theme.colors.black, width:170, textAlign:'left', padding:5}}>Expected delivery</Text>
            <View style={{marginTop:20}}>
            <Text style={{fontSize:14, fontWeight:400, color: theme.colors.black, width:170, textAlign:'left', padding:5}}>Payment method</Text>
            <Text style={{fontSize:14, fontWeight:400, color: theme.colors.black, width:170, textAlign:'left', padding:5}}>Payment status</Text>
            </View>
          </View>
          <View style={{flexDirection:'column', alignItems:'center'}}>
            <Text style={{fontSize:13, fontWeight:400, color: theme.colors.tertiary, width:170, textAlign:'right', padding:5}}>SB-2456899659</Text>
            <Text style={{fontSize:13, fontWeight:400, color: theme.colors.tertiary, width:170, textAlign:'right', padding:5}}>04.05.2022 13:18</Text>
            <Text style={{fontSize:13, fontWeight:400, color: theme.colors.tertiary, width:170, textAlign:'right', padding:5}}>1-2 days</Text>
            <View style={{marginTop:20}}>
            <Text style={{fontSize:13, fontWeight:400, color: theme.colors.tertiary, width:170, textAlign:'right', padding:5}}>Transfer</Text>
            <Text style={{fontSize:13, fontWeight:500, color: '#45CF14', width:170, textAlign:'right', padding:5}}>Paid</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:'100%', paddingLeft:5, paddingRight:5, paddingTop:20}}>
        <Text style={{fontSize:14, fontWeight:400, color: theme.colors.black, textAlign:'left'}}>2 items</Text>
        <Pressable onPress={handleItems}>
        {showItems?<MaterialIcons name="keyboard-arrow-up" size={24} color="black" />:<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />}
        </Pressable>
        </View>
        {showItems?<View style={{flexDirection:'column'}}>
        <View style={{height:80, width:340, flexDirection:'row', alignItems:'center', justifyContent:'flex-start', padding:20 }}>
                <Image source={require('../../assets/BullDozer.png')} style={{width:45, height:30}}/>
                <View style={{flexDirection:'column', paddingLeft:10, justifyContent:'center'}}>
                <Text style={{fontSize:18, fontWeight:500,}} >BullDozer</Text>
                <Text style={{fontSize:18, fontWeight:600, color:theme.colors.secondary, lineHeight:22, paddingTop:3}}>₤425</Text>
                </View>
            </View>
        <View style={{height:80, width:340, flexDirection:'row', alignItems:'center', justifyContent:'flex-start', padding:20 }}>
                <Image source={require('../../assets/BullDozer.png')} style={{width:45, height:30}}/>
                <View style={{flexDirection:'column', paddingLeft:10, justifyContent:'center'}}>
                <Text style={{fontSize:18, fontWeight:500,}} >Excavator</Text>
                <Text style={{fontSize:18, fontWeight:600, color:theme.colors.secondary, lineHeight:22, paddingTop:3}}>₤500</Text>
                </View>
            </View>
        </View>:''}
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:10}}>
          <View style={{flexDirection:'column', alignItems:'center'}}>
            <Text style={{fontSize:14, fontWeight:400, color: theme.colors.black, width:170, textAlign:'left', padding:5}}>Item price</Text>
            <Text style={{fontSize:14, fontWeight:400, color: theme.colors.black, width:170, textAlign:'left', padding:5}}>Vat/Tax</Text>
            <View style={{marginTop:20}}>
            <Text style={{fontSize:14, fontWeight:600, color: theme.colors.black, width:170, textAlign:'left', padding:5}}>Payment status</Text>
            </View>
          </View>
          <View style={{flexDirection:'column', alignItems:'center'}}>
            <Text style={{fontSize:13, fontWeight:400, color: theme.colors.tertiary, width:170, textAlign:'right', padding:5}}>₤925</Text>
            <Text style={{fontSize:13, fontWeight:400, color: theme.colors.tertiary, width:170, textAlign:'right', padding:5}}>0.00</Text>
            <View style={{marginTop:20}}>
            <Text style={{fontSize:14, fontWeight:600, color: theme.colors.secondary, width:170, textAlign:'right', padding:5}}>₤925</Text>
            </View>
          </View>
        </View>
        </View>
        </View>
    )
}