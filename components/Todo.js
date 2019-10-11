import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

const Todo = ( { todo, toggle } ) => {

  const handlePress = () => {
    toggle(todo);
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.todoItem}>
       <Text style={todo.completed ? { color: '#AAAAAA'} : { color: '#313131' }}>
         {todo.text}
       </Text>
    </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
  todoItem: {
    width: '100%',
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15
  }
})

export default Todo; 
