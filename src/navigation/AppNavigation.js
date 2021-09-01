import React from "react";
import {Platform} from "react-native";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import {COLORS, OS, SCREENS} from "../constants";

import {CurrencyScreen} from "../screens/CurrencyScreen";
import {MainNavigation} from "./MainNavigation";

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === OS.ANDROID ? COLORS.MAIN_COLOR : COLORS.LIGHT_COLOR
    },
    headerTintColor: Platform.OS === OS.ANDROID ? COLORS.LIGHT_COLOR : COLORS.MAIN_COLOR,
    headerTitleStyle: {
        fontWeight: 'bold',
    }
}

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={screenOptions}
            >
                <Stack.Screen
                    name={SCREENS.MAIN}
                    options={{
                        headerShown: false
                    }}
                >
                    {props => <MainNavigation {...props} screenOptions={screenOptions} />}
                </Stack.Screen>
                <Stack.Screen
                    name={SCREENS.CURRENCY}
                    component={CurrencyScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}