import React, {useEffect} from 'react';
import {View, StyleSheet, Alert, Text} from "react-native";

import {useDispatch, useSelector} from "react-redux";
import {fetchCurrencies} from "../../store/currencies";

import {SCREENS} from "../constants";

import {CurrencyList} from "../components/CurrencyList";

export const AllCurrenciesScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const {entities : currencies, isLoading} = useSelector(state => state.currencies);

    const fetchAll = async () => {
        try {
            const response = await dispatch(fetchCurrencies()).unwrap()
            console.log(response);
        } catch (err) {
            Alert.alert("Произошла ошибка", err);
        }
    }

    useEffect(() => {
        fetchAll();
    }, []);

    const openCurrencyScreen = (id) => {
        navigation.navigate(SCREENS.CURRENCY, {id});
    }

    let content = <Text>Loading...</Text>;

    if (!isLoading && currencies.length) {
        content = <CurrencyList
            currencies={currencies}
            openCurrencyScreen={openCurrencyScreen}
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
        paddingVertical: 20
    }
});

