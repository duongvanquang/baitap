import React, { Component } from 'react';
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native';

export default class Box extends Component {
    constructor(props){
        super(props);
        console.log('constructor');
        this.state={
            count:0,
        };
    }
    shouldComponentUpdate ( nextProps,nextState){
        if(nextState.count !== this.state.count){
            return false;
        }
        return true;
    }
  render() {
    return (
      <View style ={ styles.container}>
          <Text style ={ styles.textCount}>Count:{this.state.count}</Text>
          <View style = { styles.eventgroup}>
              <TouchableOpacity 
              onPress={ ()=>{
                  this.setState({ count: this.state.count + 1})
                  console.log(this.state.count)
              }}
              style ={ styles.boxIncrease}
              activeOpacity={ 0.1}>
                  <Text style ={ styles.inCrease}> Increase</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ ()=>{
                  this.setState({ count: this.state.count + 1})
                  console.log(this.state.count)
              }}
              style = { styles.boxDescrease}
              activeOpacity={ 0.1}>
                  <Text style ={ styles.Descrease}> Descrease</Text>
              </TouchableOpacity>
              <TouchableOpacity
              onPress={ ()=>{
                this.setState({ count: this.state.count + 1})
                console.log(this.state.count)
            }}
               style ={ styles.boxReset}
              activeOpacity={0.1}>
                  <Text style ={ styles.Reset}>Reset</Text>
              </TouchableOpacity>

          </View>
        
      </View>
    );
  }
  componentDidMount (){
      console.log('componentDidMount');
  }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textCount:{
        fontSize:30,
        color:'red',
    },
    inCrease:{
        fontSize:20,
        padding:10,
        color:'white'
    },
    Descrease:{
        fontSize:20,
        padding:10,
        color:'white'
    },
    Reset:{
        fontSize:20,
        padding:10,
        color:'white'
    },
    eventgroup:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginTop:20
    },
    boxIncrease:{
        borderRadius:10,
        backgroundColor:'green'
    },
    boxDescrease:{
        borderRadius:10,
        backgroundColor:'red'
    },
    boxReset:{
        borderRadius:10,
        backgroundColor:'blue'
    }

});
