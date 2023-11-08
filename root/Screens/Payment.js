import React, { useState } from "react";
import { Pressable } from "react-native";
import { View, Text, FlatList } from "react-native";
import SvgImport from "../Components/SvgImport";
import { useTheme } from "../Theme/ThemeContext";
import Received from "../Components/Received";
import Pending from "../Components/Pending";


export default function Payment(){

    
    const [data, setData] = useState([
        {
            _id:'0',
            profile:require('../../assets/DiannePic.png'),
            userName:'Alex Bravo',
            image:require('../../assets/BullDozer.png'),
            name:'BullDozer',
            date:'04-05-2023',
            price:'425',
        },
        {
            _id:'1',
            profile:require('../../assets/DiannePic.png'),
            userName:'Helen Wellim',
            image:require('../../assets/Excavator.png'),
            name:'Excalator',
            date:'04-05-2023',
            price:'500',
        },
    ]);

    const theme = useTheme();
    
    const [receive, setReceive] = useState(true);
    const [pending, setPending] = useState(false);

    const handleReceive=()=>{
        setReceive(true);
        setPending(false);
    }

    const handlePending=()=>{
        setReceive(false);
        setPending(true);
    }


    return(
        <View style={{flexDirection:'column', height:'100%', width:'100%', alignItems:'center'}}>
        <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:40, width:'100%', marginRight:120, height:40, justifyContent:'center'}}>
            <Pressable onPress={()=>{navigation.goBack()}}>
            <SvgImport svg={ChevronLeft} style={{marginTop:5}} />
            </Pressable>
            <Text style={{marginLeft:100, fontSize:20, fontWeight:600}}>Payments</Text>
        </View>
        <View style={{padding:10, width:'100%', alignItems:'center'}}>
            <View style={{flexDirection:'row', width:325, height:58, justifyContent:'space-between'}}>
            <Pressable onPress={handleReceive}>
            <Text style={{width:155, height:38, backgroundColor:receive?theme.colors.secondary:'#EEEEEE', textAlign:'center', padding:6, fontSize:16, fontWeight:500, borderRadius:6, color:receive?theme.colors.black:theme.colors.tertiary}}>Received</Text>
            </Pressable>
            <Pressable onPress={handlePending}>
            <Text style={{width:155, height:38, textAlign:'center', padding:6, fontSize:16, fontWeight:500, borderRadius:6, color:pending?theme.colors.black:theme.colors.tertiary, backgroundColor:pending?theme.colors.secondary:'#EEEEEE'}}>Pending</Text>
            </Pressable>
            </View>
        </View>
        {receive?<FlatList
        data={data}
        keyExtractor={(item)=> item._id}
        renderItem={({item})=>{
        return(
        <Received
        image={item.profile} 
        name={item.userName} 
        date={item.date} 
        price={item.price} 
        _id={item._id}
        />)}}/>:<FlatList
        data={data}
        keyExtractor={(item)=> item._id}
        renderItem={({item})=>{
        return(
        <Pending
        image={item.profile} 
        name={item.userName} 
        date={item.date} 
        price={item.price} 
        _id={item._id}
        />)}}/>}
        </View>
    )
}