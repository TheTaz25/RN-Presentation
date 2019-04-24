import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import IosApi from '../screens/api/ios/index.js';
import AndroidApi from '../screens/api/android/index.js';
const Api = Platform.OS === "ios" ? IosApi : AndroidApi;

export const ApiStack = createStackNavigator({
  ApiList: Api,
  ApiDetail: Detail
});
