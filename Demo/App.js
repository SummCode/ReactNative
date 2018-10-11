/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
	Component
} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	FlatList,
	ToastAndroid,
	TouchableOpacity
} from 'react-native';




const BASCE_WIDGETS = [
	{ "code": 1, "widgetName": "文本" },
	{ "code": 2, "widgetName": "按钮" },
	{ "code": 3, "widgetName": "图片" },
	{ "code": 4, "widgetName": "列表" },
	{ "code": 5, "widgetName": "网络" },
	{ "code": 6, "widgetName": "第三方库" }
];

export default class App extends Component {


	getItemView(data, navigate) {
		return <TouchableOpacity activeOpacity={0.5}
			onPress={() => {
				routeName = ''
				switch (data.item.code) {
					case 1:
						routeName = 'Text'
						break;
					case 2:
						routeName = 'Button'
						break;
					case 3:
						routeName = 'Image'
						break;
					case 4:
						routeName = 'FlatList'
						break;
					case 5:
						routeName = 'Network'
						break;
					case 6:
						routeName = 'Text'
						break;
					default:
						routeName = 'Text'
				}

				navigate(routeName);
			}}>
			<View style={styles.itme}>
				<Text style={styles.name}>{data.item.widgetName}</Text>
			</View>
		</TouchableOpacity>
	}

	getSeparator() {
		return <View style={styles.separator} />
	}

	getKeyExtractor(item, index) {
		return '' + item.code;
	}

	render() {
		const { navigate } = this.props.navigation;
		return (<View style={styles.container} >
			<FlatList
				data={BASCE_WIDGETS}
				renderItem={(data)=>this.getItemView(data,navigate)}
				keyExtractor={this.getKeyExtractor}
				ItemSeparatorComponent={this.getSeparator}
			/>

		</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F5FCFF'
	},
	itme: {
		flex: 1,
		width: '100%',
		height: 64,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
	},
	name: {
		color: '#B0B0B0',
		fontSize: 20
	},
	separator: {
		flex: 1,
		height: 10,
		backgroundColor: '#F7F7F7'
	}
});