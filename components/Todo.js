import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';

const Todo = ( { todo, toggle, deleteTodo } ) => {

  const handlePress = () => {
    toggle(todo);
  }

  const handleDelete = () => {
    deleteTodo(todo);
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.todoItem}>
       <Text style={todo.completed ? { color: '#AAAAAA'} : { color: '#313131' }}>
         {todo.text}
       </Text>
       <Button
          title='remove'
          color={todo.completed ? 'rgba(200, 0, 0, 0.5)' : 'rgba(255, 0, 0, 1)'}
          onPress={handleDelete}
       />
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
