import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Textflex extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1 }}>
                    <Text style ={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center' }}> A </Text>
                    <Text> B </Text>
                </View>
                <View style={{ flex: 1 }}>
                </View>
            </View>
        );
    }
}
