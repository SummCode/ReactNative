import React from 'react';
import {TouchableOpacity, Image, Text, View, StyleSheet} from 'react-native';
import PropTypes from "prop-types";
import {height} from "../util/AdapterUtils";

export default class ImageButton extends React.Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        disabled: PropTypes.bool.isRequired,
        imagePath: Image.propTypes.source,
        onClick: PropTypes.func,
        backgroundColor: PropTypes.string,
        borderRadius: PropTypes.number,
        textColor: PropTypes.string,
    }

    static defaultProps = {
        text: '',
        disabled: false,
    }


    render() {
        const {backgroundColor, borderRadius, disabled, textColor} = this.props;
        return (
            <TouchableOpacity activeOpacity={disabled ? 1 : 0.8}
                              style={[ImageButtonStyle.ImageBtn, borderRadius ? {borderRadius: borderRadius} : 0, backgroundColor ? {
                                  backgroundColor: backgroundColor,
                                  borderColor: backgroundColor
                              } : '#cdcdcd']}
                              onPress={() => {
                                  if (this.props.onClick && !disabled) {
                                      this.props.onClick();
                                  }
                              }}>
                <Image style={[ImageButtonStyle.image]}
                       source={this.props.imagePath}/>
                <Text style={[ImageButtonStyle.text, textColor ? {color: textColor} : '#cdcdcd']}>{this.props.text}</Text>
            </TouchableOpacity>

        );
    }
}


const ImageButtonStyle = StyleSheet.create({
    ImageBtn: {
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 6,
        paddingBottom: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cdcdcd',
        borderRadius: 3,
        borderColor: '#cdcdcd'
    },
    image: {
        resizeMode: 'contain',
    },
    text: {
        paddingTop: 2,
        color: 'white'
    },
})