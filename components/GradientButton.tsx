import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { modalStyles } from '../styles';

const GradientButton = ({ ...props }) => {
    return (
        <TouchableOpacity
            style={modalStyles.modalButton}
            onPress={() => {
                props.onClick();
            }}
        >

            <LinearGradient
                colors={['#2d2d2d', 'transparent']}
                start={[.6, 0]}
                end={[.5, 1]}
                style={modalStyles.buttonGradient}
            >
                <Text style={modalStyles.modalText}>{props.text}</Text>
            </LinearGradient>
        </TouchableOpacity>
    );
};

GradientButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
}

export default GradientButton;