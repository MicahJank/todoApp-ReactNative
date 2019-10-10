import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import allReducers from './reducers';

import Header from './components/Header.js';
import InputBar from './components/InputBar.js';


const enhancer = compose(applyMiddleware(thunk, logger));

const store = createStore(allReducers, enhancer);

//TODO ROUTER needs a dom...need to figure this out with React Native

export default function App() {

  const statusbar = (Platform.OS === 'ios') ? <View style={styles.statusBar}></View> : <View></View>

  return (
    
    <Provider store={store}>
        <View style={styles.container}>
          {statusbar}
          <Header />
          <InputBar />
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  statusBar: {
    backgroundColor: '#FFCE00',
    height: 20
  },
});
