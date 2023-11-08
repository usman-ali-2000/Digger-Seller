import React, { useState } from "react";
import { Pressable, Text, TextInput, View, Image, ImageBackground } from "react-native";
import ExtraRequirement from "../../assets/Svgs/ExtraRequirement";
import SvgImport from "../Components/SvgImport";
import * as ImagePicker from "expo-image-picker";
import { Entypo } from '@expo/vector-icons';
import theme from "../Theme/GlobalTheme";

export default function Requirements(){

    const [image, setImage] = useState()
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  
    const pickImage = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowEditing: true,
            aspect: [4,3],
            base64:false,
            quality:1
        });
    if(!result.canceled){
        setImage(result.assets[0].uri);
        
      }
    
    }


    if(hasGalleryPermission === false){
        return(<Text>no access to gallery...</Text>);
    }


    return(
        <View style={{flexDirection:'column', padding:10}}>
        <View style={{flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <Text style={{fontSize:20, fontWeight:600, top:10}}>
                Enter requirement/image
            </Text>
            </View>
            <Text style={{fontSize:16, fontWeight:500, top:20}}>Enter Requirement</Text>
            <View style={{borderWidth:1.5, top:30, borderColor:'rgba(142, 142, 142, 0.2)'}}>
            <TextInput
            placeholder="Enter your text here"
            textAlignVertical="top"
            multiline={true}
            style={{height:146, width:345, padding:5, textAlign:'justify'}}
            />
            <Text style={{textAlign:'right', color:'grey', padding:8, fontSize:12, fontWeight:400}}>143/250</Text>
            </View>
            <View style={{flexDirection:'column', alignItems:'center',width:345, height:173, borderWidth:1.5, top:40, borderStyle:'dashed', borderColor:'#F8AB16', right:2}}>
                {image?<ImageBackground source={{uri:image}} style={{width:340, height:170, borderRadius:6}}><Pressable onPress={pickImage}><View style={{backgroundColor:theme.colors.black, width:35, alignSelf:'flex-end', height:35, alignItems:'center', justifyContent:'center', marginTop:10, marginRight:10, borderRadius:2}}><Entypo name="image" size={30} color="white"/></View></Pressable></ImageBackground>:<View style={{alignItems:'center'}}>
               <Pressable onPress={pickImage}>
                <SvgImport svg={ExtraRequirement} style={{marginTop:20}}/>
                </Pressable>
                <Text style={{fontSize:17, fontWeight:600, marginTop:20}}>Insert image or video from gallery</Text>
                <Text style={{fontSize:14, fontWeight:400, marginTop:10}}>(Allowed only JPG, PNG or MP4)</Text>
                </View>}
            </View>
        </View>
    )
}