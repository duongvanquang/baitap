import React, { Component } from 'react';
import { View, Text, AppRegistry } from 'react-native';

export default class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'green', borderWidth: 5 }}>
        <View style={{ flex: 0.2, flexDirection: 'row', boderW: 5, backgroundColor: 'pink' }}>
          <Text style={{ flex: 0.3, backgroundColor: 'yellow', borderWidth: 5, fontSize: 50, justifyContent: 'center', alignItems: 'center' }}> 1 </Text>
          <Text style={{ flex: 0.7, backgroundColor: 'red', borderWidth: 5, fontSize: 50 }}> 2 </Text>
        </View>
        <View style={{ flex: 0.6, flexDirection: 'row', backgroundColor: 'pink', borderWidth: 5 }}>
          <View style={{ flex: 0.7, flexDirection: 'column', backgroundColor: 'blue' }}>
            <Text style={{ flex: 50, backgroundColor: '#FFFFCC', justifyContent: 'center', alignItems: 'center', fontSize: 50 }}> 3 </Text>
            <Text style={{ flex: 50, backgroundColor: '#FF99CC', fontSize: 50, justifyContent: 'center', alignItems: 'center' }}> 4 </Text>
          </View>
          <View style={{ flex: 0.3, backgroundColor: '#99FF66', borderWidth: 5 }}>
            <Text style={{ flex: 1, backgroundColor: '#FFCC00', fontSize: 50, justifyContent: 'center', alignItems: 'center' }}> 5 </Text>
          </View>
        </View>
        <View style={{ flex: 0.2, flexDirection: 'row', backgroundColor: '#9999CC', borderWidth: 5 }}>
          <Text style={{ flex: 0.5, backgroundColor: '#FF33FF', fontSize: 50, justifyContent: 'center', alignItems: 'center' }}> 6 </Text>
          <Text style={{ flex: 0.5, backgroundColor: '#336600', fontSize: 50, justifyContent: 'center', alignItems: 'center' }}> 7 </Text>
        </View>

      </View>
    );
  }
}
