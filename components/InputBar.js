import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'; 

import { connect, useSelector } from 'react-redux';

import { addTodo } from '../actions';

const InputBar = ({ addTodo }) => {

    const todoList = useSelector(state => state.todoList.todos);
    // console.log(todoList);

    const [text, setText] = useState('');

    const handlePress = () => {
        if(text !== '') {
            addTodo(text);
            setText('');
        }
    } 

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                onChangeText={text => setText(text)}
                value={text}
            />
            <TouchableOpacity onPress={handlePress} style={styles.addButton}>
                <Text style={styles.addButtonText}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowOffset: { width: 0, height: 3 },
        shadowColor: '#171717',
        shadowOpacity: 0.1
    },
    input: {
        backgroundColor: '#F3F3F3',
        flex: 1,
        fontSize: 18,
        height: 35
    },
    addButton: {
        width: 100,
        backgroundColor: '#FFCE00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    addButtonText: {
        color: '#171717',
        fontSize: 18,
        fontWeight: '700'
    }
})

export default connect(null, { addTodo })(InputBar);