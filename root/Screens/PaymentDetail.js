import React from "react";
import { View, Text, Pressable, TextInput } from "react-native";
import SvgImport from "../Components/SvgImport";
import Card from "../../assets/Svgs/Card";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import MasterCardLogo from "../../assets/Svgs/MasterCardLogo";
import CardIcon from "../../assets/Svgs/CardIcon";
import Hint from "../../assets/Svgs/Hint";
import Button2 from "../Components/Button2";
import { useTheme } from "../Theme/ThemeContext";


export default function PaymentDetail({navigation}){

    const theme = useTheme();
    
    return(
        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:40, width:219, marginRight:120, height:40, justifyContent:'center'}}>
                <Pressable onPress={()=>{navigation.navigate('Details')}}>
                <SvgImport svg={ChevronLeft} style={{marginTop:5}} />
                </Pressable>
                <Text style={{marginLeft:100, fontSize:20, fontWeight:600}}>Payment</Text>
                            </View>
           <SvgImport svg={Card}/>
           <View style={{ width:350, height:345, padding:10, flexDirection:'column', justifyContent:'space-evenly', bottom:40}}>
           <View>
           <Text style={{fontSize:16, fontWeight:500, textAlign:'left', width:300}}>Card Number</Text> 
           <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:335, borderWidth:1.5, height:48, borderColor:'#8E8E8E33', marginTop:8}}>
            <TextInput
            style={{width:200, padding:10}}
            keyboardType="numeric"
            placeholder="7859 2568 7458 1259"/>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:70, padding:2}}>
            <SvgImport svg={MasterCardLogo}/>
            <SvgImport svg={CardIcon}/>
           </View>
           </View>
           </View>
           <View>
           <Text style={{fontSize:16, fontWeight:500, textAlign:'left', width:300}}>Card Holder Name</Text> 
           <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:335, borderWidth:1.5, height:48, borderColor:'#8E8E8E33', marginTop:8}}>
            <TextInput
            style={{width:200, padding:10}}
            placeholder="John Helen"
            />
           </View>
           </View>
           <View style={{flexDirection:'row', alignItems:'center'}}>
           <View style={{flexDirection:'column', width:165}}>
           <Text style={{fontSize:16, fontWeight:500, textAlign:'left', width:300}}>Expiry date</Text> 
           <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:165, borderWidth:1.5, height:48, borderColor:'#8E8E8E33', marginTop:8}}>
            <TextInput
            style={{width:165, padding:10}}
            placeholder="07/2025"
            />
           </View> 
           </View>
           <View style={{flexDirection:'column', left:8}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
           <Text style={{fontSize:16, fontWeight:500, textAlign:'left', width:100}}>CVV / CVC</Text>
           <SvgImport svg={Hint}/>
           </View>
           <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', width:165, borderWidth:1.5, height:48, borderColor:'#8E8E8E33', marginTop:8}}>
            <TextInput
            style={{width:200, padding:10}}
            placeholder="856"
            />
           </View> 
           </View>
           </View>
           </View>
           <Pressable onPress={()=>{navigation.navigate('Booked')}} style={{bottom:40}}>
           <Button2 text={"Preceed to Pay"}/>
           </Pressable>
        <View style={{width:120, height:5, backgroundColor:'black', borderRadius:15, bottom:10 }}/>
        </View>
    )
}