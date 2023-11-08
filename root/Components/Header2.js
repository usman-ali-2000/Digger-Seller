import React, { useEffect } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import SvgImport from "./SvgImport";
import { Image } from "react-native";


export default function Header2(props){

//     useEffect(()=>{
//     console.log('image:', props.image);
// },[]);
    return(
        <View style={styles.container}>
                        
            {props.image? <Pressable onPress={props.click1}><View style={{backgroundColor:'white', borderRadius:8, elevation:5, height:38, width:38, marginTop:26, marginLeft:15, alignItems:'center', justifyContent:'center'}}>
            <Image source={props.image} style={{marginLeft:10, height:78, width:78, marginTop:20}}/>
            </View></Pressable>:<View style={{height:38, width:38, marginTop:26, marginLeft:15, alignItems:'center', justifyContent:'center'}}/>}
            <Text style={{marginTop:30, fontSize:22, fontWeight:'600', width:70, height:33}}>{props.text}</Text>
            <Pressable onPress={props.click2}>
            {props.image2?<View style={{backgroundColor:'white', borderRadius:10, justifyContent:'center', elevation:5, height:38, width:38, marginTop:26, alignItems:'center'}}>
            <SvgImport svg={props.image2}/>
        </View>:''}
        </Pressable>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20,
        height:71,
        width:345
    },
    img:{
        height:20,
        width:20,
        marginTop:20
    },
    img2:{
        height:200,
        width:200,
        marginTop:20,
        borderWidth:1
    },
})