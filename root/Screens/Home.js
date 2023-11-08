import React, { useState } from "react";
import { Text, StyleSheet, View, Image, FlatList } from "react-native";
import { useTheme } from "../Theme/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";
import SvgImport from "../Components/SvgImport";
import Forward from "../../assets/Svgs/Forward";
import Chart from "../../assets/Svgs/Chart";
import ActiveList from "../Components/ActiveList";
import { ScrollView } from "react-native";
import RequestList from "../Components/RequestList";


export default function Home({navigation}){

    
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

    const theme = useTheme();

    return(
        <View style={styles.container}>
            <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:'row', marginTop:54, justifyContent:'space-between', width:'100%', paddingLeft:20, paddingRight:20, alignItems:'center', height:55}}>
                <View style={{flexDirection:'column'}}>
                    <Text style={{fontSize:13, fontWeight:'400', lineHeight:18.85, color:theme.colors.tertiary}}>WED, 22 MARCH</Text>
                    <Text style={{fontSize:24, fontWeight:'600', lineHeight:36, color:theme.colors.black}}>Hi, John smith</Text>
                </View>
                <View style={{backgroundColor:theme.colors.primary, elevation:5, height:38, width:38, justifyContent:'center', alignItems:'center' , borderRadius:6}}>
                <Image source={require('../../assets/Profile.png')} style={{marginTop:20, marginLeft:10, height:80, width:80}}/>
                </View>
            </View>
            <View style={{height:134, width:345, marginTop:20, alignSelf:'center'}}>
            <LinearGradient 
           colors={['#6462F8', '#2D1DC2']}
           start={{ x: 0, y: 0 }}
           end={{ x: 1, y: 0 }}
           style={{ flex: 1, borderRadius:8 }}
            >
        <View style={{flexDirection:'column', justifyContent:'center', paddingTop:20, paddingLeft:20}}>
        <Text style={{fontSize:22, fontWeight:600, lineHeight:26.25, color:theme.colors.primary}}>Available for rent</Text>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingTop:10}}>
            <View style={{flexDirection:'column', width:145, height:63, borderRadius:8, padding:10, backgroundColor:'rgba(255, 255, 255, 0.2)'}}>
                <Text style={{fontSize:16, fontWeight:500, lineHeight:19.09, color:theme.colors.primary}}>Total Digger</Text>
                <Text style={{fontSize:22, fontWeight:800, lineHeight:26.25, color:theme.colors.primary}}>15</Text>
            </View>
            <View style={{flexDirection:'column', width:145, height:63, borderRadius:8, padding:10, backgroundColor:'rgba(255, 255, 255, 0.2)', marginRight:20}}>
                <Text style={{fontSize:16, fontWeight:500, lineHeight:19.09, color:theme.colors.primary}}>Total Grab Lorry</Text>
                <Text style={{fontSize:22, fontWeight:800, lineHeight:26.25, color:theme.colors.primary}}>20</Text>
            </View>
        </View>
        </View>
            </LinearGradient>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', padding:10, width:'100%'}}>
                <View style={{backgroundColor:'white', elevation:5, borderRadius:5}}>
                <Text style={{height:44, width:166, backgroundColor:theme.colors.secondary, textAlign:'center', fontSize:16, fontWeight:600, color:theme.colors.primary, paddingTop:10, borderRadius:5}}>
                    Add Digger
                </Text>
                </View>
                <View style={{backgroundColor:'white', elevation:5, borderRadius:5}}>
                <Text style={{height:44, width:166, backgroundColor:theme.colors.secondary, textAlign:'center', fontSize:16, fontWeight:600, color:theme.colors.primary, paddingTop:10, borderRadius:5}}>
                    Add Grab Lorry
                </Text>
                </View>
            </View>
            <View style={{flexDirection:'column', width:'100%', padding:10}}>
                <Text style={{fontSize:20, fontWeight:'600', color:theme.colors.black}}>Earnings</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:10}}>
                    <Text style={{fontSize:13, fontWeight:'400', color:theme.colors.tertiary}}>Total balance</Text>
                    <Text style={{fontSize:16, fontWeight:'600', color:theme.colors.black}}>$5,892.00</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', width:345, backgroundColor:theme.colors.primary, padding:10, marginTop:10, alignSelf:'center'}}>
                <View style={{height:82}}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style={{fontSize:14, fontWeight:'400'}}>Earning in <Text style={{color:theme.colors.secondary}}>March</Text></Text>
                    <SvgImport svg={Forward} style={{marginTop:5}}/>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{marginTop:20, fontSize:16, fontWeight:'600'}}>$1,680.00</Text>
                    <Text style={{marginTop:20, fontSize:12, fontWeight:'400', color:theme.colors.tertiary}}> +$345</Text>
                    </View>
                </View>
                <SvgImport svg={Chart} style={{marginTop:20}}/>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingTop:10, paddingBottom:10}}>
                    <Text style={{fontSize:20, fontWeight:'600', color:theme.colors.black}}>Active Orders</Text>
                    <Text style={{fontSize:14, fontWeight:'400', color:theme.colors.black}}>View All</Text>
                </View>
            </View>
            <View style={{height:240, width:'100%', justifyContent:'center', alignItems:'center'}}>
        <ActiveList 
        profile={data[0].profile} 
        userName={data[0].userName} 
        image={data[0].image} 
        name={data[0].name} 
        date={data[0].date} 
        price={data[0].price} 
        _id={data[0]._id} 
        />
        <ActiveList 
        profile={data[1].profile} 
        userName={data[1].userName} 
        image={data[1].image} 
        name={data[1].name} 
        date={data[1].date} 
        price={data[1].price} 
        _id={data[1]._id}
        />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingTop:20, padding:10, paddingBottom:20}}>
                    <Text style={{fontSize:20, fontWeight:'600', color:theme.colors.black}}>Older Request</Text>
                    <Text style={{fontSize:14, fontWeight:'400', color:theme.colors.black}}>View All</Text>
                </View>
        <View style={{height:240, width:'100%', justifyContent:'center', alignItems:'center'}}>
    <RequestList 
    image={data[0].image} 
    name={data[0].name} 
    date={data[0].date} 
    price={data[0].price} 
    />
    <RequestList 
    image={data[1].image} 
    name={data[1].name} 
    date={data[1].date} 
    price={data[1].price} 
    />
        </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        height:'100%',
        alignItems:'center',
    },
    text:{
        width:208,
        fontWeight:'600',
        fontSize:28,
        height:42,
    }
}
);