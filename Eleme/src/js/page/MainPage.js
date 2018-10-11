import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import CommonStyle from '../util/StyleUtils'



export default class MainPage extends React.Component {


    render() {
        return (
            <View style={CommonStyle.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor={'#008CF0'}
                    translucent={true}
                    barStyle={'light-content'} />
            </View>
        );
    }

}
