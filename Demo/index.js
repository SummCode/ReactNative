/** @format */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import TextPage from './src/js/page/TextPage'
import ButtonPage from './src/js/page/ButtonPage'
import ImagePage from './src/js/page/ImagePage'
import FlatListPage from './src/js/page/FlatListPage'
import NetworkPage from './src/js/page/NetworkPage'
import ToastTest from './src/js/third/ToastTest'

import { StackNavigator } from 'react-navigation'



export default AppRoot = StackNavigator({
    App: {
        screen: App,
        navigationOptions:{
            title:'React Native Demo'
        }
    },
    Text: {
        screen: TextPage,
        navigationOptions: {
            title: '文本 Widget'
        }
    },
    Button: {
        screen: ButtonPage,
        navigationOptions: {
            title: '按钮 Widget'
        }
    },
    Image: {
        screen: ImagePage,
        navigationOptions: {
            title: '图片 Widget'
        }
    },
    FlatList: {
        screen: FlatListPage,
        navigationOptions: {
            title: '列表 Widget'
        }
    },    
    Network: {
        screen: NetworkPage,
        navigationOptions: {
            title: '网络请求'
        }
    },
});






AppRegistry.registerComponent(appName, () => AppRoot);