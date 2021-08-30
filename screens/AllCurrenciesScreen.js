import React from 'react';
import {View, Button, Text} from "react-native";

export const AllCurrenciesScreen = ({navigation}) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>AllCurrenciesScreen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('My Currencies', {
                    itemId: 86,
                    otherParam: 'anything you want here'
                })}
            />
        </View>
    )
}

