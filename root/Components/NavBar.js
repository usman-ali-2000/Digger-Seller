import React from "react";
import { View} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Orders from "../Screens/Orders";
import Profile from "../Screens/Profile";
import House from "../../assets/Svgs/House";
import House2 from "../../assets/Svgs/House2";
import Handbag from "../../assets/Svgs/Handbag";
import User from "../../assets/Svgs/User";
import SvgImport from "./SvgImport";
import Handbag2 from "../../assets/Svgs/Handbag2";
import User2 from "../../assets/Svgs/User2";
import PaymentIcon from "../../assets/Svgs/PaymentIcon";
import ChatList from "../Screens/ChatList";
import PaymentIcon2 from "../../assets/Svgs/PaymentIcon2";
import Payment from "../Screens/Payment";


const Tab = createBottomTabNavigator();

export default function NavBar(){


    return(
      <View style={{flex:1}}>
          <Tab.Navigator
          screenOptions={{
            tabBarLabel:'',
          }}
          >
            <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={{flexDirection:'column', marginTop:10}}>
                <View style={{ backgroundColor: focused?'#F9AC16':'white', width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
              <SvgImport svg={focused? House2: House}/>
              </View>
              ),
            }} name="Home" component={Home} />
            <Tab.Screen options={{ headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={{flexDirection:'column', marginTop:10}}>
                <View style={{ backgroundColor: focused?'#F9AC16':'white', width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
              <SvgImport svg={focused? Handbag2: Handbag}/>
              </View>
              ), }} name="Orders" component={Orders} />
            <Tab.Screen options={{ headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={{flexDirection:'column', marginTop:10}}>
                <View style={{ backgroundColor: focused?'#F9AC16':'white', width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
              <SvgImport svg={focused? PaymentIcon2: PaymentIcon}/>
              </View>
              ), }} name="Payment" component={Payment}/>
            <Tab.Screen options={{ headerShown: false,
              tabBarIcon: ({ focused }) => (
                <View style={{flexDirection:'column', marginTop:10}}>
                <View style={{ backgroundColor: focused?'#F9AC16':'white', width:28, height:5, justifyContent:'center', bottom:7, borderBottomLeftRadius:3, borderBottomRightRadius:3}}/>
              <SvgImport svg={focused? User2 : User}/>
              </View>
              ), }} name="Profile" component={Profile} />
          </Tab.Navigator>
          </View>
    )
}