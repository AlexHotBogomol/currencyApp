import React, {useCallback} from "react";
import {FlatList, StyleSheet} from "react-native";
import {useNavigation} from '@react-navigation/native';

import {useDispatch} from "react-redux";
import {toggleCurrencyToFavorites} from "../../store/currencies";

import {SCREENS, ITEM_HEIGHT} from "../constants";

import {EmptyList} from "./ui/EmptyList";
import {CurrencyItem} from "./CurrencyItem";

export const CurrencyList = ({currencies}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const openCurrencyScreen = useCallback((id) => {
        navigation.navigate(SCREENS.CURRENCY, {id});
    }, []);

    const renderItem = useCallback(({item}) => {
        return <CurrencyItem
            currency={item}
            onPress={() => openCurrencyScreen(item.id)}
            onButtonPress={() => {
                dispatch(toggleCurrencyToFavorites(item.id))
            }}
        />
    }, [])

    const keyExtractor = useCallback(item => {
        return item.id.toString()
    });

    const getItemLayout = useCallback((data, index) => ({length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index}), []);

    return (
        <FlatList
            style={styles.list}
            data={currencies}
            initialNumToRender={10}
            maxToRenderPerBatch={14}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            getItemLayout={getItemLayout}
            ListEmptyComponent={EmptyList}
        />
    )
}

const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 30,
    }
});