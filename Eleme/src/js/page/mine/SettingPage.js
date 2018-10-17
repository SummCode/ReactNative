import React from 'react';
import {StyleSheet, Text, FlatList, View, StatusBar} from 'react-native';

import StyleUtils from '../../util/StyleUtils'


export default class SettingPage extends React.Component {

    render() {
        return (
            <View style={StyleUtils.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor={'#008CF0'}
                    translucent={false}
                    barStyle={'light-content'}/>

                <FlatList>

                </FlatList>

            </View>
        );
    }

}
