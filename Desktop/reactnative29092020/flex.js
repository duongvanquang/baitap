import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Flex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={{ flex: 1, backgroundColor: 'yellow', flexDirection: 'column' }}>
        <Text style={{ flex: 0.25, backgroundColor: 'red', justifyContent: 'space-between', alignItems: 'center' }}> A </Text>
        <Text style={{ flex: 0.25, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center' }}> B </Text>
        <Text style={{ flex: 0.25, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}> C </Text>
        <Text style={{ flex: 0.25, backgroundColor: 'green', justifyContent: 'center', alignItems: 'center' }}> D </Text>
        <View style={{ flex: 1, backgroundColor: 'powderblue', flexDirection: 'row' }}>
          <Text style={{ flex: 0.25, backgroundColor: 'skyblue', justifyContent: 'center', alignItems: 'flex-end' }}> A </Text>
          <Text style={{ flex: 0.25, backgroundColor: 'steelblue', justifyContent: 'center', alignContent: 'center' }}> B </Text>
          <Text style={{ flex: 0.25, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}> C </Text>
          <Text style={{ flex: 0.25, backgroundColor: 'yellow' }}> D </Text>
        </View>
      </View>
    );
  }
}
