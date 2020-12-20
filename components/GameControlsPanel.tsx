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
                    onPress={() => props.setGameOver(!props.gameOver)}
                >
                    <Text>Pause</Text>
                </TouchableOpacity>
            </View>
    );
  };

GameControlsPanel.propTypes = {
    score: PropTypes.number,
    setGameOver: PropTypes.func
}

export default GameControlsPanel;