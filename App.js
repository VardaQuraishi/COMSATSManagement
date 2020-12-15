/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Splash from './src/screens/Splash'
import GettingStarted from './src/screens/GettingStarted'
import Login from './src/screens/Login'

const App = () => {
  return (
    <Login />
    //<Splash />
    //<GettingStarted />
  );
};

export default App;
