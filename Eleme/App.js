/**
 * Eleme App 路由配置
 */
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

/**
 * 启动页
 */
import StartUpPage from './src/js/page/StartUpPage';

/**
 * 主页
 */
import MainPage from './src/js/page/MainPage';

/**
 * 主页 Tab
 */
import HomePage from './src/js/page/main/HomePage';
import DiscoverPage from './src/js/page/main/DiscoverPage';
import OrderPage from './src/js/page/main/OrderPage';
import MinePage from './src/js/page/main/MinePage';


// 通过TabNavigator做路由映射
const MainTab = TabNavigator({
    Home: {
        screen: HomePage, navigationOptions: {
            tabBarLabel: '外卖',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image resizeMode='contain'
                    source={require('./src/res/icons/icon_home.png')}
                    style={[styles.tabIcon, { tintColor: tintColor }]}
                />
            )
        }
    },
    Discover: {
        screen: DiscoverPage, navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image resizeMode='contain'
                    source={require('./src/res/icons/icon_discover.png')}
                    style={[styles.tabIcon, { tintColor: tintColor }]}
                />
            )
        }
    },
    Order: {
        screen: OrderPage, navigationOptions: {
            tabBarLabel: '订单',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image resizeMode='contain'
                    source={require('./src/res/icons/icon_order.png')}
                    style={[styles.tabIcon, { tintColor: tintColor }]}
                />
            )
        }
    },
    Mine: {
        screen: MinePage, navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({ tintColor, focused }) => (
                <Image resizeMode='contain'
                    source={require('./src/res/icons/icon_mine.png')}
                    style={[styles.tabIcon, { tintColor: tintColor }]}
                />
            )
        }
    },
}, {
        tabBarPosition: 'bottom',
        lazy: true, // 是否懒加载
        initialRouteName: 'Home',
        tabBarOptions: {
            showIcon: true,
            pressOpacity: 0.8,
            activeTintColor: '#008CF0',
            inactiveTintColor: '#8a8a8a',
            style: {
                height: 50,
                backgroundColor: '#ffffff',
                zIndex: 0,
                position: 'relative'
            },
            labelStyle: {
                fontSize: 12,
                paddingVertical: 2,
                marginTop: -3
            },
            iconStyle: {
                marginTop: -3
            },
            tabStyle: {
                backgroundColor: '#ffffff',
            },
        }
    })




export default App = StackNavigator({
    StartUp: {
        screen: StartUpPage,
        navigationOptions: {
            header: null
        }
    },
    Main: {
        screen: MainTab,
        navigationOptions: {
            header: null
        }
    },
    initialRouteName: 'StartUp'


})

const styles = StyleSheet.create({
    tabIcon: {
        width: 18,
        height: 18,
    }
})
