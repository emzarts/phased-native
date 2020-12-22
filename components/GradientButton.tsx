import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text } from 'react-native';
import { modalStyles } from '../styles';

const GradientButton = ({ ...props }) => {
    return (
        <TouchableHighlight
            style={modalStyles.modalButton}
            onPress={() => {
                props.onClick();
            }}
        >
            <Text style={modalStyles.modalText}>{props.text}</Text>
        </TouchableHighlight>
    );
};

GradientButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
}

export default GradientButton;