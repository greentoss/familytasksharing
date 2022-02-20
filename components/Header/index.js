import React from 'react';
import {StyleSheet, View, Text} from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>
                Список Завдань:
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop : 20,
        height: 100,
        backgroundColor: 'lightblue'
    },
    text: {
        fontSize: 22,
        color: 'red',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
