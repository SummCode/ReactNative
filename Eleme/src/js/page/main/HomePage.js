import React from 'react';
import {StyleSheet, Alert, Text, View, StatusBar} from 'react-native';

import StyleUtils from '../../util/StyleUtils'
import ImageButton from "../../widget/ImageButton";


export default class HomePage extends React.Component {


    render() {
        return (
            <View style={StyleUtils.container}>

                <StatusBar
                    hidden={false}
                    backgroundColor={'#008CF0'}
                    translucent={true}
                    barStyle={'light-content'}/>

                <Text>Home Page</Text>

                <ImageButton
                    text={'Button'}
                    backgroundColor={'#008CF0'}
                    disabled={false}
                    textColor={'white'}
                    imagePath={require('../../../res/icons/icon_mine_message.png')}
                    onClick={() => {
                        Alert.alert('Button');
                    }}/>

            </View>
        );
    }

}
