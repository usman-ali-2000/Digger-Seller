import React from "react";
import { View, Text } from "react-native";
import EditProfileItem from "../Components/EditProfileItem";
import SvgImport from "../Components/SvgImport";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";

export default function EditProfile({navigation}){

return(
<View style={{flexDirection:'column', alignItems:'center', height:'100%'}}>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:40, justifyContent:'space-between', width:345, padding:5}}>
                <Pressable onPress={()=>{navigation.goBack()}}>
                <SvgImport svg={ChevronLeft}/>
                </Pressable>
                <Text style={{fontSize:20, fontWeight:600}}>My Profile</Text>
                <Text style={{fontSize:16, fontWeight:500}}>Save</Text>
                </View>
                <ScrollView
                showsVerticalScrollIndicator={false}>
        <EditProfileItem/>
        </ScrollView>
    </View>
)
}