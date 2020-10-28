import React, { Component } from 'react';
import {SafeAreaView } from 'react-native';
import MainScreen from './src/screens/MainScreen';
import Box from './src/components/Box';
import Form from './src/components/Form';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style ={{ flex:1}}>
         <MainScreen /> 
       {/* <Box /> */}
       { /*<Form />*/}
      </SafeAreaView>
    );
  }
}
