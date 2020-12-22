import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import { modalStyles } from '../styles';
import GameModal from './GameModal';
import GradientButton from './GradientButton';

const GameOverModal = ({ ...props }) => {
    const newGame = () => {
        props.newGame();
        props.setGameOver(!props.gameOver);
    }

    return (
        <GameModal visible={props.gameOver}>
            <Text style={modalStyles.gameOverTitle}>GAME OVER</Text>
            <Text style={modalStyles.modalText}>{props.score}</Text>
            <View style={modalStyles.buttons}>
                <GradientButton onClick={newGame} text={"Replay"} /> 
                <GradientButton onClick={props.goHome} text={"Home"} />
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