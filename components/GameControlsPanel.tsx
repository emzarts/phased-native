import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { gameControlStyles, modalStyles } from '../styles';

const GameControlsPanel = ({...props}) => {
    return (
            <View style={gameControlStyles.gameControlView}>
                <Text style={gameControlStyles.controlScore}>{props.score}</Text>
                <TouchableOpacity 
                    style={[gameControlStyles.controlPause, modalStyles.modalButton]}
                    onPress={() => props.pauseGame()}
                >
                    <Text>Pause</Text>
                </TouchableOpacity>
            </View>
    );
  };

GameControlsPanel.propTypes = {
    score: PropTypes.number,
    gameStopped: PropTypes.bool,
    pauseGame: PropTypes.func
}

export default GameControlsPanel;