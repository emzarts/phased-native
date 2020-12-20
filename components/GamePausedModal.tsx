import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import { modalStyles } from '../styles';
import GameModal from './GameModal';

const GamePausedModal = ({ ...props }) => {
    return (
        <GameModal visible={props.gamePaused}>
            <Text style={modalStyles.gameOverTitle}>PAUSED</Text>
            <Text style={modalStyles.modalText}>{props.score}</Text>
            <View style={modalStyles.buttons}>
                <TouchableHighlight
                    style={modalStyles.modalButton}
                    onPress={() => {
                        props.pauseGame();
                    }}
                >
                    <Text style={modalStyles.modalText}>Continue</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={modalStyles.modalButton}
                    onPress={() => {
                        props.pauseGame();
                    }}
                >
                    <Text style={modalStyles.modalText}>Menu</Text>
                </TouchableHighlight>
            </View>
        </GameModal>
    );
};

GamePausedModal.propTypes = {
    gamePaused: PropTypes.bool,
    pauseGame: PropTypes.func,
    score: PropTypes.number
}

export default GamePausedModal;