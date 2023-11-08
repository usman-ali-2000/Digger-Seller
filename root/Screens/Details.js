import React, { useRef, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import Message from "../../assets/Svgs/Message";
import Call from "../../assets/Svgs/Call";
import SvgImport from '../Components/SvgImport';
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import { ScrollView } from "react-native";
import Button2 from "../Components/Button2";
import Right from "../../assets/Svgs/Right";
import Left from "../../assets/Svgs/Left";
import RBSheet from "react-native-raw-bottom-sheet";
import CalendarPicker from "react-native-calendar-picker";
import TypeOfDigger from "../Components/TypeOfDigger";
import Requirements from "../Components/Requirements";
import { useTheme } from "../Theme/ThemeContext";

const Images = [

require('../../assets/SliderImage.png'),
require('../../assets/SliderImage.png'),
require('../../assets/SliderImage.png'),
require('../../assets/SliderImage.png'),

]

export default function Detail({navigation}){

  const theme =  useTheme();

  const BottomSheetRef = useRef(null);
  const BottomSheetRef1 = useRef(null);
  const BottomSheetRef2 = useRef(null);


  const moveToPayment= async()=>{
   await BottomSheetRef.current.close();
   await BottomSheetRef1.current.close();
   await BottomSheetRef2.current.close();
   await navigation.navigate('PaymentDetail');
  }

    return(
        <View style={{flexDirection:'column', height:'100%', width:'100%'}}>
            <View style={{height:300}}>
            <SliderBox
            images={Images}
            sliderBoxHeight={300}
            resizeMode={'cover'}
            dotColor={theme.colors.secondary}
            inactiveDotColor={theme.colors.primary}
            imageLoadingColor={theme.colors.tertiary}
            dotStyle={{height:8, width:8}}
            /> 
                <Pressable onPress={()=>{navigation.goBack()}}>
            <View style={{bottom:250, left:15, height:40, width:40, opacity: 0.3, backgroundColor: theme.colors.primary, justifyContent:'center', alignItems:'center', borderRadius:9}}>
                <SvgImport svg={ChevronLeft}/>
            </View>
            </Pressable>
            </View>
            <ScrollView style={{flexDirection:'column', width:'100%'}}  showsVerticalScrollIndicator={false}>
                <View style={{padding:10}}>
                <Text style={{fontWeight:600, fontSize:20}}>Long Reach Excavators</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:10}}>
                    <Text style={{fontSize:26, fontWeight:600}}>₤150/<Text style={{fontSize:18, fontWeight:500}}>per day</Text></Text>
                    <SvgImport svg={Message} style={{left:50}}/>
                    <SvgImport svg={Call}/>
                    </View>
                    <Text style={{fontSize:16, fontWeight:600}}>Description</Text>
                <Text style={{fontSize:16, fontWeight:400, lineHeight:27.5, color:theme.colors.tertiary, textAlign:'left'}}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                </Text>
                <View style={{paddingTop:10}}>
                <Text style={{fontSize:16, fontWeight:400, lineHeight:27.5}}><Text style={{fontSize:16, fontWeight:400, lineHeight:27.5, color:theme.colors.tertiary, textAlign:'left'}}>Modal:</Text> Kubota U17-3</Text>
                <Text style={{fontSize:16, fontWeight:400, lineHeight:27.5}}><Text style={{fontSize:16, fontWeight:400, lineHeight:27.5, color:theme.colors.tertiary, textAlign:'left'}}>Output:</Text> 17.0 hp / 2300 rpm</Text>
                <Text style={{fontSize:16, fontWeight:400, lineHeight:27.5}}><Text style={{fontSize:16, fontWeight:400, lineHeight:27.5, color:theme.colors.tertiary, textAlign:'left'}}>Displacement:</Text> 898 CC</Text>
                <Text style={{fontSize:16, fontWeight:400, lineHeight:27.5}}><Text style={{fontSize:16, fontWeight:400, lineHeight:27.5, color:theme.colors.tertiary, textAlign:'left'}}>Max. Breakout Force(Bucker):</Text> 1550 kgf</Text>
                </View>
                <View style={{paddingTop:20}}>
                <Pressable onPress={()=>BottomSheetRef.current.open()}>
                <Button2 text={'Book Now'}/>
                </Pressable>
                </View>
                </View>
                </ScrollView>
            <View>
                </View>
        <RBSheet
        ref={BottomSheetRef}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          draggableIcon: {
            backgroundColor: "#000",
            width:120,
          },
          container:{
            height:520,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }
        }}
        closeOnDragDown={true}
        >
        <View style={{ backgroundColor: theme.colors.primary, height: 502, width:'100%', top:10, flexDirection:'colum', }}>
        <View style={{alignItems:'center'}}>
        </View>
        <View style={{flexDirection:'column', alignItems:'center', paddingTop:10}}>
        <Text style={{fontSize:20, fontWeight:600}}>Pick a date</Text>
        <Text style={{fontSize:14, fontWeight:400, width:276, textAlign:'center', lineHeight:20.3, color:theme.colors.tertiary}}>You can book digger one day or more than one day also.</Text>
        </View>
        <CalendarPicker
         nextTitle={
            <View style={{width:32.49, height:32.49, borderWidth:1, padding:9, borderRadius:10, borderColor:theme.colors.tertiary}}>
            <SvgImport svg={Right}/>
            </View>
          }           
           previousTitle={ <View style={{width:32.49, height:32.49, borderWidth:1, padding:9, borderRadius:10, borderColor:'#7A7A7A'}}>
            <SvgImport svg={Left}/>
            </View>
        }
        allowRangeSelection={true}
        selectedDayTextColor={theme.colors.primary}
        selectedRangeStartStyle={{
          backgroundColor:theme.colors.secondary,
          borderTopLeftRadius:6,
          borderBottomLeftRadius:6,
          textColor:theme.colors.primary
        }}
        selectedRangeStyle={{
          backgroundColor:'#F9AC1680',
          textColor:'white'
        }}
        selectedRangeEndStyle={{
          backgroundColor:'#F9AC16',
          borderTopRightRadius:6,
          borderBottomRightRadius:6,
          textColor:'white'
        }}
        monthYearHeaderWrapperStyle={{
          width:200,
          flexDirection:'column',
        }}
        monthTitleStyle={{
          fontSize:19,
          fontWeight:500
        }}
        yearTitleStyle={{
          fontSize:12,
        }}
         />
         <Pressable onPress={()=>BottomSheetRef1.current.open()} style={{alignItems:'center', paddingBottom:12}}>
         <Button2 text={'Next'}/>
         </Pressable>
                  </View>
                  </RBSheet>
                  <RBSheet
        ref={BottomSheetRef1}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          draggableIcon: {
            backgroundColor: "#000",
            width:120,
          },
          container:{
            height:608,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }
        }}
        closeOnDragDown={true}
        >                   
        <TypeOfDigger/>
        <Pressable onPress={()=>BottomSheetRef2.current.open()} style={{paddingTop:60, alignItems:'center'}}>
        <Button2 text={'Next'}/>
        </Pressable>
          </RBSheet>
          <RBSheet
        ref={BottomSheetRef2}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          draggableIcon: {
            backgroundColor: "#000",
            width:120,
          },
          container:{
            height:576,
            borderTopRightRadius: 25,
            borderTopLeftRadius: 25,
          }
        }}
        closeOnDragDown={true}
        >    
        <Requirements/>
        <Pressable onPress={moveToPayment} style={{paddingTop:50, alignItems:'center'}}>
            <Button2 text={'Proceed to Checkout'}/>
            </Pressable>
        </RBSheet>
        </View>
    )
}