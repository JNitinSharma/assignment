import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import SplashScreen from "../screens/Splash";
import Introduction from "../screens/Introduction";
import AddProfile from "../screens/AddPhoto";
import Success from "../screens/Success";
import React from "react";
interface StackType {
    name:string,
    component:any
}
const Screens = [
        {
            name:'Splash',
            component:SplashScreen
        },
        {
            name:'Introduction',
            component: Introduction
        },
        {
            name:'AddProfile',
            component:AddProfile
        },
        {
            name:'Success',
            component:Success
        }
    ]
const Routes = ()=>{
    const Stack = createNativeStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                {Screens.map((item:StackType) =>
                <Stack.Screen name={item.name} component={item.component} />)}
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routes