import React from "react";
import { View, Text, Pressable } from "react-native";
import SvgImport from "../Components/SvgImport";
import ChevronLeft from "../../assets/Svgs/ChevronLeft";
import LabeledInput from "../Components/LabeledInput";
import { TextInput } from "react-native";
import { useTheme } from "../Theme/ThemeContext";
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground } from "react-native";
import Bin from "../../assets/Svgs/Bin";
import { Feather } from '@expo/vector-icons';
import { ScrollView } from "react-native";
import Calendar1 from "../../assets/Svgs/Calendar";
import { useRef } from "react";
import { useState } from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import Right from "../../assets/Svgs/Right";
import Left from "../../assets/Svgs/Left";
import Button2 from "../Components/Button2";
import CalendarPicker from "react-native-calendar-picker";
import * as ImagePicker from "expo-image-picker";



export default function AddItem({navigation}){

    const [first, setFirst] = useState(require('../../assets/BullDozer1.png'));
    const [second, setSecond] = useState(require('../../assets/BullDozer1.png'));
    const [image, setImage] = useState()
    const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
 

    
  const BottomSheetRef = useRef(null);

  const [dob, setDob] = useState('');

    const theme = useTheme();


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
        setFirst({uri:image}) 
      }
    
    }
    
    if(hasGalleryPermission === false){
        return(<Text>no access to gallery...</Text>);
    }



    const handleDob=(data)=>{
        const selectedDate = new Date(data);
        const year = selectedDate.getFullYear();
        const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
        const date = selectedDate.getDate().toString().padStart(2, '0');
        const formattedDate = `${year}-${month}-${date}`;
        setDob(formattedDate);
        }
    

    return(
        <View style={{flexDirection:'column', height:'100%', width:'100%', alignItems:'center'}}>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:40, justifyContent:'space-between', width:345, padding:5}}>
                <Pressable onPress={()=>{navigation.goBack()}}>
                <SvgImport svg={ChevronLeft}/>
                </Pressable>
                <Text style={{fontSize:20, fontWeight:600}}>Add new item</Text>
                <Text style={{fontSize:16, fontWeight:500}}>Save</Text>
                </View>
                <ScrollView>
            <LabeledInput
            label="Product Title"
            placeHolder={"Enter product title"}
            secureTextEntry={false}
            keyboardType={"default"}
            style={{fontSize:15, fontWeight:'300', padding:10, borderRadius:6}}
            />
            <View style={{padding:10}}>
            <Text style={theme.textStyles.inputText}>Description</Text>
            <TextInput
            multiline={true}
              style={{
                fontSize:15,
                paddingVertical: 5,
                marginTop: 10,
                backgroundColor: "#fff",
                paddingHorizontal: 10,
                paddingVertical: 10,
                borderRadius: 5,
                height:113,
                textAlignVertical:'top',
              }}
              keyboardType="default"
              placeholder="In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. "
              placeholderTextColor={"#23232399"}
              secureTextEntry={false}
            />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                <Text style={{fontSize:16, fontWeight:500, color:theme.colors.black}}>Item Images</Text>
                <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                <Ionicons name="add" size={24} color="black" style={{paddingRight:10}} />
                <Text style={{fontSize:13, fontWeight:400, color:theme.colors.black}}>Image from URL</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',height:130, borderWidth:1, width:345, alignSelf:'center', borderStyle:'dashed', borderColor:theme.colors.tertiary, alignItems:'center', borderRadius:8}}>
                <ImageBackground source={first} style={{height:100, width:100, padding:10, alignItems:'flex-end', marginLeft:10}}>
                    <Pressable onPress={()=>{setFirst()}}>
                    <SvgImport svg={Bin}/>
                    </Pressable>
                </ImageBackground>
                <ImageBackground source={second} style={{height:100, width:100, marginLeft:10, alignItems:'flex-end'}}>
                <Pressable onPress={()=>{setSecond()}}>
                <SvgImport svg={Bin} style={{marginRight:10, marginTop:10}}/>
                </Pressable>
                </ImageBackground>
                 <Pressable onPress={pickImage} > 
                <View style={{height:70, width:90, borderWidth:1, borderStyle:'dashed', borderRadius:8, borderColor:theme.colors.tertiary, marginLeft:20, justifyContent:'center', alignItems:'center'}}>
                <Feather name="upload" size={14} color={theme.colors.tertiary} />
                <Text style={{fontSize:10, fontWeight:300, color:theme.colors.tertiary}}>Drag imager or Click to upload</Text>
                </View>
                </Pressable>
            </View>
            <LabeledInput
            label="Pricing"
            placeHolder={"Per day                                                                          $"}
            secureTextEntry={false}
            keyboardType={"default"}
            style={{fontSize:15, fontWeight:'300', padding:10, borderRadius:6}}
            />
            <LabeledInput
            label="Mobile Number"
            placeHolder={"Enter Mobile Number"}
            secureTextEntry={false}
            keyboardType={"phone-pad"}
            style={{fontSize:15, fontWeight:'300', padding:10, borderRadius:6}}
            />
            <Pressable onPress={()=>BottomSheetRef.current.open()}>
            <View style={{width:350, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            <LabeledInput
            value={dob}
            label="Date of birth"
            placeHolder={"Enter your date of birth"}
            secureTextEntry={false}
            keyboardType={"default"}
            style={{fontSize:15, fontWeight:'300', width:295, padding:10, borderRadius:6}}
            />
            <View style={{justifyContent:'center', alignItems:'center', marginTop:30, backgroundColor:theme.colors.primary, width:40, height:48, borderRadius:6}}> 
            <SvgImport svg={Calendar1}/>
            </View>
            </View>
            </Pressable>
                </ScrollView>
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
            height:500,
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
        <Text style={{fontSize:20, fontWeight:'600'}}>Date of Birth</Text>
        <Text style={{fontSize:14, fontWeight:'400', width:276, textAlign:'center', lineHeight:20.3, color:theme.colors.tertiary}}>Select Your Date of Birth</Text>
        </View>
        <CalendarPicker
        onDateChange={handleDob}
         nextTitle={
            <View style={{width:32.49, height:32.49, borderWidth:1, padding:9, borderRadius:10, borderColor:theme.colors.tertiary}}>
            <SvgImport svg={Right}/>
            </View>
          }           
           previousTitle={ <View style={{width:32.49, height:32.49, borderWidth:1, padding:9, borderRadius:10, borderColor:'#7A7A7A'}}>
            <SvgImport svg={Left}/>
            </View>
        }
        allowRangeSelection={false}
        selectedDayTextColor={theme.colors.primary}
        selectedDayStyle={{
            backgroundColor:theme.colors.secondary,
        }}
        monthYearHeaderWrapperStyle={{
          width:200,
          flexDirection:'column',
        }}
        monthTitleStyle={{
          fontSize:19,
          fontWeight:'500'
        }}
        yearTitleStyle={{
          fontSize:12,
        }}
         />
         <Pressable onPress={()=>BottomSheetRef.current.close()} style={{alignItems:'center', paddingBottom:12}}>
         <Button2 text={'Done'}/>
         </Pressable>
                  </View>
                  </RBSheet>
       
        </View>
    )
}