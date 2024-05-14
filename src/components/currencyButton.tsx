import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import type { PropsWithChildren } from 'react';

type CurrencyButtonProps = PropsWithChildren<Currency>

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
    return (
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}

export default CurrencyButton;

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center'
    },
    flag:{
        fontSize:28,
        color: 'white',
        marginBottom:4
    },
    country:{
        fontSize:12,
        color: '#2D3436'
    }
})