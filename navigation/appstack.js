import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/landing/Home.js';


export const AppStack = createDrawerNavigator({
  Home: HomeScreen
});
