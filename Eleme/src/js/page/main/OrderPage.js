import React from "react";
import {StyleSheet, Text, View, StatusBar, FlatList, TouchableOpacity, Image, Alert} from "react-native";

import StyleUtils from "../../util/StyleUtils"


export default class OrderPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            orders: [
                {
                    "id": 1,
                    "name": "真功夫",
                    "time": "2018-10-11 11:36",
                    "orders": "大白饭+鲜辣排骨+虫草汤",
                    "logo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540305215773&di=5c75309e6f7c4b2435897bf06541cd6b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Faa64034f78f0f7366c7c53f70055b319eac41341.jpg",
                    "money": 78.0,
                    "status": '处理'
                },
                {
                    "id": 2,
                    "name": "吉野家",
                    "time": "2018-10-08 11:50",
                    "orders": "大白饭+鲜辣排骨+虫草汤",
                    "logo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540305215773&di=4f2ab3d680c85c4ca8f788d6c669fd07&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fd439b6003af33a87d2852232cd5c10385343b529.jpg",
                    "money": 78.0,
                    "status": '处理'
                },
                {
                    "id": 3,
                    "name": "稻麦香",
                    "time": "2018-10-06 11:27",
                    "orders": "大白饭+鲜辣排骨+虫草汤",
                    "logo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540305215771&di=daad9100aec1b5d88a404d1c3225f7db&imgtype=0&src=http%3A%2F%2Fpic17.nipic.com%2F20111108%2F6147325_161524163104_2.jpg",
                    "money": 78.0,
                    "status": '处理'
                },
                {
                    "id": 4,
                    "name": "谷滴米",
                    "time": "2018-10-05 11:38",
                    "orders": "招牌鱼粉（2份）",
                    "logo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540305215765&di=02d6c513c8df29036c05f958b3103800&imgtype=0&src=http%3A%2F%2Fpic40.photophoto.cn%2F20160830%2F1132113661840705_b.jpg",
                    "money": 78.0,
                    "status": '派送'
                },
                // {
                //     "id": 5,
                //     "name": "华莱士",
                //     "time": "2018-10-03 11:34",
                //     "orders": "鸡翅（6块）+鸡排（2块）+全家桶+大杯可乐（6杯）",
                //     "logo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540305215763&di=92ca556c6208cc09fbb6b2ce67d4d992&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fcc11728b4710b9124c61f9fec9fdfc0392452209.jpg",
                //     "money": 78.0,
                //     "status": '处理'
                // },
                // {
                //     "id": 6,
                //     "name": "麦当劳",
                //     "time": "2018-10-02 11:40",
                //     "orders": "汉堡（4个）+全家桶+大杯可乐（4杯）",
                //     "logo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540305215761&di=837fd5628117888bc0b4960e1e3989d0&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fcb8065380cd79123965dff5ca6345982b2b7805c.jpg",
                //     "money": 78.0,
                //     "status": '完成'
                // },
                // {
                //     "id": 7,
                //     "name": "肯德基",
                //     "time": "2018-10-01 11:32",
                //     "orders": "鸡排（2块）+鸡翅（6块）+全家桶+大杯可乐（6杯）",
                //     "logo": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1540305215921&di=2e3a65f4167c1c63da40b434a01d6971&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fdcc451da81cb39dbb8099371db160924aa1830cf.jpg",
                //     "money": 78.0,
                //     "status": '派送'
                // }
            ],

        }


    }

    getItemView = (data) => {

        return (
            <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.item}>
                    <Image style={styles.logo} source={{uri: data.item.logo}}/>

                    <View style={styles.content}>

                        <View style={styles.top}>
                            <Text style={styles.name}>{data.item.name}</Text>
                            <Text style={styles.status}>{data.item.status}</Text>
                        </View>

                        <Text style={styles.middle}>{data.item.orders}</Text>

                        <View style={styles.bottom}>
                            <Text style={styles.time}>{data.item.time}</Text>
                            <Text style={styles.money}>￥{data.item.money}</Text>
                        </View>

                    </View>


                </View>
            </TouchableOpacity>
        );

    };

    getKeyExtractor = (item, index) => {
        return item.id + '';
    };

    onRefreshData = () => {
        let index = Math.floor(Math.random() * (this.state.orders.length - 1));
        let item = this.state.orders[index];
        this.timer = setTimeout(() => {
            this.setState({
                orders: [item, ...this.state.orders]
            });
            Alert.alert(index + '  ' + this.state.orders.length);
        }, 2000);
    };


    render() {

        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor={"#008CF0"}
                    translucent={false}
                    barStyle={"light-content"}/>

                <View style={styles.list}>
                    <FlatList
                        data={this.state.orders}
                        renderItem={this.getItemView}
                        keyExtractor={this.getKeyExtractor}
                        onRefresh={() => this.onRefreshData()}
                        refreshing={this.state.loading}

                    />
                </View>

            </View>
        );
    }


    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
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
    list: {},
    item: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    logo: {
        width: 64,
        height: 64,
        borderRadius: 4,
        backgroundColor: '#c1c1c1',
        borderColor: '#666666',
        resizeMode: 'cover'
    },
    content: {
        margin: 10,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    top: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    name: {
        flex: 4,
    },
    status: {
        flex: 1,
        textAlign: 'right'
    },
    middle: {
        width: '100%'
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    time: {
        flex: 3,
    },
    money: {
        flex: 2,
        textAlign: 'right'
    },
});
