/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import AppContainer from './navigation/index.js';

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
