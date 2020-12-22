import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import { modalStyles } from '../styles';
import GameModal from './GameModal';

const GameOverModal = ({ ...props }) => {
    return (
        <GameModal visible={props.gameOver}>
            <Text style={modalStyles.gameOverTitle}>GAME OVER</Text>
            <Text style={modalStyles.modalText}>{props.score}</Text>
            <View style={modalStyles.buttons}>
                <TouchableHighlight
                    style={modalStyles.modalButton}
                    onPress={() => {
                        props.newGame();
                        props.setGameOver(!props.gameOver);
                    }}
                >
                    <Text style={modalStyles.modalText}>Replay</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={modalStyles.modalButton}
                    onPress={() => {
                        props.goHome();
                    }}
                >
                    <Text style={modalStyles.modalText}>Home</Text>
                </TouchableHighlight>
            </View>
        </GameModal>
    );
};

GameOverModal.propTypes = {
    goHome: PropTypes.func,
    gameOver: PropTypes.bool,
    setGameOver: PropTypes.func,
    newGame: PropTypes.func,
    score: PropTypes.number
}

export default GameOverModal;