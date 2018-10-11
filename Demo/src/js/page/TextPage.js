import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

import styles from '../util/StyleUtils'

export default class TextPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.title}> Welcom use React Native! </Text>
                <Text style={styles.describe}>
                    React Native lets you build mobile apps using only JavaScript. It uses
                    the same design as React, letting you compose a rich mobile UI from declarative components.
                </Text>
                <Text style={styles.title}>
                    React Logo
                    <Image style={styles.logo}
                           source={require('../../res/images/logo_react.png')}/>
                </Text>
            </View>
        );
    }
}