import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import AppDimensions from '../untils/AppDimensions';

export default class MianSreens extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const words = [
      { id: 1, en: 'One', vn: 'Một', isMemorized: false },
      { id: 2, en: 'Two', vn: 'Hai', isMemorized: false },
      { id: 3, en: 'Three', vn: 'Ba', isMemorized: true },
      { id: 4, en: 'Four', vn: 'Bon', isMemorized: true },
      { id: 5, en: 'Five', vn: 'Nam', isMemorized: false },
    ];
    return (
      <View style={{ flex: 1 }}>
        {words.map(word => {
          return (
            <SafeAreaView style={{ flex: 1 }}>
              <View style={{
                flexDirection: 'column',
                height: AppDimensions.getHeight() / 7,
                justifyContent: 'space-evenly',
                backgroundColor: '#F0F0F0',
                marginHorizontal: 10,
                borderRadius: 10
              }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} key ={word.id.toString}>
                  <Text style={{ color: '#28a845', fontSize: AppDimensions.getHeight() / 20 }}>{word.en}</Text>
                  <Text style={{ color: '#dd3545', fontSize: AppDimensions.getHeight() / 20 }}>{word.isMemorized ? '----' : word.vn}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                  <TouchableOpacity style={{ padding: 10, borderRadius: 5, backgroundColor: '#28a845', backgroundColor: word.isMemorized ? '#DD3444' : '#28a845' }}>
                    <Text style={{ fontSize: AppDimensions.getHeight() / 20 }}>{word.isMemorized ? 'Memorized' : 'Forgot'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ padding: 10, borderRadius: 5, backgroundColor: '#FFC106' }}>
                    <Text style={{ fontSize: AppDimensions.getHeight() / 20 }}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </SafeAreaView>
          );
        })}
      </View>
    );
  }
}
