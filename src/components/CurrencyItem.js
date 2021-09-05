import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Button} from "react-native";

import {COLORS, ITEM_HEIGHT} from "../constants";

const compareIsFavorite = (prevProps, nextProps) => {
    return nextProps.currency.isFavorite === prevProps.currency.isFavorite;
}

export const CurrencyItem = React.memo(({ currency, onPress, onButtonPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content} onPress={onPress}>
                <Text style={styles.title}>{currency.title}</Text>
                <Text style={styles.value}>({currency.value})</Text>
            </TouchableOpacity>
            <Button title={currency.isFavorite ? "Remove" : "Add"} onPress={onButtonPress}/>
        </View>
    )
}, compareIsFavorite);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: ITEM_HEIGHT,
        paddingVertical: 0,
    },
    content: {
        flex: 1,
        height: "100%",
        justifyContent: "center",
    },
    title: {
        fontSize: 16
    },
    value: {
        fontSize: 12,
        color: COLORS.MAIN_COLOR
    }
})