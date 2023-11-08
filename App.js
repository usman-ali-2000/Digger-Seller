
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from 'expo-status-bar';

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "./root/Theme/ThemeContext";
import Login from "./root/Screens/Login";
import ForgotPassword from "./root/Screens/ForgotPassword";
import SignUp from "./root/Screens/SignUp";
import Shop from "./root/Screens/Shop";
import Detail from "./root/Screens/Details";
import PaymentDetail from "./root/Screens/PaymentDetail";
import Booked from "./root/Screens/Booked";
import ChatList from "./root/Screens/ChatList";
import Chat from "./root/Screens/Chat";
import Profile from "./root/Screens/Profile";
import EditProfile from "./root/Screens/EditProfile";
import DeactivateAcc from "./root/Screens/DeactivateAcc";
import About from "./root/Screens/About";
import Orders from "./root/Screens/Orders";

SplashScreen.preventAutoHideAsync();
import { StyleSheet, Text, View } from 'react-native';
import NavBar from "./root/Components/NavBar";
import BillingHistory from "./root/Screens/BillingHistory";
import Billing from "./root/Screens/Billing";
import AddItem from "./root/Screens/AddItem";
const Stack = createStackNavigator();

// // initializing Stack


const MyStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
      <Stack.Screen options={{ headerShown: false }} name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />
      <Stack.Screen options={{ headerShown: false }} name="Home" component={NavBar} />
      <Stack.Screen options={{ headerShown: false }} name="Shop" component={Shop} />
      <Stack.Screen options={{ headerShown: false }} name="Details" component={Detail} />
      <Stack.Screen options={{ headerShown: false }} name="PaymentDetail" component={PaymentDetail} />
      <Stack.Screen options={{ headerShown: false }} name="Booked" component={Booked} />
      <Stack.Screen options={{ headerShown: false }} name="ChatList" component={ChatList} />
      <Stack.Screen options={{ headerShown: false }} name="Chat" component={Chat} />
      <Stack.Screen options={{ headerShown: false }} name="Profile" component={Profile} />
      <Stack.Screen options={{ headerShown: false }} name="EditProfile" component={EditProfile} />
      <Stack.Screen options={{ headerShown: false }} name="DeactivateAcc" component={DeactivateAcc} />
      <Stack.Screen options={{ headerShown: false }} name="About" component={About} />
      <Stack.Screen options={{ headerShown: false }} name="Orders" component={Orders} />
      <Stack.Screen options={{ headerShown: false }} name="BillingHistory" component={BillingHistory} />
      <Stack.Screen options={{ headerShown: false }} name="Billing" component={Billing} />
      <Stack.Screen options={{ headerShown: false }} name="AddItem" component={AddItem} />
    </Stack.Navigator>
  );
};


export default function App() {
  
    //loading fonts
    const [fontsLoaded] = useFonts({
      MavenPro: require("./assets/fonts/MavenPro-VariableFont_wght.ttf"),
    });
  
    const onLayoutRootView = React.useCallback(async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }, [fontsLoaded]);
  
    if (!fontsLoaded) {
      return null;
    }
    return (
      <ThemeProvider>
      <View onLayout={onLayoutRootView} style={styles.container}>
        <StatusBar style="auto" />
        <NavigationContainer>
         <MyStackNavigator />
        </NavigationContainer>
      </View>
    </ThemeProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",

  },

});
