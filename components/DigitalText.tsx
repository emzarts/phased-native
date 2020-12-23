import React from 'react';
import { useFonts } from 'expo-font';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

const DigitalText = ({...props}) => {
    let [fontsLoaded] = useFonts({
        'DS': require('../assets/fonts/Ds-Digit.ttf'),
    });
    if (!fontsLoaded) return null;
    return (
        <Text style={[{ fontFamily: 'DS' }, props.styles]}>{props.text}</Text>
    )
}

DigitalText.propTypes = {
    text: PropTypes.number,
    styles: PropTypes.object
}

export default DigitalText;