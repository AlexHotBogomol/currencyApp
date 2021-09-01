import React from "react";
import {FlatList, StyleSheet} from "react-native";

import {useDispatch} from "react-redux";
import {toggleCurrencyToFavorites} from "../../store/currencies";

import {CurrencyItem} from "./CurrencyItem";

export const CurrencyList = ({currencies, openCurrencyScreen}) => {
    const dispatch = useDispatch();

    const renderCurrencyItem = ({item}) => {
        return <CurrencyItem
            currency={item}
            onPress={() => openCurrencyScreen(item.id)}
            onButtonPress={() => dispatch(toggleCurrencyToFavorites(item.id))}
        />;
    };

    return (
        <FlatList
            style={styles.list}
            data={currencies}
            renderItem={renderCurrencyItem}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 30,
    }
});