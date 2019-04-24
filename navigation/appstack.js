import { createDrawerNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import HomeScreen from '../screens/landing/Home.js';



import ApiStack from './apistack.js';



export const AppStack = createDrawerNavigator({
  Home: HomeScreen,
  Api: ApiStack
});
