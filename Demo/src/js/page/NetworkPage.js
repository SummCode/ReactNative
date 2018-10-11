import React from 'react';
import {Button,View,ToastAndroid} from 'react-native';

import StyleUtils from '../util/StyleUtils'
import FetchUtils from '../util/FetchUtils'


export default class NetworkPage extends React.Component{

    render(){
        return(
            <View style={StyleUtils.container}>

                <View style={StyleUtils.btn}>
                    <Button title={'GET'} onPress={()=>{
                        let url='http://wanandroid.com/article/listproject/0/json';
                        FetchUtils.get(url,'',(result)=>{
                            ToastAndroid.show(JSON.stringify(result),ToastAndroid.LONG);
                        },(error)=>{
                            ToastAndroid.show(JSON.stringify(error),ToastAndroid.LONG);
                        });
                    }}/>
                </View>

                <View style={StyleUtils.btn}>
                    <Button title={'GET'} onPress={()=>{
                        let url='http://example.com/movies.json';
                        FetchUtils.get(url,'',(result)=>{
                            ToastAndroid.show(JSON.stringify(result),ToastAndroid.LONG);
                        },(result)=>{
                            ToastAndroid.show(JSON.stringify(result),ToastAndroid.LONG);
                        });
                    }}/>
                </View>

            </View>
        );
    }

}