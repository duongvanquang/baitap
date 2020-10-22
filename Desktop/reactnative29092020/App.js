import React, {Component} from 'react';
 import {Text, View, Platform} from 'react-native';
 import {SafeAreaView} from 'react-native';
 import MainScreen from './src/screens/MainScreen';

 export default class App extends Component {
   render() {
     return (
       <View style={{marginTop: Platform.OS === 'ios' ? 50 : 0}}>
         <View
           style={{backgroundColor: '#f20', borderRadius: 5, borderWidth: 5}}>
           <Text style={{fontSize: 20, fontWeight: '200', fontStyle: 'italic'}}>
             View 1
           </Text>
         </View>
       </View>
       <SafeAreaView style={{flex: 1}}>
         <MainScreen />
       </SafeAreaView>
     );
   }
 }
