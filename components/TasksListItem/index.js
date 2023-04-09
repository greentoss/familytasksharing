import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Button} from "react-native";

export default function ListItem({elem, deleteTaskHandler}) {

    return (
        <TouchableOpacity>
            <Text style={styles.listText}>
                {elem.text}
            </Text>
            <Button
                style={styles.deleteButton}
                onPress={() => deleteTaskHandler(elem.key)}
                title='X'
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listText: {
        padding: 20,
        borderWidth: 1,
        backgroundColor: '#fafafa',
        fontSize: 20,
        marginBottom: 5,
    },
    deleteButton: {
        width: 40,
        marginBottom: 20
    }
})
