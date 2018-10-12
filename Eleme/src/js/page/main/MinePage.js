import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import StyleUtils from '../../util/StyleUtils'



export default class MinePage extends React.Component {
    

    render() {
        return (
            <View style={StyleUtils.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor={'#008CF0'}
                    translucent={true}
                    barStyle={'light-content'} />

                    <Text style={StyleUtils.container}>Mine Page</Text>
            </View>
        );
    }

}