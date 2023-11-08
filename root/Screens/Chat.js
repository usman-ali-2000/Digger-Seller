import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import SvgImport from "../Components/SvgImport";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import { Image } from "react-native";
import ChatCircle from "../../assets/Svgs/ChatCircle";
import Phone from "../../assets/Svgs/Phone";
import Pin from "../../assets/Svgs/Pin";
import Smily from "../../assets/Svgs/Smily";
import Record from "../../assets/Svgs/Record";
import { TextInput } from "react-native";
import ChatTick from "../../assets/Svgs/ChatTick";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useTheme } from "../Theme/ThemeContext";
import { TouchableOpacity } from "react-native";



export default function Chat({navigation}){

const [message, setMessage] = useState('');
const [text, setText] = useState('');

const chats=[
    {
        _id:'0',
        user:'user1',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },
    {
        _id:'1',
        user:'user2',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },{
        _id:'2',
        user:'user1',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },
    {
        _id:'3',
        user:'user2',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },{
        _id:'4',
        user:'user1',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },
    {
        _id:'5',
        user:'user2',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },
    {
        _id:'6',
        user:'user2',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },{
        _id:'7',
        user:'user1',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },
    {
        _id:'8',
        user:'user2',
        msg:'Lorem ipsum is simply dummy text ',
        time: '1:10 PM',
        voice:false,
    },
    {
        _id:'9',
        user:'user1',
        msg:'',
        time: '1:10 PM',
        image:require('../../assets/SliderImage.png'),
        img:true,
        voice:true,
    },
    {   _id:'10',
        user:'user2',
        msg: message,
        time: '1:10 PM',
        voice:false,
    },
]

const handleText=(data)=>{
    setText(data);
}
const handleMessage=()=>{
    setMessage(text);
    setText('');
}

    const theme = useTheme();

    const [playText, setPlayText] = useState("pause");

    const playPause=()=>{
        if(playText==="play"){
            setPlayText("pause")
        }else{
            setPlayText("play")
        }
    }

    return(
        <View style={{height:'100%', alignItems:'center', flexDirection:'column', width:'100%', backgroundColor: theme.colors.primary}}>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', height:40, marginTop:40}}>
            <Pressable onPress={()=>{navigation.goBack()}}>
            <SvgImport svg={ChevronLeft} style={{marginLeft:5}}/>
            </Pressable>
            <View style={{height:40, width:40, borderRadius:30, alignItems:'center', justifyContent:'center', marginLeft:10}}><Image source={require('../../assets/Kyle.png')} style={{height:40, width:40, marginBottom:1}}/></View>
            <View style={{flexDirection:'column', padding:10}}>
                <Text style={{fontSize:18, fontWeight:600, width:150, lineHeight:21}}>Alexander</Text>
                <Text style={{fontSize:12, fontWeight:500, color:theme.colors.secondary}}>Online</Text>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', width:70, marginRight:20}}>
            <SvgImport svg={ChatCircle}/>
            <SvgImport svg={Phone}/>
            </View>
            </View>
            <FlatList
            data={chats}
            showsVerticalScrollIndicator={false}
            inverted={false}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=>{
            return(
            <View style={{ flexDirection:'column', marginTop:10, paddingBottom:10}}>
                {item.user === 'user1'?<View style={{flexDirection:'row', marginRight:60}}>
                <Image source={require('../../assets/Max.png')} style={{height:30, width:30, borderRadius:30, marginRight:20, marginTop:10}}/>
                <View style={{flexDirection:'column', width:233, alignSelf:'flex-start', borderRadius:8, padding:5}}>
                <Text style={{fontSize:15, fontWeight:400, width:205, textAlign:'left', color:theme.colors.black}}>{chats[0].msg}</Text>
                <Text style={{fontSize:10, fontWeight:400, color:theme.colors.black, alignSelf:'flex-end'}}>{chats[0].time}</Text>
                {item.img?<Image source={item.image} style={{width:201, height:134, borderRadius:8}}/>:''}
                {item.voice?<View style={{width:268, height:49, flexDirection:'row', alignItems:'center', justifyContent:'center', borderRadius:8}}>
                 <Pressable onPress={playPause}>
                <MaterialCommunityIcons name={playText} size={22} color={theme.colors.primary} style={{backgroundColor:theme.colors.secondary, borderRadius:30}} />
                </Pressable>
                <View style={{flexDirection:'row', alignItems:'center', padding:10}}>
                <View style={{width:10, backgroundColor:theme.colors.secondary, height:10, borderRadius:10}}/>
                <View style={{width:168, backgroundColor:theme.colors.secondary, height:3, opacity:0.5}}/>
                </View>
                <View style={{flexDirection:'column', marginTop:12}}>
                <Text style={{fontSize:10, fontWeight:400}}>0:52</Text>
                <View >
                <Text style={{fontSize:10, fontWeight:400, color:theme.colors.tertiary, width:40, textAlign:'left'}}>{item.time}</Text>
                </View>
                </View>
                </View>:''}
            </View>
            </View>:''}
            {item.user === 'user2'?<View style={{flexDirection:'column', width:233, alignSelf:'flex-start', borderRadius:8, backgroundColor:item.msg !==''?theme.colors.secondary:theme.colors.primary, marginLeft:100, padding:5}}>
                {item.msg!==''?<Text style={{fontSize:15, fontWeight:400, width:205, textAlign:'left', color:theme.colors.primary}}>{chats[0].msg}</Text>:''}
                <View style={{flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
                <Text style={{fontSize:10, fontWeight:400, color:theme.colors.black, color:theme.colors.primary, marginRight:10}}>{chats[0].time}</Text>
                <SvgImport svg={ChatTick}/>
                </View>
                {item.img?<Image source={item.image} style={{width:201, height:134, borderRadius:8}}/>:''}
                {item.voice?<View style={{width:268, height:49, flexDirection:'row', alignItems:'center', justifyContent:'center', backgroundColor:'#EFEFF0', borderRadius:8, right:30, top:10}}>
                 <Pressable onPress={playPause}>
                <MaterialCommunityIcons name={playText} size={22} color={theme.colors.primary} style={{backgroundColor:'#F9AC16', borderRadius:30}} />
                </Pressable>
                <View style={{flexDirection:'row', alignItems:'center', padding:10}}>
                <View style={{width:10, backgroundColor:theme.colors.secondary, height:10, borderRadius:10}}/>
                <View style={{width:168, height:3, backgroundColor:theme.colors.secondary, opacity:0.5}}/>
                </View>
                <View style={{flexDirection:'column', marginTop:12}}>
                <Text style={{fontSize:10, fontWeight:400, color:theme.colors.black}}>0:52</Text>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontSize:10, fontWeight:400, color:theme.colors.tertiary, width:40, textAlign:'left'}}>{item.time}</Text>
                <SvgImport svg={ChatTick}/>
                </View>
                </View>
                </View>:''}
            </View>:''}
            </View>
            )}}
            />
            <View style={{height:40, width:345, flexDirection:'row', alignItems:'center'}}>
            <SvgImport svg={Pin} style={{marginRight:8}}/>
            <TextInput
            value={text}
            onChangeText={handleText}
            placeholder="Message"
            style={[{ width:230}, theme.textStyles.inputText]}/> 
            <SvgImport svg={Smily}/>
            {text ===''?<SvgImport svg={Record} style={{marginLeft:25}}/>:<TouchableOpacity onPress={handleMessage}><View style={{backgroundColor:theme.colors.secondary, width:40, height:40, alignItems:'center', justifyContent:'center', borderRadius:6, marginLeft:25}}><Feather name="send" size={24} color="white" /></View></TouchableOpacity>}
            </View>
        <View style={{width:120, height:5, backgroundColor: theme.colors.black, top:10, borderRadius:15}}/>
        </View>
    )
}