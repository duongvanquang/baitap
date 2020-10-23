/**
 * @format
 */

import {AppRegistry, SafeAreaView, CheckBox} from 'react-native';
import {name as AppName} from './app.json';
import MianSreens from './src/screens/MainScreen/MianSreens';
import Box from './src/components/Box/Box';
import Form from './src/components/Form';
AppRegistry.registerComponent(AppName, () => Form);
