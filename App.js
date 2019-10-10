import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import allReducers from './reducers';

const enhancer = compose(applyMiddleware(thunk, logger));

const store = createStore(allReducers, enhancer);

//TODO ROUTER needs a dom...need to figure this out with React Native

export default function App() {
  return (
    
    <Provider store={store}>
        <View style={styles.container}>
          <Text>Hello There Again Friend</Text>
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
