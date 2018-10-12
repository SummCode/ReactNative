import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

import CommonStyle from '../util/StyleUtils'



export default class LoginPage extends React.Component {


    render() {
        return (
            <View style={CommonStyle.container}>
                <StatusBar
                    hidden={true}/>
                    <Text style={StyleUtils.container}>Mine Page</Text>
            </View>
        );
    }

}