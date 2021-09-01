import React from 'react';
import {View, StyleSheet} from "react-native";

import {useSelector} from "react-redux";

import {SCREENS} from "../constants";

import {CurrencyList} from "../components/CurrencyList";

export const MyCurrenciesScreen = ({route, navigation}) => {

    const {entities} = useSelector(state => state.currencies);

    const favoriteCurrencies = entities.filter(item => item.isFavorite);

    const openCurrencyScreen = (id) => {
        navigation.navigate(SCREENS.CURRENCY, {id});
    }

    return (
        <View style={styles.container}>
            <CurrencyList
                currencies={favoriteCurrencies}
                openCurrencyScreen={openCurrencyScreen}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    }
});