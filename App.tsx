/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IconLeftArrow from './src/assets/icons/ic_left_arrow.svg';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';
import HomeScreen from './src/screens/HomeScreen';
import { PostsList } from './src/screens/post-list/PostList';
import { APP_CONST } from './src/contants/APP_CONSTANTS';
import PostDetails from './src/screens/post-details/PostDetails';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={APP_CONST.NAV.HOME} component={PostsList} />
          <Stack.Screen name={APP_CONST.NAV.DETAILS} component={PostDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
