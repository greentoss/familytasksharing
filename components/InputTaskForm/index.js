import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from "react-native";

export default function InputForm({ addTaskHandler }) {
    const [inputValue, setInputValue] = useState('')

    const onChange = (text) => {
        setInputValue(text)
    }

    return (
        <View>
            <TextInput
                style={styles.FormInput}
                onChangeText = {onChange}
                placeholder = 'Добавити нову задачу'
            />
            <Button
                color='green'
                onPress={() => addTaskHandler(inputValue)}
                title='Добавити завдання'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    FormInput: {
        borderBottomWidth: 2,
        borderColor: '#000',
        marginVertical: 30,
    }
})
