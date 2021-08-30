import React from 'react';
import {View, Button, Text} from "react-native";

export const MyCurrenciesScreen = ({route, navigation}) => {
    const { itemId, otherParam } = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>MyCurrenciesScreen</Text>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Text>otherParam: {JSON.stringify(otherParam)}</Text>
            <Button
                title="Go to Details... again"
                onPress={() =>
                    navigation.push('My Currencies', {
                        itemId: Math.floor(Math.random() * 100),
                    })
                }
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('All Currencies')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />

            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}