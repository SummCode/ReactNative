import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import CommonStyle from '../util/StyleUtils'



export default class MinePage extends React.Component {


    render() {
        return (
            <View style={CommonStyle.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor={'#008CF0'}
                    translucent={true}
                    barStyle={'light-content'} />

                    <Text>Mine Page</Text>
            </View>
        );
    }

}