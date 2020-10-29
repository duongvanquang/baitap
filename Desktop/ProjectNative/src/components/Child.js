import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Child extends Component {
    render() {
        return (
            <View style={styles.eventgroup}>
                <TouchableOpacity
                    onPress={() =>this.props.onInCrease()}
                    style={styles.boxIncrease}
                    activeOpacity={0.1}>
                    <Text style={styles.inCrease}> Increase</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    this.setState({ count: this.state.count + 1 })
                    console.log(this.state.count)
                }}
                    style={styles.boxDescrease}
                    activeOpacity={0.1}>
                    <Text style={styles.Descrease}> Descrease</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({ count: this.state.count + 1 })
                        console.log(this.state.count)
                    }}
                    style={styles.boxReset}
                    activeOpacity={0.1}>
                    <Text style={styles.Reset}>Reset</Text>
                </TouchableOpacity>
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
