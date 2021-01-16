import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { modalStyles } from '../styles';
import { Feather } from '@expo/vector-icons'; 

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
                style={[modalStyles.buttonGradient]}
            >
                {props.children}
                <Text style={modalStyles.modalText}>{props.text} </Text>
                {props.icon ? <Feather name={props.icon} size={24} color="white" /> : null}
            </LinearGradient>
        </TouchableOpacity>
    );
};

GradientButton.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string,
    icon: PropTypes.string
}

export default GradientButton;