import React, { useEffect } from 'react';

import { toggleCompleted } from '../actions';
import { connect } from 'react-redux';
import { StyleSheet, FlatList, View, Text } from 'react-native';

import Todo from './Todo.js';

const TodoList = ({ todos, toggleCompleted }) => {


  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => <Todo toggle={toggleCompleted} todo={item} />}
      />
    </View>
  )
  // <Text style={styles.item}>{item.text}</Text>

}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const mapStateToProps = state => {
  return {
    todos: state.todoList.todos
  }
}

export default connect(mapStateToProps, { toggleCompleted })(TodoList);
