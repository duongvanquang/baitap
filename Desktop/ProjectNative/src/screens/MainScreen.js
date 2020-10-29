import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import AppDimensions from '../untils/AppDimensions';
import RNPickerSelect from 'react-native-picker-select';

export default class MainScreen extends Component {
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
            filterMode: null,
        }
    }
    toggleWord = word => {
        const newWords = this.state.words.map(item => {
            if (item.id === word.id) {
                return { ...item, isMemorized: !item.isMemorized };
            }
            return item;
        });
        this.setState({ words: newWords });
    }
    RemoveWord = word => {
        const newWords = this.state.words.filter(item => {
            if (item.id === word.id) {
                return false;
            }
            return true;
        })
        this.setState({ words: newWords });
    }
    toggleForm = () => {
        this.setState({ shouldShowForm: !this.state.shouldShowForm })
    };
    addWord = () => {
        {
            const { txtEn, txtVn, words } = this.state;
            const newWords = Object.assign([], words);
            if (txtEn.length <= 0 || txtVn.length <= 0) {
                return alert(' bạn chưa nhập đủ thông tin');
            }
            const newWord = {
                id: words.length + 1,
                en: txtEn,
                vn: txtVn,
                isMemorized: false,
            };
            newWords.unshift(newWord);
            this.setState({ words: newWords, txtEn: '', txtVn: '' });
            this.textInputEn.clear();
            this.textInputVn.clear();
        }
    }
    renderForm = shouldShowForm => {
        if (shouldShowForm) {
            return (
                <View>
                    <View style={styles.containerTextInput}>
                        <TextInput
                            onChangeText={text => (this.state.txtEn = text)}
                            ref={refs => (this.textInputEn = refs)}
                            placeholder="English"
                            style={styles.textInput} />
                        <TextInput onChangeText={text => (this.state.txtVn = text)}
                            ref={refs => (this.textInputVn = refs)}
                            placeholder="Vietnamese"
                            style={styles.textInput} />
                    </View>
                    <View style={styles.containerTouchableForm}>
                        <TouchableOpacity
                            onPress={this.addWord}
                            style={styles.touchableAddword}>
                            <Text style={styles.textTouchable}>Add word</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => this.toggleForm()}
                            style={styles.touchableCancel}>
                            <Text style={styles.textTouchable}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        } else {
            return (
                <TouchableOpacity
                    onPress={() => this.toggleForm()}
                    style={styles.buttonOpenForm}>
                    <Text style={styles.textOpenForm}>+</Text>
                </TouchableOpacity>
            );
        }
    };
    render() {
        return this.renderForm(this.state.shouldShowForm);
    }
    renderItemWord = word => {
        const {filterMode} = this.state;
        if(filterMode === 'Show_Forgot' && !word.isMemorized){
            return null;
        } else if( filterMode === 'Show_Memorized' && word.isMemorized){
            return null;
        }
        return (
            <View style={styles.containerWord} key={word.id.toString()}>
                <View style={styles.containerText}>
                    <Text style={styles.textEn}> {word.en} </Text>
                    <Text style={styles.textVn}>
                        {word.isMemorized ? '----' : word.vn}</Text>
                </View>
                <View style={styles.containerTouchable}>
                    <TouchableOpacity
                        onPress={() => this.toggleWord(word)}
                        style={{
                            ...styles.touchableMemorized,
                            backgroundColor: word.isMemorized ? '#28a845' : '#DD3444'
                        }}
                        activeOpacity={0.1}>
                        <Text style={styles.textSize}>
                            {word.isMemorized ? 'Forgot' : 'Memorized'} </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.RemoveWord(word)}
                        style={styles.touchableRemove}
                        activeOpacity={0.1}>
                        <Text style={styles.textSize}>Remove</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    rendenFilter = () => {
        return (
            <View style={styles.containerPickerStyle}>
                <RNPickerSelect
                    onValueChange={value => {
                        this.setState({filterMode: value});
                    }}
                    items={[
                        { label: 'Show All', value: 'Show_All' },
                        { label: 'Show Forgot', value: 'Show_Forgot' },
                        { label: 'Show Memorized', value: 'Show_Memorized' },
                    ]}
                />
            </View>
        );
    }
    render() {
        return (
            <View style={styles.container}>
                {this.renderForm(this.state.shouldShowForm)}
                {this.rendenFilter()}
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
        borderWidth: 1
    },
    textSize: {
        fontSize: AppDimensions.getWidth() / 20,
    },
    touchableRemove: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFC106',
        borderWidth: 1
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
    containerPickerStyle: {
        borderWidth: 1,
        borderRadius: 1,
        borderColor: 'black',
        padding: 20,
        marginHorizontal: 10,
    },
    pickerStyle: {
        padding: 50,
    },
});