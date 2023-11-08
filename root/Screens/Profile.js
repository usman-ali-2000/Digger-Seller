import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import ThreeDots from "../../assets/Svgs/ThreeDots";
import IconEdit from "../../assets/Svgs/IconEdit";
import Notebook from "../../assets/Svgs/Notebook";
import Shield from "../../assets/Svgs/Shield";
import File from "../../assets/Svgs/File";
import { ImageBackground } from "react-native";
import SvgImport from "../Components/SvgImport";
import ProfileItem from "../Components/ProfileItem";
import UserCircle from "../../assets/Svgs/UserCircle";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from '@expo/vector-icons';

export default function Profile({navigation}){

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
        <View style={{flexDirection:'column', height:'100%', alignItems:'center'}}>
            <View style={{flexDirection:'row', alignItems:'right', marginTop:40, justifyContent:'space-between', width:210, marginLeft:130}}>
                <Text style={{fontSize:20, fontWeight:600}}>My Profile</Text>
                <SvgImport svg={ThreeDots}/>
                </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{height:'90%', flexDirection:'column', alignItems:'center'}}>
            <ImageBackground source={image?{uri:image}:require('../../assets/img.png')} style={{ height:120, width:120, marginTop:40}} imageStyle={{borderRadius:70}}>
             <Pressable onPress={pickImage}>
             <SvgImport svg={IconEdit} style={{marginLeft:75,  marginTop:75}}/>
             </Pressable>
            </ImageBackground>
            <Text style={{fontSize:20, fontWeight:600, marginTop:15}}>Cora Smith</Text>
            <Text style={{fontSize:14, fontWeight:400, color:'#A7A7A7', marginBottom:40}}>corasmith@mail.com</Text>
            <Pressable onPress={()=>{navigation.navigate('EditProfile')}}>
            <ProfileItem image={UserCircle} text={"Edit Profile"}/>
            </Pressable>
            {/* <Pressable onPress={()=>{navigation.navigate('BillingHistory')}}>
            <ProfileItem image={Notebook} text={"Billing History"}/>
            </Pressable> */}
            <Pressable onPress={()=>{navigation.navigate('DeactivateAcc')}}>
            <ProfileItem image={Shield} text={"Activate or Deactivate"}/>
            </Pressable>
            <Pressable onPress={()=>{navigation.navigate('About')}}>
            <ProfileItem image={File} text={"About"}/>
            </Pressable>
            {/* <ProfileItem image={File} text={"FAQ"}/>
            <ProfileItem image={File} text={"Privacy"}/> */}
            <View style={{flexDirection:'row', justifyContent:'flex-start', width:'100%', padding:10, paddingLeft:15, backgroundColor:'#ECEDEE', height:50, marginVertical:10 }}>
            <MaterialIcons name="logout" size={24} color="grey" />
            <Text style={{fontSize:16, fontWeight:500, textAlign:'left', width:200, paddingLeft:35}}>Logout</Text>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}