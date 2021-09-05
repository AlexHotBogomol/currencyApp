import React from 'react';
import {View, StyleSheet, Text} from "react-native";

import {useSelector} from "react-redux";

export const CurrencyScreen = ({ route }) => {
    const { params: {id}} = route;

    const currency = useSelector(state => state.currencies.entities).find(item => item.id === id);

    return (
        <View style={styles.container}>
            <Text>{currency.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})