import React from 'react';
import {
    StyleSheet,
    FlatList,
    ToastAndroid,
    Image,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

export default class FlatListPage extends React.Component {

    static defaultProps = {
        url: 'https://news-at.zhihu.com/api/4/news/latest'
    };

    constructor(props) {
        super(props);

        this.state = {
            data: [],//存储列表使用的数据
            refreshing: false,//当前的刷新状态
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList renderItem={this.getView}
                          data={this.state.data}
                          initialNumToRender={6}
                          keyExtractor={this.keyExtractor}
                          ListHeaderComponent={this.header}
                          ListFooterComponent={this.footer}

                    //下拉刷新，必须设置refreshing状态
                          onRefresh={this.onRefresh}
                          refreshing={this.state.refreshing}

                    //上拉加载
                    // onEndReachedThreshold={0}
                    // onEndReached={this.onEndReached}

                    // numColumns={}
                    // getItem={}
                    // getItemCount={}
                    // disableVirtualization={}
                    // maxToRenderPerBatch={}
                    // updateCellsBatchingPeriod={}
                    // windowSize={}
                />
            </View>

        );
    }

    /**
     * item layout
     * @param item
     * @returns {*}
     */
    getView({item}) {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                    ToastAndroid.show(item.title, ToastAndroid.LONG);
                }}>
                <View style={styles.item}>
                    <Image style={styles.image} source={{uri: item.images[0]}}/>
                    <View style={styles.left}>
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.content}>
                            <Text style={styles.id}>{item.id + ''}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    /**
     * 给列表设置id
     * @param item
     * @param index
     * @returns {*}
     */
    keyExtractor = (item, index) => item.id;


    /**
     * 头布局
     */
    header = () => {
        return (
            <Text style={{
                backgroundColor: '#4398ff',
                color: 'white',
                fontSize: 18,
                textAlign: 'center',
                textAlignVertical: 'center',
                height: 64,
            }}>我是头布局</Text>
        )
    };
    /**
     * 尾布局
     */
    footer = () => {
        return (
            <Text style={{
                marginTop: 10,
                backgroundColor: '#EB3695',
                color: 'white',
                fontSize: 18,
                textAlign: 'center',
                textAlignVertical: 'center',
                height: 64,
            }}>我是尾布局</Text>
        )
    };

    count = 0;//下拉刷新的次数

    /**
     * 下拉属性
     */
    onRefresh = () => {
        //设置刷新状态为正在刷新
        this.setState({
            refreshing: true,
        });
        //延时加载
        const timer = setTimeout(() => {
            clearTimeout(timer);
            //往数组的第一位插入数据，模拟数据新增 , unshift()会返回数组的长度
            this.state.data.unshift(new this.ItemData('https://pic2.zhimg.com/v2-8f11b41f995ca5340510c1def1c003d1.jpg',
                '下拉刷新添加的数据——————' + this.count, 475843));
            this.count++;
            this.setState({
                refreshing: false,
            });
        }, 1500);
    };

    /**
     * 上拉加载
     *
     */
    onEndReached = (info: { distanceFromEnd: number }) => {
        ToastAndroid.show('正在加载中...', ToastAndroid.SHORT);

    };

    /**
     * json 数据实体类
     */
    ItemData(images, title, id) {
        this.images = new Array(images);
        this.title = title;
        this.id = id;
    }

    //渲染完成，请求网络数据
    componentDidMount() {
        fetch(this.props.url)
            .then((response) => response.json())
            .then((response) => {
                //解析json数据
                var json = response['stories'];
                //更新状态机
                this.setState({
                    data: json,
                });
            }).catch((error) => {
            if (error) {
                //网络错误处理
                console.log('error', error);
            }
        });
    }


}


const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F5FCFF'
    },
    item: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        marginTop: 8,
        marginLeft: 10,
        marginRight: 10,
    },
    image: {
        width: 90,
        height: 90,
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
    },
    left: {
        flex: 1,
        marginLeft: 8,
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    content: {
        bottom: 10,
        marginRight: 16,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    title: {
        color: '#333333',
        marginTop: 15,
    },
    id: {
        flex: 1,
        textAlign: 'right'
    }


});