import React from "react";
import {Platform} from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {COLORS, OS, SCREENS} from "../constants";

import {AllCurrenciesScreen} from "../screens/AllCurrenciesScreen";
import {MyCurrenciesScreen} from "../screens/MyCurrenciesScreen";

const Tab = createBottomTabNavigator();

export const MainNavigation = ({screenOptions}) => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => {
                return {
                    ...screenOptions,
                    tabBarItemStyle: {
                      backgroundColor: Platform.OS === OS.ANDROID ? COLORS.MAIN_COLOR : COLORS.LIGHT_COLOR,
                    },
                    tabBarActiveTintColor: Platform.OS === OS.ANDROID ? COLORS.LIGHT_COLOR : COLORS.MAIN_COLOR,
                    tabBarInactiveTintColor: COLORS.INFO_COLOR,
                    tabBarLabelStyle: {
                      fontSize: 13
                    },
                    tabBarIcon: ({ color }) => {
                        let iconName;

                        if (route.name === SCREENS.ALL_CURRENCIES) {
                            iconName = "currency-usd-circle-outline"
                        } else if (route.name === SCREENS.MY_CURRENCIES) {
                            iconName = "home-currency-usd"
                        }

                        return <MaterialCommunityIcons name={iconName} size={24} color={color} />;
                    }
                }
            }}

        >
            <Tab.Screen
                name={SCREENS.ALL_CURRENCIES}
                component={AllCurrenciesScreen}
            />
            <Tab.Screen
                name={SCREENS.MY_CURRENCIES}
                component={MyCurrenciesScreen}
            />
        </Tab.Navigator>
    )
}
