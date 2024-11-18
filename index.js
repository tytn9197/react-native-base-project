import './gesture-handler';
/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

let AppEntryPoint = App;

AppEntryPoint = require("./.storybook").default;

AppRegistry.registerComponent(appName, () => AppEntryPoint);
