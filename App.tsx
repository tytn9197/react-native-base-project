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
import './global.css';
import {UnistylesRegistry} from 'react-native-unistyles';

const light = {
  bgDisabledButton: '#00000059',
  txtDisabledButton: '#FFFFFF59',
};
const dark = {
  bgDisabledButton: '#FFFFFF1A',
  txtDisabledButton: '#FFFFFF59',
};

export type AppThemes = {
  light: typeof light;
  dark: typeof dark;
};

declare module 'react-native-unistyles' {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light,
  dark,
}).addConfig({
  initialTheme: 'light',
});

const App = (): React.JSX.Element => {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer
        theme={scheme === 'dark' ? DefaultTheme : DefaultTheme}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
