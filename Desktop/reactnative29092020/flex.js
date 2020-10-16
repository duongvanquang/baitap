import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class flex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{ flex:1, flexDirection:'column',backgroundColor:'yellow'}}>
        <Text> flex </Text>
      </View>
    );
  }
}
