import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{
        flex: 1, flexDirection: 'row',
        backgroundColor:'yellow',
        
      }}>
        <Text style ={ {flex:1, backgroundColor:'green'}}> App </Text>
        <Text style ={ { flex:1,backgroundColor:'red'}}>APP2</Text>
        <Text style = { { flex:1,backgroundColor:'blue'}}>App3</Text>
      </View>
    );
  }
}


