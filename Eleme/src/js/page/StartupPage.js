import React from 'react';
import {
    StyleSheet,
    ImageBackground,
    StatusBar
} from 'react-native';


export default class StartUpPage extends React.Component {


    render() {
        return (<ImageBackground style={styles.startup}
            source={require('../../res/images/img_startup.png')} >
            <StatusBar hidden={true} />

        </ImageBackground>
        );
    }

    componentDidMount() {
        this.timer = setTimeout(
            () => { 
                this.props.navigation.navigate('Main');
            },
            2000
        );
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。  
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear  
        this.timer && clearTimeout(this.timer);
    }


}


const styles = StyleSheet.create({
    startup: {
        flex: 1,
        backgroundColor:'white'
    }
});