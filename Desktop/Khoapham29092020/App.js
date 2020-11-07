import React, { Component } from 'react';
import { View, Text, Platform} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{marginTop:Platform.OS ==='ios' ? 50 :0}}>
        <View style = {{ backgroundColor:'green', borderRadius:5,borderWidth:1}}>
        <Text style= {{ fontSize:20, fontWeight:'bold', fontStyle:'italic'}}> App </Text>
        </View>
      </View>
    );
  }
}
