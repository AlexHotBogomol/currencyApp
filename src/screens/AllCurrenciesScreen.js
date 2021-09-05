import React, {useEffect} from 'react';
import {View, StyleSheet, Alert, Text} from "react-native";

import {useDispatch, useSelector} from "react-redux";
import {fetchCurrencies} from "../../store/currencies";

import {CurrencyList} from "../components/CurrencyList";

export const AllCurrenciesScreen = (props) => {
    const dispatch = useDispatch();

    const {entities : currencies, isLoading} = useSelector(state => state.currencies);

    useEffect(() => {
        try {
            dispatch(fetchCurrencies());
        } catch (err) {
            Alert.alert("Произошла ошибка", err);
        }
    }, []);

    let content = <Text>Loading...</Text>;

    if (!isLoading && currencies.length) {
        content = <CurrencyList
            currencies={currencies}
        />;
    }

    return (
        <View style={styles.container}>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20
    }
});

