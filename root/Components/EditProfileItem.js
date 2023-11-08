import React, { useEffect, useRef, useState } from "react";
import CalendarPicker from "react-native-calendar-picker";
import { View, Text, Pressable } from "react-native";
import Button2 from "../Components/Button2";
import LabeledInput from "./LabeledInput";
import SvgImport from "./SvgImport";
import Calendar from "../../assets/Svgs/Calendar";
import theme from "../Theme/GlobalTheme";
import RBSheet from "react-native-raw-bottom-sheet";
import Right from "../../assets/Svgs/Right";
import Left from "../../assets/Svgs/Left";


export default function EditProfileItem(){

    
  const BottomSheetRef = useRef(null);

  const [dob, setDob] = useState('');

  const handleDob=(data)=>{
    const selectedDate = new Date(data);
    const year = selectedDate.getFullYear();
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const date = selectedDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${date}`;
    setDob(formattedDate);
    }

  useEffect(()=>{
    console.log(dob);
  },[dob])

    return(
        <View style={{width:345, height:'100%', flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-start', marginTop:20}}>
            <LabeledInput
            label="First Name"
            placeHolder={"Enter First Name"}
            secureTextEntry={false}
            keyboardType={"default"}
            style={{fontSize:15, fontWeight:'300', width:345, padding:10, borderRadius:6}}
            />
            <LabeledInput
            label="Last Name"
            placeHolder={"Enter Last Name"}
            secureTextEntry={false}
            keyboardType={"default"}
            style={{fontSize:15, fontWeight:'300', width:345, padding:10, borderRadius:6}}
            />
            <LabeledInput
            label="User Name"
            placeHolder={"Enter User Name"}
            secureTextEntry={false}
            keyboardType={"default"}
            style={{fontSize:15, fontWeight:'300', width:345, padding:10, borderRadius:6}}
            />
            <LabeledInput
            label="Email"
            placeHolder={"Enter Email"}
            secureTextEntry={false}
            keyboardType={"email-address"}
            style={{fontSize:15, fontWeight:'300', width:345, padding:10, borderRadius:6}}
            />
            <LabeledInput
            label="Mobile Number"
            placeHolder={"Enter Mobile Number"}
            secureTextEntry={false}
            keyboardType={"phone-pad"}
            style={{fontSize:15, fontWeight:'300', width:345, padding:10, borderRadius:6}}
            />
            <Pressable onPress={()=>BottomSheetRef.current.open()}>
            <View style={{width:345, flexDirection:'row', alignItems:'center'}}>
            <LabeledInput
            value={dob}
            label="Date of birth"
            placeHolder={"Enter your date of birth"}
            secureTextEntry={false}
            keyboardType={"default"}
            style={{fontSize:15, fontWeight:'300', width:295, padding:10, borderRadius:6}}
            />
            <View style={{justifyContent:'center', alignItems:'center', marginTop:30, backgroundColor:theme.colors.primary, width:40, height:48, borderRadius:6}}> 
            <SvgImport svg={Calendar}/>
            </View>
            </View>
            </Pressable>
        <Pressable style={{marginTop:20, paddingBottom:20}}>
        <Button2 text={"Save Changes"}/>
        </Pressable>
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