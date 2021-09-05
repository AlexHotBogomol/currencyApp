import React from 'react';
import {View, StyleSheet} from "react-native";

import {useSelector} from "react-redux";

import {CurrencyList} from "../components/CurrencyList";

export const MyCurrenciesScreen = (props) => {

    const {entities} = useSelector(state => state.currencies);

    const favoriteCurrencies = entities.filter(item => item.isFavorite);

    return (
        <View style={styles.container}>
            <CurrencyList
                currencies={favoriteCurrencies}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20
    }
});