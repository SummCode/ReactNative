/**
 * Eleme App 路由配置
 */


import {StackNavigator,TabNavigator} from 'react-navigation'


import StartUpPage from './src/js/page/StartUpPage'
import MainPage from './src/js/page/MainPage'
import HomePage from './src/js/page/main/HomePage'
import MinePage from './src/js/page/main/MinePage'



export default AppRoot = StackNavigator({
    StartUp: {
        screen: StartUpPage,
        navigationOptions:{
			header:null
			
        }
    },
    Main: {
        screen: MainPage,
        navigationOptions: {
            header:null
        }
	},
	initialRouteName:'StartUp'
	
    
});

// 通过TabNavigator做路由映射
const MainTab=TabNavigator({
    Home:{screen:HomePage},
    Mine:{screen:MinePage},
});

