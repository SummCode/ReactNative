import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';

import StyleUtils from '../../util/StyleUtils'


export default class MinePage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor={'#008CF0'}
                    translucent={false}
                    barStyle={'light-content'}/>

                {/* 头部 */}

                <View style={styles.header}>
                    <View style={styles.titlebar}>
                        <Text style={styles.title}>我的</Text>
                        <View style={styles.titleIcons}>

                            <TouchableOpacity onPress={() => this.props.navigation.push('Message')} activeOpacity={0.8}>
                                <Image style={styles.titleIcon}
                                       source={require('../../../res/icons/icon_mine_message.png')}/>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => this.props.navigation.push('Setting')} activeOpacity={0.8}>
                                <Image style={styles.titleIcon}
                                       source={require('../../../res/icons/icon_mine_setting.png')}/>
                            </TouchableOpacity>

                        </View>
                    </View>

                    <TouchableOpacity style={styles.userInfos} onPress={() => this.props.navigation.push('UserInfo')}
                                      activeOpacity={0.8}>
                        {/*<View style={styles.userInfos}>*/}
                        <Image style={styles.headPortrait}
                               source={require('../../../res/images/img_default_head_portrait.jpg')}/>
                        <View style={styles.userInfo}>
                            <Text style={styles.userInfoText}>Summ</Text>
                            <Text style={styles.userInfoText}>176****35</Text>
                        </View>
                        <Image style={styles.titleIcon}
                               source={require('../../../res/icons/icon_right_arrow.png')}/>
                        {/*</View>*/}
                    </TouchableOpacity>


                </View>

                <View style={styles.money}>

                    <TouchableOpacity style={styles.moneyItem} activeOpacity={0.8}>
                        <Image source={require('../../../res/icons/icon_mine_money.png')}/>
                        <Text style={styles.moneyItemText}>钱包</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.moneyItem} activeOpacity={0.8}>
                        <Image source={require('../../../res/icons/icon_mine_red_packet.png')}/>
                        <Text style={styles.moneyItemText}>红包</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.moneyItem} activeOpacity={0.8}>
                        <Image source={require('../../../res/icons/icon_mine_gold_coin.png')}/>
                        <Text style={styles.moneyItemText}>金币</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.list}>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
                        <Image style={styles.listItemIcon}
                               source={require('../../../res/icons/icon_mine_collection.png')}/>
                        <Text style={styles.listItemText}>我的收藏</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
                        <Image style={styles.listItemIcon}
                               source={require('../../../res/icons/icon_mine_gold_mall.png')}/>
                        <Text style={styles.listItemText}>金币商城</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
                        <Image style={styles.listItemIcon}
                               source={require('../../../res/icons/icon_mine_customer_service.png')}/>
                        <Text style={styles.listItemText}>我的客服</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listItem} activeOpacity={0.8}>
                        <Image style={styles.listItemIcon}
                               source={require('../../../res/icons/icon_mine_business.png')}/>
                        <Text style={styles.listItemText} onPress={() => {
                            ToastAndroid.show('Setting', ToastAndroid.LONG);
                        }}>加盟合作</Text>
                    </TouchableOpacity>
                </View>


            </View>
        );
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    header: {
        width: '100%',
        height: 180,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop:20,
        backgroundColor: '#008CF0'
    },
    titlebar: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        flex: 5,
        fontSize: 18,
        color: '#FFFFFF',
    },
    titleIcons: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    titleIcon: {
        width: 24,
        height: 24,
    },
    userInfos: {
        height: 80,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    userInfoText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
    },
    headPortrait: {
        width: 72,
        height: 72,
        borderRadius: 1000,
    },
    money: {
        width: '100%',
        height: 72,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    moneyItem: {
        width: 64,
        height: 64,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    moneyItemText: {
        color: '#C0C0C0',
        fontSize: 12,
    },
    list: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    listItem: {
        width: '100%',
        height: 54,
        marginTop: 10,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    listItemIcon: {},
    listItemText: {
        marginLeft: 15,
        marginRight: 15,
        fontSize: 16,
    }
})