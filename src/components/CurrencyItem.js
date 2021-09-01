import React from "react";
import {Text, StyleSheet, TouchableOpacity, Button} from "react-native";
import {COLORS} from "../constants";

export const CurrencyItem = ({ currency, onPress, onButtonPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.title}>{currency.title}</Text>
            <Button title={currency.isFavorite ? "Remove" : "Add"} onPress={onButtonPress}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.INFO_COLOR
    },
    title: {
        fontSize: 16
    }
})