import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#CCFFFF' }}>
        <View style={{ flex: 0.3, flexDirection: 'column', backgroundColor: '#FF0000', borderWidth: 5 }}>
          <Text style={{ flex: 1, backgroundColor: '#FFFFCC', justifyContent: 'center', alignItems: 'center', fontSize: 50 }}> 1 </Text>
        </View>
        <View style={{ flex: 0.7, flexDirection: 'row', backgroundColor: '#66FF33', borderWidth: 5 }}>
          <Text style={{ flex: 0.3, backgroundColor: '#FFCC00', fontSize: 50, borderWidth: 5 }} > 2 </Text>
          <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#FFCCCC', }}>
            <View style={{ flex: 0.7, flexDirection: 'column', backgroundColor: '#66CCFF', borderWidth: 5 }}>
              <Text style={{ flex: 1, backgroundColor: '#FF6699', fontSize: 50, justifyContent: 'center', alignItems: 'center' }}> 3 </Text>
            </View>
            <View style = {{ flex:0.3,flexDirection:'row',borderStartColor:'#669900',borderWidth:5}}>
              <Text style ={{ flex:0.5,backgroundColor:'#006600',justifyContent:'center',alignItems:'center',fontSize:50}}> 4 </Text>
              <Text style = {{ flex:0.5 , backgroundColor:'#CC66CC', fontSize:50,justifyContent:'center',alignItems:'center'}}> 5 </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
