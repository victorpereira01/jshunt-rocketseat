import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';

export default createStackNavigator({
    Main
}, {
    navigationOptions: {
        headerStyles: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    }
}); 