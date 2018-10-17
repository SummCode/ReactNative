import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import StyleUtils from '../../util/StyleUtils'
import TitleBar from '../../widget/TitleBar'


export default class MessagePage extends React.Component {

    render() {
        return (
            <View style={StyleUtils.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor={'#008CF0'}
                    translucent={false}
                    barStyle={'light-content'}/>

                <Text>Message Page</Text>

            </View>
        );
    }

}
