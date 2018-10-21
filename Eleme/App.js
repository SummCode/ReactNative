/**
 * Eleme App 路由配置
 */
import React from 'react';
import {Image, StyleSheet, View, BackHandler, AppState, Platform, ToastAndroid, Easing, Animated} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
/**
 * 启动页
 */
import StartUpPage from './src/js/page/StartUpPage';

/**
 * 主页
 */
import MainPage from './src/js/page/MainPage';

/**
 * 设置
 */
import SettingPage from './src/js/page/mine/SettingPage';

/**
 * 消息
 */
import MessagePage from './src/js/page/mine/MessagePage';

/**
 * 个人资料
 */
import UserInfoPage from './src/js/page/mine/UserInfoPage';


/**
 * 主页 Bottom Tab
 */
import HomePage from './src/js/page/main/HomePage';
import DiscoverPage from './src/js/page/main/DiscoverPage';
import OrderPage from './src/js/page/main/OrderPage';
import MinePage from './src/js/page/main/MinePage';


// 通过TabNavigator做路由映射
const MainTab = createBottomTabNavigator({
    Home: {
        screen: HomePage, navigationOptions: {
            tabBarLabel: '外卖',
            tabBarIcon: ({tintColor, focused}) => (
                <Image resizeMode='contain'
                       source={require('./src/res/icons/icon_main_home.png')}
                       style={[styles.tabIcon, {tintColor: tintColor}]}
                />
            )
        }
    },
    Discover: {
        screen: DiscoverPage, navigationOptions: {
            tabBarLabel: '发现',
            tabBarIcon: ({tintColor, focused}) => (
                <Image resizeMode='contain'
                       source={require('./src/res/icons/icon_main_discover.png')}
                       style={[styles.tabIcon, {tintColor: tintColor}]}
                />
            )
        }
    },
    Order: {
        screen: OrderPage, navigationOptions: {
            tabBarLabel: '订单',
            tabBarIcon: ({tintColor, focused}) => (
                <Image resizeMode='contain'
                       source={require('./src/res/icons/icon_main_order.png')}
                       style={[styles.tabIcon, {tintColor: tintColor}]}
                />
            )
        }
    },
    Mine: {
        screen: MinePage, navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor, focused}) => (
                <Image resizeMode='contain'
                       source={require('./src/res/icons/icon_main_mine.png')}
                       style={[styles.tabIcon, {tintColor: tintColor}]}
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
        indicatorStyle: {
            height: 0,
        },
    }
});

var lastBackPressed = Date.now();

export default class App extends React.Component {

    //组件加载之后添加监听
    componentDidMount() {
        if (Platform.OS === 'android') BackHandler.addEventListener('hardwareBackPress', App.onBackPressed);
        AppState.addEventListener('change', App.onAppStateChanged);
    }

    //组件卸载之前移除监听
    componentWillUnmount() {
        if (Platform.OS === 'android') BackHandler.removeEventListener('hardwareBackPress', App.onBackPressed);
        AppState.removeEventListener('change', App.onAppStateChanged);
    }

    static onBackPressed() {
        if (lastBackPressed && lastBackPressed + 2000 >= Date.now()) {
            BackHandler.exitApp();
        }
        lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }

    static onAppStateChanged() {
        switch (AppState.currentState) {
            case "active":
                console.log("active");
                break;
            case "background":
                console.log("background");
                break;
            default:

        }
    }

    render() {
        return <RootApp/>
    }
}

const RootApp = createStackNavigator({
    StartUp: {
        screen: StartUpPage,
        navigationOptions: {
            header: null,
        }
    },
    Main: {
        screen: MainTab,
        navigationOptions: {
            header: null,
        }
    },
    Setting: {
        screen: SettingPage,
        navigationOptions: {
            title: '设置',
        }
    },
    Message: {
        screen: MessagePage,
        navigationOptions: {
            title: '通知中心',
        }
    },
    UserInfo: {
        screen: UserInfoPage,
        navigationOptions: {
            title: '个人资料',
        }
    },
}, {
    initialRouteName: 'StartUp',
    transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
        },
        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const {index} = scene;
            const Width = layout.initWidth;
            //沿X轴平移
            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [Width, 0, -(Width - 10)],
            });
            //透明度
            const opacity = position.interpolate({
                inputRange: [index - 1, index - 0.99, index],
                outputRange: [0, 1, 1],
            });
            return {opacity, transform: [{translateX}]};
        }
    }),
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#008CF0',
        },
        headerTintColor: 'white',
        headerTitleStyle: {flex: 1, textAlign: 'center', color: 'white', fontSize: 18},
        headerRight: (
            <View/>
        ),

    }
})

const styles = StyleSheet.create({
    tabIcon: {
        width: 18,
        height: 18,
    }
})
