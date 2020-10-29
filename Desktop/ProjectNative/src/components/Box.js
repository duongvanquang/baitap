import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Child from './Child';


export default class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    onInCrease = ()=>{
        this.setState({count:this.state.count + 1})
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textCount}>Count:{this.state.count}</Text>
                <Child onInCrease ={ this.onInCrease}/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textCount: {
        fontSize: 30,
        color: 'red',
    },
    inCrease: {
        fontSize: 20,
        padding: 10,
        color: 'white'
    },
    Descrease: {
        fontSize: 20,
        padding: 10,
        color: 'white'
    },
    Reset: {
        fontSize: 20,
        padding: 10,
        color: 'white'
    },
    eventgroup: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    boxIncrease: {
        borderRadius: 10,
        backgroundColor: 'green'
    },
    boxDescrease: {
        borderRadius: 10,
        backgroundColor: 'red'
    },
    boxReset: {
        borderRadius: 10,
        backgroundColor: 'blue'
    }

});
