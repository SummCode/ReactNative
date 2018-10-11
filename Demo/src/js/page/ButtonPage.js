import React from 'react';
import {ToastAndroid, StyleSheet, Button, View} from 'react-native';

import styles from '../util/StyleUtils';

export default class ButtonPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.btn}>
                    <Button title={'默认Button'} onPress={() => {
                        ToastAndroid.show('默认 Button', ToastAndroid.LONG);
                    }}/>
                </View>

                <View style={styles.btn}>
                    <Button color={'#B05BC1'} title={'修改背景色Button'} onPress={() => {
                        ToastAndroid.show('修改背景色 Button', ToastAndroid.LONG);
                    }}/>
                </View>

                <View style={styles.btn}>
                    <Button color={'#B05BC1'} disabled={true} title={'不可用Button'} onPress={() => {
                        ToastAndroid.show('不可用 Button', ToastAndroid.LONG);
                    }}/>
                </View>

            </View>
        );
    }

}


