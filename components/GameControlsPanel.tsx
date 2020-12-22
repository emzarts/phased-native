import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import { gameControlStyles, modalStyles } from '../styles';

const GameControlsPanel = ({...props}) => {
    return (
            <View style={gameControlStyles.gameControlView}>
                <View style={gameControlStyles.gameScore}>
                    <Text style={gameControlStyles.controlScore}>{props.score}</Text>
                </View>
                <TouchableOpacity 
                    style={modalStyles.modalButton}
                    onPress={() => props.pauseGame()}
                >
                    <Text style={modalStyles.modalText}>Pause</Text>
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