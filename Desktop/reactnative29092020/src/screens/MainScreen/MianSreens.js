import React, { Component } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import AppDimensions from '../untils/AppDimensions';

export default class MianSreens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        { id: 1, en: 'One', vn: 'Một', isMemorized: false },
        { id: 2, en: 'Two', vn: 'Hai', isMemorized: false },
        { id: 3, en: 'Three', vn: 'Ba', isMemorized: true },
        { id: 4, en: 'Four', vn: 'Bon', isMemorized: true },
        { id: 5, en: 'Five', vn: 'Nam', isMemorized: false },
      ],
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.words.map(word => {
          return (
            <SafeAreaView style={{ flex: 1 }} key={word.id.toString()}>
              <View style={{
                flexDirection: 'column',
                height: AppDimensions.getHeight() / 7,
                justifyContent: 'space-evenly',
                backgroundColor: '#F0F0F0',
                marginHorizontal: 10,
                borderRadius: 10
              }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} >
                  <Text style={{
                    color: '#28a845',
                    fontSize: AppDimensions.getHeight() / 20
                  }}>{word.en}</Text>
                  <Text style={{
                    color: '#dd3545',
                    fontSize: AppDimensions.getHeight() / 20
                  }}>{word.isMemorized ? '----' : word.vn}</Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly'
                }}>
                  <TouchableOpacity
                    onPress={function () {
                      const newWord = this.state.words.map(item => {
                        if (item.id === word.id) {
                          return { ...item, isMemorized: !item.isMemorized }
                        }
                        return item;
                      });
                      this.setState({ words: newWord });
                    }.bind(this)}
                    style={{
                      padding: 10,
                      borderRadius: 5, backgroundColor: '#28a845',
                      backgroundColor: word.isMemorized ? '#DD3444' : '#28a845'
                    }}>
                    <Text style={{ fontSize: AppDimensions.getHeight() / 20 }}>
                      {word.isMemorized ? 'Memorized' : 'Forgot'}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={function () {
                      const newWords = this.state.words.filter(item => {
                        if (item.id === word.id) {
                          return false;
                        }
                        return true;
                      });
                      this.setState({ words: newWords });
                    }.bind(this)}
                    style={{
                      padding: 10,
                      borderRadius: 5, backgroundColor: '#FFC106'
                    }}>
                    <Text style={{ fontSize: AppDimensions.getHeight() / 20 }}
                    >Remove</Text>
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
