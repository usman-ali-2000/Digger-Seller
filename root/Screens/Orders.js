import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import SvgImport from "../Components/SvgImport";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import { Image } from "react-native";
import Trash from "../../assets/Svgs/Trash";
import { FlatList } from "react-native";
import { useTheme } from "../Theme/ThemeContext";
import RequestList from "../Components/RequestList";
import ActiveList from "../Components/ActiveList";
import { Entypo } from '@expo/vector-icons';



export default function Orders({navigation}){

    

    const theme = useTheme();

    const [completed, setCompleted] = useState(false);
    const [request, setRequest] = useState(false);
    const [active, setActive] = useState(true);

    const handleComplete=()=>{
        setActive(false);
        setCompleted(true);
        setRequest(false);
    }

    const handleActive=()=>{
        setActive(true);
        setCompleted(false);
        setRequest(false);
    }

    const handleRequest=()=>{
        setActive(false);
        setCompleted(false);
        setRequest(true);
    }

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
            profile:require('../../assets/Max.png'),
            userName:'Helen Wellim',
            image:require('../../assets/Excavator.png'),
            name:'Excalator',
            date:'04-05-2023',
            price:'500',
        },
    ]);

    const handleDelete=(id)=>{
        setData((prevData) => prevData.filter((item) => item._id !== id));
    }

    
    const Complete =()=>{

        return(
            <FlatList
            data={data}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=>{
            return(
            <View style={{height:135, width:'100%', flexDirection:'column', alignItems:'center'}}>
            <View style={{height:60, width:340, flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:theme.colors.primary, borderTopRightRadius:8, borderTopLeftRadius:8}}>
                <Image source={item.image} style={{width:45, height:30}}/>
                <View style={{flexDirection:'column', width:160, marginRight:1}}>
                <Text style={{fontSize:18, fontWeight:500}} >{item.name}</Text>
                <Text style={{fontSize:12, fontWeight:400, color:theme.colors.tertiary}}>{item.date}</Text>
                </View>
                <Text style={{fontSize:18, fontWeight:600, color:theme.colors.secondary, lineHeight:22}}>₤{item.price}</Text>
                <Pressable onPress={()=>{handleDelete(item._id)}}>
                <Entypo name="dots-three-vertical" size={14.5} color={theme.colors.tertiary} />
                </Pressable>
            </View>
            <View style={{flexDirection:'row', height:50, width:340, alignItems:'center', justifyContent:'space-between', padding:10, backgroundColor:theme.colors.primary, marginTop:2, borderBottomRightRadius:8, borderBottomLeftRadius:8}}>
                <View style={{flexDirection:'row', alignItems:'center', width:115, justifyContent:'space-between'}}>
                    <Image source={item.profile} style={{width:30, height:30, borderRadius:30}}/>
                    <Text style={{color:theme.colors.tertiary, textAlign:'left', width:120, fontSize:14, fontWeight:500, paddingLeft:10}}>{item.userName}</Text>
                </View>
                <Text style={{width:96, height:24, color:theme.colors.primary, backgroundColor:'#45CF14', textAlign:'center', padding:2, fontSize:12, fontWeight:500, borderRadius:5}}>Completed</Text>
            </View>
            </View>
            )}} 
            />
        )
    }

    return(
        <View style={{flexDirection:'column', height:'100%', alignItems:'center', width:'100%'}}>
        <View style={{flexDirection:'row', alignItems:'flex-start', marginTop:40, width:'100%', marginRight:80, height:40, justifyContent:'center'}}>
            <Pressable onPress={()=>{navigation.goBack()}}>
            <SvgImport svg={ChevronLeft} style={{marginTop:5}} />
            </Pressable>
            <Text style={{marginLeft:70, fontSize:20, fontWeight:600}}>Manage Orders</Text>
        </View>
        <View style={{padding:10, width:'100%',}}>
            <View style={{flexDirection:'row', width:325, height:58, justifyContent:'space-between'}}>
            <Pressable onPress={handleActive}>
            <Text style={{width:101, height:38, backgroundColor:active?theme.colors.secondary:'#EEEEEE', textAlign:'center', padding:6, fontSize:16, fontWeight:500, borderRadius:6, color:active?theme.colors.black:theme.colors.tertiary}}>Active</Text>
            </Pressable>
            <Pressable onPress={handleRequest}>
            <Text style={{width:101, height:38, textAlign:'center', padding:6, fontSize:16, fontWeight:500, borderRadius:6, color:request?theme.colors.black:theme.colors.tertiary, backgroundColor:request?theme.colors.secondary:'#EEEEEE'}}>Request</Text>
            </Pressable>
            <Pressable onPress={handleComplete}>
            <Text style={{width:101, height:38, textAlign:'center', padding:6, fontSize:16, fontWeight:500, borderRadius:6, color:completed?theme.colors.black:theme.colors.tertiary, backgroundColor:completed?theme.colors.secondary:'#EEEEEE'}}>Completed</Text>
            </Pressable>
            </View>
        </View>
        {completed?<Complete/>:request?
        <FlatList
        data={data}
        keyExtractor={(item)=> item._id}
        renderItem={({item})=>{
        return(
        <RequestList 
    image={item.image} 
    name={item.name} 
    date={item.date} 
    price={item.price} 
    />
    )
        }}/>:
        <FlatList
        data={data}
        keyExtractor={(item)=> item._id}
        renderItem={({item})=>{
        return(
        <ActiveList
        profile={item.profile} 
        userName={item.userName} 
        image={item.image} 
        name={item.name} 
        date={item.date} 
        price={item.price} 
        _id={item._id}
        />)}}/>}
        </View>
    )
}
