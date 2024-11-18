/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '#redux/store';
import {useColorScheme} from 'react-native';
import RootNavigator from '#navigators/RootNavigator';
import "./global.css"

const App = (): React.JSX.Element => {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DefaultTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
