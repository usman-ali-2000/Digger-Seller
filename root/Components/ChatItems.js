import React from "react";
import { Image, ImageBackground, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import SvgImport from "./SvgImport";
import DoubleTick from "../../assets/Svgs/DoubleTick";
import SingleTick from "../../assets/Svgs/SingleTick";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../Theme/ThemeContext";


export default function ChatItems(){

    const theme =  useTheme();
    const navigation = useNavigation();
    
const ChatData = [{
    _id:"0",
    name:"Dianne",
    message:"Ok, i'll call you when i get there. and bring more snacks",
    time:'1:15 PM',
    image: require('../../assets/DiannePic.png'),
    online: true,
    new:false,
    read:true,
},{
    _id:"1",
    name:"Kyle",
    message:"Ok, i'll call you when i get there. and bring more snacks",
    time:'1:15 PM',
    image: require('../../assets/Kyle.png'),
    online: false,
    new:true,
    read:true,
},{
    _id:"2",
    name:"Ronald",
    message:"Ok, i'll call you when i get there. and bring more snacks",
    time:'1:15 PM',
    image: require('../../assets/Ronald.png'),
    online: true,
    new:false,
    read:false,
},{
    _id:"3",
    name:"Philip",
    message:"Ok, i'll call you when i get there. and bring more snacks",
    time:'1:15 PM',
    image: require('../../assets/Philip.png'),
    online: true,
    new:false,
    read:true,
},{
    _id:"4",
    name:"Max",
    message:"Ok, i'll call you when i get there. and bring more snacks",
    time:'1:15 PM',
    image: require('../../assets/Max.png'),
    online: false,
    new:true,
    read:true,
},{
    _id:"5",
    name:"Courtney",
    message:"Ok, i'll call you when i get there. and bring more snacks",
    time:'1:15 PM',
    image: require('../../assets/Courtney.png'),
    online: true,
    new:false,
    read:false,
}]

    return(
        <FlatList
        data={ChatData}
        keyExtractor={(item)=> item._id}
        renderItem={({item})=>{
        return(
            <TouchableOpacity onPress={()=>{navigation.navigate('Chat')}}> 
        <View style={{flexDirection:'row', alignItems:'center',padding:10}}>
            <ImageBackground source={item.image} style={{height:50, width:51}}
            imageStyle={{borderRadius:50}}
            >
                {item.online?<View style={{height:13, width:13, backgroundColor:theme.colors.secondary, borderRadius:10, borderWidth:2, borderColor:theme.colors.primary, top:35, left:40}}/>:''}
            </ImageBackground>
            <View style={{flexDirection:'column', padding:5}}>
             <View style={{flexDirection:'row', justifyContent:'space-between'}}>   
            <Text style={{fontSize:16, fontWeight:500, }}>{item.name}</Text>
            <View style={{flexDirection:'row', width:69, alignItems:'center', justifyContent:'space-between'}}>
                {item.read?<SvgImport svg={DoubleTick}/>:<SvgImport svg={SingleTick}/>}
            <Text style={{fontSize:13, fontWeight:400, color:theme.colors.tertiary}}>{item.time}</Text>
            </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', marginRight:10}}>
            <Text style={{width:276, lineHeight:19.5, color:theme.colors.tertiary}}>{item.message}</Text>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            {item.new?<Text style={{height:20.38, width:20.38, backgroundColor:'#F9AC16', borderRadius:10, color:theme.colors.primary, textAlign:'center'}}>1</Text>:''}
            </View>
            </View>
            </View>
        </View>
        </TouchableOpacity>
        )}}/>
    )
}

