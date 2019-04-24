import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthScreen from '../screens/auth/index.js';
import AuthLoading from '../screens/auth/load.js';
import { AppStack } from './appstack.js'

export default createAppContainer(createSwitchNavigator({
  Auth: AuthScreen,
  App: AppStack,
  AuthLoading: AuthLoading
},{
  initialRouteName: "AuthLoading"
}));
