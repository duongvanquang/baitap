import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AppDimensions from '../untils/AppDimensions';
export default class MainScreen extends Component {
    render() {
        const words = [
            {id: 1, en: 'One', vn: 'Một', isMemorized: false},
            {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
            {id: 3, en: 'Three',vn: 'Ba', isMemorized: true},
            {id: 4, en: 'Four', vn: 'Bốn', isMemorized: true},
            {id: 5, en: 'Five', vn: 'Năm', isMemorized: false},
        ];
        return (
            <View style={styles.container}>
                {words.map(word => {
                    return (
                        <View style ={styles.containerWord} key = { word.id.toString()}>
                            <View style={styles.containerText}>
                                <Text style={styles.textEn}>{word.en}</Text>
                                <Text style={styles.testVn}>{word.isMemorized ? '----' : word.vn}</Text>
                            </View>
                            <View style={styles.containerText}>
                                <TouchableOpacity style={{ ...styles.touchableMemorized, backgroundColor: word.isMemorized ? 'red' : 'green' }}
                                    activeOpacity={0.1}>
                                    <Text style={styles.textMemorized}>{word.isMemorized ? 'Memorized' : 'Forgot'}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.touchableRemove}
                                    activeOpacity={0.1}>
                                    <Text style={styles.textRemove}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })}
            </View>
        );
    }
}
const styles = StyleSheet.create({
   container:{
       flex:1
   },
    containerWord: {
        flexDirection: 'column',
        height: AppDimensions.getHeight() / 7,
        justifyContent: 'space-evenly',
        backgroundColor:'#F0F0F0',
        marginTop:10,
        marginHorizontal:10,
        borderRadius:10
    },
    containerText: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    textEn: {
        color: 'red',
        fontSize: AppDimensions.getWidth() / 20
    },
    textVn: {
        color: 'green',
        fontSize: AppDimensions.getWidth() / 20
    },
    touchableMemorized: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1
    },
    textMemorized: {
        fontSize: AppDimensions.getWidth() / 20
    },
    touchableRemove: {
        backgroundColor: '#FFC106',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1
    },
    textRemove: {
        fontSize: AppDimensions.getWidth() / 20
    }
});
