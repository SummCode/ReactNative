import React from 'react';
import {Image,View} from 'react-native';

import styles from '../util/StyleUtils'

export default class ImagePage extends React.Component{

    render(){
        return(
            <View style={styles.container}>

                <View style={styles.img}>
                    <Image source={require('../../res/images/logo_react.png')}/>
                </View>

                <View style={styles.img}>
                    <Image style={{width:330,height:330}} opacity={0.8} backgroundColor={'#00F'} borderRadius={1000} borderColor={'#FFFFFF'} borderWidth={6} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1539087341375&di=8ee8a015653aa8fb77893cb019b78c7c&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4034970a304e251f569f36f6aa86c9177f3e5350.jpg'}}/>
                </View>
            </View>
        );
    }

}