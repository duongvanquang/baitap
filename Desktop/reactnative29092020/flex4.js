import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class flex4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#669999', borderWidth: 5 }}>
        <View style={{ flex: 0.5, backgroundColor: '#FF6600', borderWidth: 5 }}>
          <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#FF00CC' }}>
            <View style={{ flex: 0.3, flexDirection: 'row', backgroundColor: '#00EE00', borderWidth: 5 }}>
              <Text style={{ flex: 1, backgroundColor: '#006600', fontSize: 50 }}> 1 </Text>
            </View>
            <View style={{ flex: 0.7, flexDirection: 'column', backgroundColor: '#FF3399' }}>
              <Text style={{ flex: 0.5, backgroundColor: 'yellow', fontSize: 50 }}> 2 </Text>
              <Text style={{ flex: 0.5, backgroundColor: '#FF9966', fontSize: 50, justifyContent: 'center', alignItems: 'center' }}> 4 </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.5, flexDirection: 'row', backgroundColor: '#99FFFF', borderWidth: 5 }}>
          <View style={{ flex: 0.2, backgroundColor: 'pink', borderWidth: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ flex: 1, fontSize: 50, justifyContent: 'center', alignItems: 'center', padding: 20 }}> 5 </Text>
          </View>
          <View style={{ flex: 0.5, backgroundColor: '#FFCC33', borderWidth: 5 }}>
            <Text style={{ flex: 0.5, backgroundColor: '#339966', fontSize: 50, padding: 40 }}> 3 </Text>
            <Text style={{ flex: 0.5, backgroundColor: '#CC6600', fontSize: 50, padding: 25, borderTopWidth: 5 }}> 6 </Text>
          </View>
          <View style={{ flex: 0.3, backgroundColor: '#006600', borderWidth: 5 }}>
            <Text style={{ flex: 0.35, fontSize: 50, backgroundColor: '#CC6600', padding: 10, borderWidth: 5 }}> 7 </Text>
            <Text style={{ flex: 0.35, fontSize: 50, borderWidth: 5, padding: 5 }}> 8 </Text>
            <Text style={{ flex: 0.3, fontSize: 50, backgroundColor: '#9900FF', borderWidth: 5, padding: 10 }}> 9 </Text>
          </View>
        </View>

      </View>
    );
  }
}
