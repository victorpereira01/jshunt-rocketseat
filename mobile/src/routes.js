import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

export default createStackNavigator({
    Main,
    Product
}, {
    navigationOptions: {
        headerStyles: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    }
}); 