import React, { Component } from 'react';
import { View, Text, SafeAreaView, CheckBox, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AppDimensions from '../screens/untils/AppDimensions';

export default class Form extends Component {
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
            txtEn: '',
            txtVn: '',
            shouldShowForm: false,
        };
    }
    toggleWord = word => {
        const newWords = this.state.words.map(item => {
            if (item.id = word.id) {
                return { ...item, isMemorized: !item.isMemorized };
            }
            return item;
        });
        this.setState({ words: newWords })
    }
    removeWord = word => {
        const newWords = this.setState.words.filter(item => {
            if (item.id === word.id) {
                return false;
            }
            return true;
        });
        this.setState({ words: newWords });
    };
    toggleForm = () => {
        this.setState({ shouldShowForm: !this.state.shouldShowForm });
    };
    rederForm = shouldShowForm => {
        if (shouldShowForm) {
            return (
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.containerTextInput}>
                        <TextInput onChange={text => (this.state.textEn = text)}
                            refs={refs => (this.textInput = refs)}
                            placeholder="English"
                            style={styles.textInput}
                        />
                        <TextInput onChange={text => (this.state.textVn = text)}
                            refs={refs => (this.textInput = refs)}
                            placeholder="Vietnamese"
                            style={styles.textInput}
                        >
                        </TextInput>
                    </View>
                    <View style={styles.containerTouchableForm}>
                        <TouchableOpacity style={styles.touchableAddword}>
                            <Text style={styles.textTouchable}>Add word
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.toggleForm()}
                            style={styles.touchableCancel}>
                            <Text style={styles.textTouchable}> Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            );
        } else {
            return (
                <TouchableOpacity onPress={() => this.toggleForm()}
                    style={style.buttonOpenForm}>
                    <Text style={style.textOpenForm}> + </Text>

                </TouchableOpacity>
            );
        }
    };
    rederItemWord = word => {
        return (
            <View style={styles.containerWord}>
                <View style={styles.containerText}>
                    <Text style={styles.textEn}> {word.en} </Text>
                    <Text style={this.styles.textVn}> {word.isMemorized ? '----' : word.vn}</Text>
                </View>
                <View style={styles.containerTouchable}>
                    <TouchableOpacity onPress={() => this.toggleWord(word)}
                        style={{
                            ...styles.touchableMemorized,
                            backgroundColor: word.isMemorized ? '#DD3444' : '#28a845',
                        }}>
                        <Text style={styles.textSize}> {word.isMemorized ? 'Memorized' : 'Forgot'} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.rederItemWord(word)}
                        style={styles.touchableRemove}>
                        <Text style={styles.textSize}> Remove </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    render() {
        return (
          <View style={styles.container}>
            {this.state.words.map(word => {
              return (
                <View style={styles.containerWord} key={word.id.toString()}>
                  <View style={styles.containerText}>
                    <Text style={styles.textEn}>{word.en}</Text>
                    <Text style={styles.textVn}>
                      {word.isMemorized ? '----' : word.vn}
                    </Text>
                  </View>
                  <View style={styles.containerTouchable}>
                    <TouchableOpacity
                      onPress={() => this.toggleWord(word)}
                      style={{
                        ...styles.touchableMemorized,
                        backgroundColor: word.isMemorized ? '#DD3444' : '#28a845',
                      }}>
                      <Text style={styles.textSize}>
                        {word.isMemorized ? 'Memorized' : 'Forgot'}
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => this.removeWord(word)}
                      style={styles.touchableRemove}>
                      <Text style={styles.textSize}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
            {this.renderForm(this.state.shouldShowForm)}
            {this.state.words.map(word => this.renderItemWord(word))}
          </View>
        );
      }
   }

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerWord: {
        flexDirection: 'column',
        height: AppDimensions.getHeight() / 7,
        justifyContent: 'space-evenly',
        backgroundColor: '#F0F0F0',
        marginTop: 10,
        marginHorizontal: 10,
        borderRadius: 10,
    },
    containerText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    textEn: {
        color: '#28a845',
        fontSize: AppDimensions.getWidth() / 20,
    },
    textVn: {
        color: '#dd3545',
        fontSize: AppDimensions.getWidth() / 20,
    },
    containerTouchable: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    touchableMemorized: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#28a845',
    },
    textSize: {
        fontSize: AppDimensions.getWidth() / 20,
    },
    touchableRemove: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFC106',
    },
    containerTextInput: {
        width: '100%',
        height: 150,
        justifyContent: 'space-evenly',
    },
    textInput: {
        borderWidth: 1,
        height: 60,
        fontSize: 20,
        marginHorizontal: 10,
        paddingHorizontal: 10,
    },
    touchableAddword: {
        backgroundColor: '#218838',
        padding: 15,
        borderRadius: 10,
    },
    textTouchable: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    touchableCancel: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 10,
    },
    buttonOpenForm: {
        marginHorizontal: 10,
        height: 50,
        backgroundColor: '#45B157',
        borderRadius: 5,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textOpenForm: {
        color: 'white',
        fontSize: 30,
    },
    containerTouchableForm: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 10,
    },
});
