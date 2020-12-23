import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gameControlStyles } from '../../styles';
import GradientButton from '../GradientButton';
import DigitalText from '../DigitalText';

const GameControlsPanel = ({ ...props }) => {
    return (
        <View style={gameControlStyles.gameControlView}>
            <View style={gameControlStyles.gameScore}>
                <DigitalText text={props.score} styles={gameControlStyles.controlScore} />
            </View>
            <GradientButton onClick={props.pauseGame} text={"Pause"} />
        </View>
    );
};

GameControlsPanel.propTypes = {
    score: PropTypes.number,
    gameStopped: PropTypes.bool,
    pauseGame: PropTypes.func
}

export default GameControlsPanel;