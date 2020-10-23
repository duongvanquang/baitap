import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Box extends Component {
  constructor(props) {
    super(props);
    console.log('constructor')
    this.state = {
      count: 10,

    };
  }
  shouldComponentUpdate (nextProps,nextState){
    if(nextState.count !== this.state.count){
      return false;
    }
    return true;
  }

  render() {
    console.log('render');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, color: 'red' }}>Count : 0 </Text>
        <Text style={{ fontSize: 30, color: 'red' }}> Count:{this.state.count} </Text>
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
          <TouchableOpacity style={{ borderRadius: 10, backgroundColor: 'green' }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({ count: this.state.count + 1 })
                console.log(this.setState.count);
              }}
              style={{
                borderRadius: 10,
                backgroundColor: 'green'
              }}>
              <Text style={{
                fontSize: 20,
                padding: 10,
                color: 'white'
              }}> InCrease </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ borderRadius: 10, backgroundColor: 'red' }}>
              <TouchableOpacity onPress={() => {
                this.setState({ count: this.state.count + 1 })
                console.log(this.setState.count)
              }}>
                <Text style={{ fontSize: 20, padding: 10, color: 'white' }}> DesCrease </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ borderRadius: 10, backgroundColor: 'yellow' }}>
                <TouchableOpacity onPress={() => {
                  this.setState({ count: this.state.count + 1 })
                }}>
                  <Text style={{ fontSize: 20, padding: 10, color: 'black' }}> Reset </Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  componentDitMount() {
    console.log('componentDitMount');
  }
}



