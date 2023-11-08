import React from "react";
import { View, FlatList, Pressable } from "react-native";
import Header2 from "../Components/Header2";
import Slider from "../../assets/Svgs/Slider";
import data from "../Components/Data";
import FlatItems2 from "../Components/FlatItems2";
import { useTheme } from "../Theme/ThemeContext";




export default function Shop({navigation}){

    const theme = useTheme();

    return(
        <View style={{flexDirection:'column', height:'100%', alignItems:'center'}}>
            <Header2 image={false} text={'Shop'}/>
            <FlatList
            data={data}
            numColumns={2}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=>{
            return(
                <Pressable onPress={()=>{navigation.navigate('Details')}}>
            <View style={{padding:10}}> 
            <FlatItems2 image={item.image} text={item.text} star={Start} rate={item.rate} price={item.price}/>
            </View>
            </Pressable>
            );
            }}/>
            <View>
            </View>
        </View>
    )
}