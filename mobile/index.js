import { AppRegistry } from 'react-native';
import App from './src';

import { name as appName } from './app.json';
import { registerRootComponent } from 'expo';

registerRootComponent(App);

//AppRegistry.registerRootComponent(appName, () => App);
