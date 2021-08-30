import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AllCurrenciesScreen} from "./screens/AllCurrenciesScreen";
import {MyCurrenciesScreen} from "./screens/MyCurrenciesScreen";
import {CurrencyScreen} from "./screens/CurrencyScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="All Currencies" component={AllCurrenciesScreen}/>
                <Stack.Screen name="My Currencies" component={MyCurrenciesScreen} initialParams={{ itemId: 42 }}/>
                <Stack.Screen name="Currency" component={CurrencyScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
