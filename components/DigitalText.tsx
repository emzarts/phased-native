import React from 'react';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import { gameControlStyles } from '../styles';
import PropTypes from 'prop-types';

const DigitalText = ({...props}) => {
    let [fontsLoaded] = useFonts({
        'DS': require('../assets/fonts/Ds-Digit.ttf'),
    });
    if (!fontsLoaded) return null;
    return (
        <Text style={[{ fontFamily: 'DS' }, gameControlStyles.controlScore]}>{props.text}</Text>
    )
}

DigitalText.propTypes = {
    text: PropTypes.number,
}

export default DigitalText;